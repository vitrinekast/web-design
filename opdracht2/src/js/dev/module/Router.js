

let router;
var Router = (function () {
    
    let appContainer;
    var init = function () {
        // setup the navigo router
        // Navigo Router is a simple vanilla JS micro router 
        // Docs / source: https://github.com/krasimir/navigo
        var routeRoot = null;
        var useHash = true;
        var hash = '#!';
        router = new Navigo(routeRoot, useHash, hash);
        appContainer = document.querySelector(APP_SELECTOR);
        // set the view attribute on the body so the styling can display the correct views
        router
            .on({
                'review/:reviewid/:fileid/finish': function (params) {
                    Api.updateReviewedFile(params)
                    router.navigate(`/review/${params.reviewid}/${parseInt(params.fileid) + 1}`);
                },
                'review/:reviewid/:fileid': function (params) {
                    Api.displayView('review', params);  
                    onUpdatePage();
                    
                    ee.addOnceListener('created-partial', function (e) {
                      
                        Vote.displayVotes(params);
                        Navigation.update();
                        Navigation.multiSelect();
                        Navigation.vote();
                    });
                },
                'review/thanks': function (params) {
                    getView('thanks.ejs', params);
                    onUpdatePage();
                },
                '*': function (params) {
                    Api.displayView('home', params);  
                    onUpdatePage();
                }
            })
            .resolve();
    }
    var onUpdatePage = function (params) {
        ee.addOnceListener(CREATED_VIEW_E, function (e) {
            router.updatePageLinks();
            window.scrollTo(0, 0);
            Navigation.update();
        });
    }
    var getView = function (url, params, apiData) {
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (str) {
                let template = ejs.compile(str, {});
                let html = ejs.render(str, { data: apiData }, {});
                appContainer.innerHTML = html;
                ee.emitEvent(CREATED_VIEW_E, ['url']);
            })
    }
    return {
        init: init,
        getView: getView
    }
})();
