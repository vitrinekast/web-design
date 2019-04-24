// Javascripts

let ee;
const CREATED_VIEW_E = 'created-view';
const APP_SELECTOR = '.fn-app';

window.onload = function () {

    if(!keys) {
        console.error('It seems like your project is missing some keys....')
    }
    ee = new EventEmitter();
    Router.init();
    Navigation.init();
    
};


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

var keys = {
    GITHUB_CLIENT_ID: 'f9e50c4b0ccd62204fbd',
    GITHUB_CLIENT_SECRET: '28c55d5fcd3147a7ab59b3e41d3fb758c9217699',
    FIREBASE_PROJECT_ID: 'cmd-web-design-opdracht-2'
}


  var Navigation = (function () {
      let votenav;
      let votenavUp;
      let votenavDown;
      let voteHeight;
      let isMulti = false;

      const MULTI_SELECT_CLASS = 'is-multi-select';
      const MULTI_SELECT_PARENT_CLASS = 'is-multi-select-parent';
      const MULTI_SELECT_SELECTOR = '.' + MULTI_SELECT_CLASS;
      const MULTI_SELECT_PARENT_SELECTOR = '.' + MULTI_SELECT_PARENT_CLASS;

      const FOCUS_CODE_SELECTOR = '.hljs-ln tbody > tr';
      
      let moveDate = new Date();

      var init = function () {
          SpatialNavigation.init();
          SpatialNavigation.add({
              selector: 'a, .focusable, ' + FOCUS_CODE_SELECTOR
          });
          SpatialNavigation.makeFocusable();
      }
      var update = function () {
          SpatialNavigation.makeFocusable();
      }

      var setMultiSelectElement = function (elem) {

          elem.classList.add(MULTI_SELECT_CLASS)
          
          // console.log(document.querySelectorAll(MULTI_SELECT_SELECTOR + '-first').length)
          // 
          if(!document.querySelectorAll(MULTI_SELECT_SELECTOR + '-first').length) {
              elem.classList.add(MULTI_SELECT_CLASS + '-first')
          }
          if(document.querySelector(MULTI_SELECT_SELECTOR + '-last')) {
              document.querySelector(MULTI_SELECT_SELECTOR + '-last').classList.remove(MULTI_SELECT_CLASS + '-last')
          }
          elem.classList.add(MULTI_SELECT_CLASS + '-last')
      }
      var removeClass = function (className) {
          document.querySelectorAll('.' + className).forEach((elem) => {
              elem.classList.remove(className)
          })
      }
      var clearSelection = function () {
          removeClass(MULTI_SELECT_CLASS);
          removeClass(MULTI_SELECT_CLASS + '-last');
          removeClass(MULTI_SELECT_CLASS + '-first');
      }


      var multiSelect = function () {

          let selection = [];
          isMulti = false;

          SpatialNavigation.pause();

          Mousetrap.bind('shift+down', function (e) {
            console.log(`'shift+down', function (e) {`);
              moveDate = new Date();
              moveSelection('down', false, document.activeElement);
              
          });
          Mousetrap.bind('shift+up', function (e) {
            console.log(`'shift+up', function (e) {`);
              isMulti = true;
              moveDate = new Date();
              moveSelection('up', false, document.activeElement);
              
          });
          Mousetrap.bind('down', function (e) {
            console.log(`'down', function (e) {`);
              moveDate = new Date();
            moveSelection('down', true, document.activeElement);
          });
          Mousetrap.bind('up', function (e) {
            console.log(`'up', function (e) {`);
              moveDate = new Date();
              moveSelection('up', true, document.activeElement);
          });
      }
      
      var moveSelection = function (direction, shouldClean, elem) {
        
        if(shouldClean) {
            clearSelection();
        }
        
        SpatialNavigation.move(direction);
        moveVoteNav(document.activeElement);
        setMultiSelectElement(document.activeElement)
        isMulti = false;
      }
      
      var moveVoteNav = function (targetEl) {
          const bounds = targetEl.getBoundingClientRect();
          const parBounds = document.querySelector('.fn-review-elem').getBoundingClientRect();
          var distance = Math.abs(bounds.top - parBounds.top);
          votenav.setAttribute('data-current-index', targetEl.getAttribute('data-line-number'));
          votenav.style.transform = `translate3d(0%, ${distance - 1}px, 0)`;
      }
      var castVote = function (vote, type) {
          document.querySelectorAll('.is-multi-select').forEach((item) => {
            console.log(item)
              Vote.castVote(item.firstChild.getAttribute('data-line-number'), type)
          })
      }
      var vote = function () {
          votenav = document.querySelector('.nav-vote');
          votenavUp = votenav.querySelector('.fn-vote-up');
          votenavDown = votenav.querySelector('.fn-vote-down');
          voteHeight = votenav.getBoundingClientRect().height;
          let upTimeout;
          
          Mousetrap.bind(['h', 'j', 'k', 'l'], function (e) {
              votenavUp.classList.add('animate');
              upTimeout = window.setTimeout(() => votenavUp.classList.remove('animate'), 100);
              castVote(votenav.getAttribute('data-current-index'), 'up');
          });
          Mousetrap.bind(['f', 'd', 's', 'a'], function (e) {
              votenavDown.classList.add('animate');
              upTimeout = window.setTimeout(() => votenavDown.classList.remove('animate'), 100);
              castVote(votenav.getAttribute('data-current-index'), 'down');
          });
          document.querySelectorAll(FOCUS_CODE_SELECTOR).forEach((elem) => {
            elem.addEventListener("blur", function (e) {
              console.log('blur', e.currentTarget)
              // if(e.currentTarget.classList.contains('is-multi-select')) {
              //   clearSelection();
              // }
            });

              elem.addEventListener('focus', function (e) {
                  if(Math.abs(moveDate - new Date()) > 100) {
                    clearSelection();
                  }
                  moveVoteNav(document.activeElement);
                  
                  setMultiSelectElement(document.activeElement)
                
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
    
    let appContainer;
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
                    Api.updateReviewedFile(params)
                    router.navigate(`/review/${params.reviewid}/${parseInt(params.fileid) + 1}`);
                },
                'review/:reviewid/:fileid': function (params) {
                    Api.displayView('review', params);  
                    onUpdatePage();
                    
                    ee.addOnceListener('created-partial', function (e) {
                      
                        Vote.displayVotes(params);
                        Navigation.update();
                        Navigation.multiSelect();
                        Navigation.vote();
                    });
                },
                'review/thanks': function (params) {
                    getView('thanks.ejs', params);
                    onUpdatePage();
                },
                '*': function (params) {
                    Api.displayView('home', params);  
                    onUpdatePage();
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
    var getView = function (url, params, apiData) {
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (str) {
                let template = ejs.compile(str, {});
                let html = ejs.render(str, { data: apiData }, {});
                appContainer.innerHTML = html;
                ee.emitEvent(CREATED_VIEW_E, ['url']);
            })
    }
    return {
        init: init,
        getView: getView
    }
})();

var Vote = (function () {
    let votes = [];

    var castVote = function (id, direction) {
        let params = router.lastRouteResolved().params;
        let currentVote = getCurrentVote(id);
        console.log('casting', currentVote)
        const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}/files/${params.fileid}/votes/${id}.json`;

        currentVote[direction] = true;
        

        Api.post(url, currentVote)
            .then((response) => {
                Vote.displayVotes(params);
            })
            .catch(error => console.error('Error:', error));
    }

    var getCurrentVote = function (id) {
        id = parseInt(id);
        
        return votes[id] ? votes[id] : {
            id: id,
            up: false,
            down: false
        }
    }

    var displayVotesOnElements = function () {
      
        if(votes.length === 0) {
            return false
        }

        votes.forEach((vote) => {
            if(vote) {
                let targetElement = document.querySelector(`.hljs-ln-numbers[data-line-number="${vote.id}"]`);
                if(targetElement) {
                  vote.up ? targetElement.setAttribute('data-vote-up', vote.up ) : false;
                  vote.down ? targetElement.setAttribute('data-vote-down', vote.down ) : false;
                  targetElement.classList.add('voted')
                } else {
                  console.log(vote)
                }
            }
        })
    }
    var displayVotes = function (params) {
        const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}/files/${params.fileid}/votes.json`;
        console.log('dis[a]')
        Api.getApi(url)
            .then((response) => {
                votes = response ? response : []
            })
        fetch(url)
            .then(res => res.json())
            .then(function (response) {
                votes = response ? response : []
                displayVotesOnElements();
            })
            .catch(error => console.error('Error:', error));
    }

    return {
        displayVotes: displayVotes,
        castVote: castVote
    }
})();

var Api = (function () {
    const REVIEW_ELEM_SELECTOR = '.fn-review-elem';

    var init = function () {

    }

    let combineTemplateWithData = function (templateString, apiData, selector, cb) {
        let template = ejs.compile(templateString, {});
        let html = ejs.render(templateString, { data: apiData }, {});

        document.querySelector(selector).innerHTML = html;

        if(cb) {
            cb(apiData);
        }
    }

    var mergePartialWithData = function (params, url, templateUrl, eventName, selector, cb) {
        getTextContent(templateUrl)
            .then((templateResponse) => {
                getApi(url)
                    .then((apiResponse) => {
                        apiResponse.params = params;
                        combineTemplateWithData(templateResponse, apiResponse, selector, cb);
                    })
            })
    }

    async function getTextContent(templateUrl) {
        let response = await fetch(templateUrl);
        let data = await response.text()
        return data;
    }

    async function getApi(url) {
        let response = await fetch(url);
        let data = await response.json()
        return data;
    }

    async function post(url, postData) {
        let response = await fetch(url, {
          method: 'PUT', 
          body: JSON.stringify(postData), 
          headers: {
              'Content-Type': 'application/json'
          }
        });
        let data = await response.json()
        return data;
    }

    var displayView = function (name, params) {

        if(name == 'home') {
            const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/review.json`;
            const templateUrl = 'home.ejs';

            mergePartialWithData(params, url, templateUrl, 'created-partial', APP_SELECTOR, function (data) {
                ee.emitEvent(CREATED_VIEW_E, [name]);
            });
        } else if(name == 'review') {

            const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}.json`;
            const templateUrl = 'review.ejs';

            mergePartialWithData(params, url, templateUrl, 'created-partial', APP_SELECTOR, function (data) {
                ee.emitEvent(CREATED_VIEW_E, [name]);
                displayCode(data)

            });
        }
    }

    var displayCode = function (data) {
        let currentFile = data.files.find((item) => {
            return item.id === parseInt(data.params.fileid)
        })
        let codeElem = document.querySelector(REVIEW_ELEM_SELECTOR);
        let url = `${currentFile.url}?client_id=${keys.GITHUB_CLIENT_ID}&client_secret=${keys.GITHUB_CLIENT_SECRET}`;

        getTextContent(url)
            .then((string) => {
                codeElem.textContent = parseCode(currentFile.type, string);
                hljs.highlightBlock(codeElem);
                hljs.lineNumbersBlock(codeElem);

                window.setTimeout(function () {
                    ee.emitEvent('created-partial');

                }, 50)
            })
    }

    var parseCode = function (type, data) {
        const codeConfig = {
            indent_size: 2,
            space_in_empty_paren: true
        }

        if(type === 'css') {
            return css_beautify(data, codeConfig);
        } else if(type === 'javascript') {
            return js_beautify(data, codeConfig);
        } else if(type === 'html') {
            return html_beautify(data, codeConfig);
        } else {
            return data
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

    }
    
  



    return {
        init: init,
        updateReviewedFile: updateReviewedFile,
        displayView: displayView,
        post: post,
        getApi: getApi
    }
})();
