var Router = (function () {
    const APP_SELECTOR = '.fn-app';

    let appContainer;
    let router;


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

                ':category': function (params) {
                    getView('courses.ejs', params);
                    window.scrollTo(0, 0);
                    
                },
                ':category/:courseid': function (params) {
                    getView('detail.ejs', params);
                    Git.getForks(params);
                    window.scrollTo(0, 0);
                    
                },
                'course/:courseid/:user/:repo': function (params) {
                    Git.getRepo(params, function (apiData) {
                        getView('work.ejs', params, apiData);
                        Git.getReadme(params);
                        
                    });
                    window.scrollTo(0, 0);
                },
                'cool': function (params) {
                    getView('cool.ejs', {});
                    window.scrollTo(0, 0);
                    
                },
                '*': function (params) {
                    getView('home.ejs', {});
                    window.scrollTo(0, 0);
                    
                }
            })
            .resolve();
    }
    var createView = function (str, params) {
        if(!params) { params = {} }

        let subdata = data;

        if(params.category) {
            subdata = subdata[params.category];
        }

        if(params.courseid) {
            subdata = subdata.items.find((item) => {
                return item.id === params.courseid
            })
        }
        parseViewData(str, subdata)

    }

    var parseViewData = function (str, subdata) {
        let template = ejs.compile(str, {});

        let html = ejs.render(str, { data: subdata }, {});
        appContainer.innerHTML = html
        router.updatePageLinks();
        
    }

    var getView = function (url, params, apiData) {
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (str) {
                if(apiData) {
                    parseViewData(str, apiData);
                } else {
                    createView(str, params, data);
                }

            })
    }

    var getPartial = function (url, selector, apiData) {
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .catch(error => console.error('Error:', error))
            .then(function (str) {
                if(apiData.message === 'Not Found') { return false }
                let template = ejs.compile(str, {});

                let html = ejs.render(str, { data: apiData }, {});
                document.querySelector(selector).innerHTML = html
                router.updatePageLinks();
            })
    }
    return {
        init: init,
        getView: getView,
        getPartial: getPartial
    }
})();
