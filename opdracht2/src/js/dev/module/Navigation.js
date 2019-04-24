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
