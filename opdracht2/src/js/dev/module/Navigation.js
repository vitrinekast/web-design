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
