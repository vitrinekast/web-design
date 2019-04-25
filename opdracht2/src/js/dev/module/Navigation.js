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
      const FOCUS_SELECTOR = '.fn-focus'

      let moveDate = new Date();

      var init = function () {

          SpatialNavigation.init();
          SpatialNavigation.add({
              selector: 'a, .focusable, ' + FOCUS_CODE_SELECTOR + ', ' + FOCUS_SELECTOR
          });
          SpatialNavigation.makeFocusable();
      }
      var update = function () {
          SpatialNavigation.makeFocusable();
      }

      var autocomplete = function () {

          var inputs = document.querySelectorAll(".fn-autocomplete");
          SpatialNavigation.resume();
          inputs.forEach((input) => {
              input.addEventListener('focus', onAutoFocus);
              input.addEventListener('blur', onAutoBlur);
              resizeInput(input);
          })
      }

      var onAutoFocus = function (e) {
          console.log('onAutoFocus');


          SpatialNavigation.pause();
      }

      var onAutoBlur = function (e) {
          resizeInput(e.currentTarget)
          SpatialNavigation.resume();
      }

      var resizeInput = function (el) {
          let value = el.value;
          if(!value) {
              value = el.placeholder
          }
          let width = value.length * 12;
          el.style.width = Math.max(100, Math.min(width, 400)) + 'px';
      }

      var setMultiSelectElement = function (elem) {

          elem.classList.add(MULTI_SELECT_CLASS)

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

          // SpatialNavigation.pause();

          Mousetrap.bind('shift+down', function (e) {
              console.log('shift+down')
              moveDate = new Date();
              moveSelection('down', false, document.activeElement, true);

          });
          Mousetrap.bind('shift+up', function (e) {
              console.log('shift+up')
              isMulti = true;
              moveDate = new Date();
              moveSelection('up', false, document.activeElement, true);

          });
          Mousetrap.bind('down', function (e) {
              console.log('down')
              moveDate = new Date();
              moveSelection('down', true, document.activeElement.previousSibling, false);
          }, true);
          Mousetrap.bind('up', function (e) {
              e.preventDefault();
              console.log('up')
              moveDate = new Date();
              moveSelection('up', true, document.activeElement.previousSibling, false);
          }, true);
      }

      var moveSelection = function (direction, shouldClean, elem, move) {
          scrollIntoViewCenter(elem);


          if(shouldClean) {
              clearSelection();
          }
          console.log({ move })
          if(move) {
              SpatialNavigation.move(direction);
          }
          moveVoteNav(elem);
          setMultiSelectElement(elem)
          isMulti = false;
      }

      var scrollIntoViewCenter = function (elem) {
          Element.prototype.documentOffsetTop = function () {
              return this.offsetTop + (this.offsetParent ? this.offsetParent.documentOffsetTop() : 0);
          };

          var top = elem.documentOffsetTop() - (window.innerHeight / 2);
          window.scrollTo(0, top);
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
          vote: vote,
          autocomplete: autocomplete
      }
  })();
