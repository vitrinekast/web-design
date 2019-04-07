// Javascripts
window.onload = function () {
    
  if(!keys) {
    console.error('It seems like your project is missing some keys....')
  }
  
    window.noSleep = new NoSleep();
    Tickets.init();
    Router.init();
    Gif.init();

};
