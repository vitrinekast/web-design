"use strict";

// Javascripts
window.onload = function () {
  Router.init();
};

function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
  }

  return {
    x: xPosition,
    y: yPosition
  };
}

var Router = function () {
  var init = function init() {
    var root = null;
    var useHash = true; // Defaults to: false

    var hash = '#!'; // Defaults to: '#'

    var router = new Navigo(root, useHash, hash);
    router.on({
      'events/:id': function eventsId(params) {
        document.querySelectorAll('.fn-card').forEach(function (card) {
          if (card.getAttribute('data-id') === params.id) {
            card.classList.add('active');
            console.log(getPosition(card));
            card.style.transform = "translate3d(0, -".concat(getPosition(card).y, "px, 0)");
          } else {
            console.log(card.classList);
            delete card.style.transform;
            card.classList.remove('active');
          }
        });
      },
      'events/pdf/:id': function eventsPdfId(params) {
        console.log("pdf", params);
      },
      '*': function _() {
        console.log('home');
      }
    }).resolve();
  };

  return {
    init: init
  };
}();