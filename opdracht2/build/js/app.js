"use strict";

window.onload = function () {
  console.log('loaded', Mercury);
  var url = "https://trackchanges.postlight.com/building-awesome-cms-f034344d8ed";
  Mercury.parse(url).then(function (result) {
    return console.log(result);
  });
};