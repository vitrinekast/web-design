"use strict";

// Javascripts
window.onload = function () {
  Router.init();
};

var Router = function () {
  var init = function init() {
    var root = null;
    var useHash = true; // Defaults to: false

    var hash = '#!'; // Defaults to: '#'

    var router = new Navigo(root, useHash, hash);
    router.on({
      'events/:id': function eventsId(params) {
        console.log("events", params);
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