// Javascripts

let ee;
window.onload = function () {

    if(!keys) {
        console.error('It seems like your project is missing some keys....')
    }
    ee = new EventEmitter();
    Router.init();
    Git.init();
    Navigation.init();
    
};


var keys = {
    GITHUB_CLIENT_ID: 'f9e50c4b0ccd62204fbd',
    GITHUB_CLIENT_SECRET: '28c55d5fcd3147a7ab59b3e41d3fb758c9217699',
    FIREBASE_PROJECT_ID: 'cmd-web-design-opdracht-2'
}


const data =  {
    title: 'Everytssshing Web Share',
  
    navigation: {
        items: [{
                title: 'Home',
                url: '/'
            },
            {
                title: 'Up for review',
                url: '/course'
            },
            // {
            //     title: 'Cool stuff',
            //     url: '/cool'
            // },
            // {
            //     title: 'Get up here?',
            //     url: '/contact'
            // },
            // {
            //     title: 'Archive',
            //     url: '/archive'
            // },
        ]
    }
}

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

  var Navigation = (function () {
  let votenav;
  let votenavUp;
  let votenavDown;
  let voteHeight;
  
    var init = function () {
        SpatialNavigation.init();
        SpatialNavigation.add({
            selector: 'a, .focusable, .hljs-ln-n'
        });

    }

    var update = function () {
        document.querySelectorAll('.hljs-ln-n').forEach((elem) => {
            elem.setAttribute('tabindex', '0')
        })
        SpatialNavigation.makeFocusable();

    }


    const MULTI_SELECT_CLASS = 'is-multi-select';
    const MULTI_SELECT_PARENT_CLASS = 'is-multi-select-parent';
    
    const MULTI_SELECT_SELECTOR = '.' + MULTI_SELECT_CLASS;
    const MULTI_SELECT_PARENT_SELECTOR = '.' + MULTI_SELECT_PARENT_CLASS;
    
    var setMultiSelectElement = function (elem) {
        const activeEl = document.activeElement;
        const activeRow = document.activeElement.parentNode.parentNode;
        if(activeRow) {
          activeRow.classList.add(MULTI_SELECT_PARENT_CLASS)
          if(!document.querySelectorAll(MULTI_SELECT_PARENT_SELECTOR + '-first').length) {
              activeRow.classList.add(MULTI_SELECT_PARENT_CLASS + '-first')
          }

          if(document.querySelector(MULTI_SELECT_PARENT_SELECTOR + '-last')) {
              document.querySelector(MULTI_SELECT_PARENT_SELECTOR + '-last').classList.remove(MULTI_SELECT_PARENT_CLASS + '-last')
          }
          
          activeRow.classList.add(MULTI_SELECT_PARENT_CLASS + '-last')
        }

        activeEl.classList.add(MULTI_SELECT_CLASS)
        

        
    }
    
    var removeClass = function (className) {
      document.querySelectorAll('.' + className).forEach((elem) => {
          elem.classList.remove(className)
      })
    }
    
    var clearSelection = function () {
      removeClass(MULTI_SELECT_CLASS);
      removeClass(MULTI_SELECT_PARENT_CLASS);
      removeClass(MULTI_SELECT_PARENT_CLASS + '-last');
      removeClass(MULTI_SELECT_PARENT_CLASS + '-first');
    }
    
    var multiSelect = function () {
        let selection = [];
        let isMulti = false;
        SpatialNavigation.pause();
        // Mousetrap.bind('shift+down', function (e) {
        //     setMultiSelectElement(document.activeElement);
        //     SpatialNavigation.move('down');
        // });
        Mousetrap.bind('shift+down', function (e) {
            
            if(!isMulti) {
              clearSelection();
            }
            setMultiSelectElement(document.activeElement);
            SpatialNavigation.move('down');
            setMultiSelectElement(document.activeElement);
            isMulti = true;
        });
        Mousetrap.bind('shift+up', function (e) {
            
            if(!isMulti) {
              clearSelection();
            }
            setMultiSelectElement(document.activeElement);
            SpatialNavigation.move('up');
            setMultiSelectElement(document.activeElement);
            isMulti = true;
        });
        Mousetrap.bind('down', function (e) {
            clearSelection();
            SpatialNavigation.move('down');
            moveVoteNav(document.activeElement);
            setMultiSelectElement(document.activeElement)
            isMulti = false;
        });
        Mousetrap.bind('up', function (e) {
          clearSelection();
            SpatialNavigation.move('up');
            moveVoteNav(document.activeElement);
            setMultiSelectElement(document.activeElement)
        });
      
    }
    
    var moveVoteNav = function (targetEl) {
        const bounds = targetEl.getBoundingClientRect();
        
        const parBounds = document.querySelector('.fn-review-elem').getBoundingClientRect();
        var distance = Math.abs(bounds.top - parBounds.top );
        votenav.setAttribute('data-current-index', targetEl.getAttribute('data-line-number'));
        votenav.style.transform = `translate3d(0%, ${distance - 10}px, 0)`;
    }
    
    var castVote = function (vote, type) {
      
      document.querySelectorAll('.is-multi-select').forEach((item) => {
          Git.castVote(item.getAttribute('data-line-number'), type)
      })
      
    }
    
    
    
    var vote = function () {
        votenav = document.querySelector('.nav-vote');
        votenavUp = votenav.querySelector('.fn-vote-up');
        votenavDown = votenav.querySelector('.fn-vote-down');
        voteHeight = votenav.getBoundingClientRect().height;
        
        let upTimeout;
        
        Mousetrap.bind('h', function (e) {
            votenavUp.classList.add('animate');
            upTimeout = window.setTimeout(() => votenavUp.classList.remove('animate'), 100);
            castVote(votenav.getAttribute('data-current-index'), 'up');
        });
        Mousetrap.bind('f', function (e) {
            votenavDown.classList.add('animate');
            upTimeout = window.setTimeout(() => votenavDown.classList.remove('animate'), 100);
            castVote(votenav.getAttribute('data-current-index'), 'down');
        });
         
         
         document.querySelectorAll('.hljs-ln-n').forEach((elem) => {
           elem.addEventListener('focus', function (e) {
             moveVoteNav(e.currentTarget)
           });
         })
  
    }

    return {
        init: init,
        update: update,
        multiSelect: multiSelect,
        vote: vote
    }
})();

let router;

var Router = (function () {
    const APP_SELECTOR = '.fn-app';

    let appContainer;
    

    const CREATED_VIEW_E = 'created-view';

    var init = function () {
        // setup the navigo router
        // Navigo Router is a simple vanilla JS micro router 
        // Docs / source: https://github.com/krasimir/navigo
        var routeRoot = null;
        var useHash = true;
        var hash = '#!';
        router = new Navigo(routeRoot, useHash, hash);
        appContainer = document.querySelector(APP_SELECTOR);
        // set the view attribute on the body so the styling can display the correct views

        router
            .on({
                'review/:reviewid/:fileid/finish': function (params) {
                  Git.finishReview(params);
                  router.navigate(`/review/${params.reviewid}/${parseInt(params.fileid) + 1}`);
                },
                'review/:reviewid/:fileid': function (params) {
                    
                    getView('review.ejs', params);
                    onUpdatePage();

                    ee.addOnceListener(CREATED_VIEW_E, function (e) {
                        // Git.displayCode(params);
                        Api.displayPartial('file', params);
                        
                    });
                    
                    ee.addOnceListener('created-partial-code', function (e) {
                        
                        Navigation.update();
                        Navigation.multiSelect();
                        Navigation.vote();
                    });
                    

                },
                'review/thanks': function (params) {
                    getView('thanks.ejs', params);
                    onUpdatePage();

                },
                'review/:reviewid': function (params) {
                    getView('review.ejs', params);
                    onUpdatePage();

                    ee.addOnceListener(CREATED_VIEW_E, function (e) {
                        // Git.displayCode(params);
                        Api.displayPartial('file', params);
                        
                    });
                    
                    ee.addOnceListener('created-partial-code', function (e) {
                        
                        Navigation.update();
                        Navigation.multiSelect();
                        Navigation.vote();
                    });
                },
                

                '*': function (params) {
                    getView('home.ejs', {});
                    onUpdatePage();
                    
                    ee.addOnceListener(CREATED_VIEW_E, function (e) {
                        Api.displayPartial('review', params);
                    });
                    
                    ee.addOnceListener('created-partial', function (e) {
                        
                        Navigation.update();
                        router.updatePageLinks();
                    });



                }
            })
            .resolve();
    }

    var onUpdatePage = function (params) {
        ee.addOnceListener(CREATED_VIEW_E, function (e) {
            router.updatePageLinks();
            window.scrollTo(0, 0);
            Navigation.update();
        });
    }
    var getSubData = function (str, params) {
        if(!params) { params = {} }

          // let subdata = data;
          return data
        // 
        // if(params.category) {
        //     subdata = subdata[params.category];
        // }
        // 
        // if(params.courseid) {
        //     subdata = subdata.items.find((item) => {
        //         return item.id === params.courseid
        //     })
        // }
        // if(params.reviewid) {
        //     subdata = subdata.review.find((item) => {
        //         return item.id === parseInt(params.reviewid)
        //     })
        // }
      
        return subdata

    }


    var getView = function (url, params, apiData) {

        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (str) {
                if(!apiData) {
                    apiData = getSubData(str, params);
                }

                let template = ejs.compile(str, {});

                let html = ejs.render(str, { data: apiData }, {});
                appContainer.innerHTML = html;

                ee.emitEvent(CREATED_VIEW_E, ['url']);
            })
    }

    // var getPartial = function (url, selector, apiData) {
    //     fetch(url)
    //         .then(function (response) {
    //             return response.text();
    //         })
    //         .catch(error => console.error('Error:', error))
    //         .then(function (str) {
    //             if(apiData.message === 'Not Found') { return false }
    //             let template = ejs.compile(str, {});
    // 
    //             let html = ejs.render(str, { data: apiData }, {});
    //             document.querySelector(selector).innerHTML = html
    //             router.updatePageLinks();
    //             Navigation.update();
    //         })
    // }
    return {
        init: init,
        getView: getView,
        // getPartial: getPartial
    }
})();

var Api = (function () {
    var init = function () {

    }

    var mergePartialWithData = function (params, url, templateUrl, eventName, selector, cb) {
        
        let combineTemplateWithData = function (templateString, apiData) {
            let template = ejs.compile(templateString, {});
            let html = ejs.render(templateString, { data: apiData }, {});
            
            document.querySelector(selector).innerHTML = html;
            
            ee.emitEvent('created-partial', [name]);
            
            if(cb) {
              cb(apiData);
            }
            
        }

        fetch(templateUrl)
            .then((templateResponse) => {
                return templateResponse.text();
            })
            .then((templateResponse) => {
                fetch(url)
                    .then((apiResponse) => {
                        return apiResponse.json();
                    })
                    .then((apiResponse) => {
                        apiResponse.params = params
                        combineTemplateWithData(templateResponse, apiResponse);
                    })
            })
    }

    var displayPartial = function (name, params) {

        if(name == 'review') {
            const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/${name}.json`;
            const templateUrl = 'list-review.ejs';
            mergePartialWithData(params, url, templateUrl, 'created-partial', '.fn-list-review');
        }
        if(name == 'file') {
            const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}.json`;
            const templateUrl = 'data-file.ejs';
            mergePartialWithData(params, url, templateUrl, 'created-partial', '.fn-api-file', function (data) {
              Git.displayCode(data)
            });

        }

    }

    var updateReviewedFile = function (params) {
        let url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}/files.json`;
        
        let files;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                
                let first = response.find((item) => {
                    return !item.reviewed;
                })
                first.reviewed = true;
                const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}/files/${first.id}.json`;
                fetch(url, {
                        method: 'PUT', // or 'PUT'
                        body: JSON.stringify(first), // data can be `string` or {object}!
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(res => res.json())
                    .then(function (response) {
                        


                    })
                    .catch(error => console.error('Error:', error));
            })

        // fetch(url, {
        //         method: 'PUT', // or 'PUT'
        //         body: JSON.stringify(currentVote), // data can be `string` or {object}!
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }).then(res => res.json())
        //     .then(function (response) {
        //         
        //         displayVotes(params);
        // 
        //     })
        //     .catch(error => console.error('Error:', error));
    }


    // var displayPartial = function (name) {
    //     if(name == 'review') {
    //         
    // 
    //         const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/${name}.json`;
    //         const templateUrl = 'list-review.ejs';
    // 
    //         fetch(templateUrl)
    //             .then(function (response) {
    //                 return response.text();
    //             })
    //             .then(getApiData)
    //             .then(function (htmlString) {
    //                 fetch(url)
    //                     .then(function (response) {
    //                         return response.json();
    //                     })
    //                     .catch(error => console.error('Error:', error))
    //                     .then(function (apiData) {
    //                         
    //                         let template = ejs.compile(htmlString, {});
    // 
    //                         let html = ejs.render(htmlString, { data: apiData }, {});
    //                         document.querySelector('.fn-list-review').innerHTML = html;
    //                         ee.emitEvent('created-partial', [name]);
    //                     })
    //             })
    // 
    // 
    // 
    //     }


    // }

    return {
        init: init,
        displayPartial: displayPartial,
        updateReviewedFile: updateReviewedFile
    }
})();
