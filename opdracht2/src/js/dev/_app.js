// Javascripts
window.onload = function () {

    if(!keys) {
        console.error('It seems like your project is missing some keys....')
    }
    
    Router.init();
    Git.init();
};
