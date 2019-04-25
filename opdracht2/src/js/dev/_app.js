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

