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

