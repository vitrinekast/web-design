var Git = (function () {

    const REVIEW_ELEM_SELECTOR = '.fn-review-elem';
    
    let votes = [];

    var init = function () {

    }

    var getCurrentFile = function (data) {
        return data.files.find((item) => {
            return item.id === parseInt(data.params.fileid)
        })

    }
    var displayVotes = function (params) {
      const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}/files/${params.fileid}/votes.json`;
      
      fetch(url)
          .then(res => res.json())
          .then(function (response) {
              
              votes = response ? response : []
              
              if(!response) {
                return false
              }
              
              response.forEach((vote) => {
                if(vote) {
                  let targetElement = document.querySelector(`.hljs-ln-numbers[data-line-number="${vote.id}"]`);
                  if(vote.up > 0) {
                    targetElement.setAttribute('data-vote-up', vote.up)
                  }
                  if(vote.down > 0) {
                    targetElement.setAttribute('data-vote-down', vote.down)
                  }
                  
                  targetElement.classList.add('voted')
                }
              })
            
          })
          .catch(error => console.error('Error:', error));
    }
    
    var castVote = function (id, direction) {
      id = parseInt(id);
      
      let currentVote;
   
       if(!votes[id]) {
           currentVote = {
               id: id,
               up: 0,
               down: 0
           }
       } else {
           currentVote = votes[id]
       }
       currentVote[direction]++;
       
       let params = router.lastRouteResolved().params;
   
       const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}/files/${params.fileid}/votes/${id}.json`;
       
       fetch(url, {
               method: 'PUT', // or 'PUT'
               body: JSON.stringify(currentVote), // data can be `string` or {object}!
               headers: {
                   'Content-Type': 'application/json'
               }
           }).then(res => res.json())
           .then(function (response) {
               
               displayVotes(params);
               
           })
           .catch(error => console.error('Error:', error));
    }
    
    var displayCode = function (data) {
      
        let currentFile = getCurrentFile(data);
        let reviewElement = document.querySelector(REVIEW_ELEM_SELECTOR);
        let url = `${currentFile.url}?client_id=${keys.GITHUB_CLIENT_ID}&client_secret=${keys.GITHUB_CLIENT_SECRET}`;

        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (str) {
              
              let codeContent;
              console.log({currentFile})
              if(currentFile.type === 'css') {
                codeContent = css_beautify(str, { indent_size: 2, space_in_empty_paren: true });
              } else if(currentFile.type === 'javascript') {
                 codeContent = js_beautify(str, { indent_size: 2, space_in_empty_paren: true });
              }  else if(currentFile.type === 'markdown') {
                // codeContent = marked(str)
                codeContent = str
              } else {
                codeContent = str
              }
                
                reviewElement.innerHTML = codeContent;
                hljs.highlightBlock(reviewElement);
                hljs.lineNumbersBlock(reviewElement);
                displayVotes(data.params);

                window.setTimeout(function () {
                    ee.emitEvent('created-partial-code');
                }, 50)


            })
    }
    
    var finishReview = function (params) {
      
      Api.updateReviewedFile(params)
    }


    return {
        init: init,
        displayCode: displayCode,
        castVote: castVote,
        finishReview: finishReview
    }
})();
