let router;

var Router = (function () {
    const APP_SELECTOR = '.fn-app';

    let appContainer;
    

    const CREATED_VIEW_E = 'created-view';

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
                  Git.finishReview(params);
                  router.navigate(`/review/${params.reviewid}/${parseInt(params.fileid) + 1}`);
                },
                'review/:reviewid/:fileid': function (params) {
                    
                    getView('review.ejs', params);
                    onUpdatePage();

                    ee.addOnceListener(CREATED_VIEW_E, function (e) {
                        // Git.displayCode(params);
                        Api.displayPartial('file', params);
                        
                    });
                    
                    ee.addOnceListener('created-partial-code', function (e) {
                        
                        Navigation.update();
                        Navigation.multiSelect();
                        Navigation.vote();
                    });
                    

                },
                'review/thanks': function (params) {
                    getView('thanks.ejs', params);
                    onUpdatePage();

                },
                'review/:reviewid': function (params) {
                    getView('review.ejs', params);
                    onUpdatePage();

                    ee.addOnceListener(CREATED_VIEW_E, function (e) {
                        // Git.displayCode(params);
                        Api.displayPartial('file', params);
                        
                    });
                    
                    ee.addOnceListener('created-partial-code', function (e) {
                        
                        Navigation.update();
                        Navigation.multiSelect();
                        Navigation.vote();
                    });
                },
                

                '*': function (params) {
                    getView('home.ejs', {});
                    onUpdatePage();
                    
                    ee.addOnceListener(CREATED_VIEW_E, function (e) {
                        Api.displayPartial('review', params);
                    });
                    
                    ee.addOnceListener('created-partial', function (e) {
                        
                        Navigation.update();
                        router.updatePageLinks();
                    });



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
    var getSubData = function (str, params) {
        if(!params) { params = {} }

          // let subdata = data;
          return data
        // 
        // if(params.category) {
        //     subdata = subdata[params.category];
        // }
        // 
        // if(params.courseid) {
        //     subdata = subdata.items.find((item) => {
        //         return item.id === params.courseid
        //     })
        // }
        // if(params.reviewid) {
        //     subdata = subdata.review.find((item) => {
        //         return item.id === parseInt(params.reviewid)
        //     })
        // }
      
        return subdata

    }


    var getView = function (url, params, apiData) {

        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (str) {
                if(!apiData) {
                    apiData = getSubData(str, params);
                }

                let template = ejs.compile(str, {});

                let html = ejs.render(str, { data: apiData }, {});
                appContainer.innerHTML = html;

                ee.emitEvent(CREATED_VIEW_E, ['url']);
            })
    }

    // var getPartial = function (url, selector, apiData) {
    //     fetch(url)
    //         .then(function (response) {
    //             return response.text();
    //         })
    //         .catch(error => console.error('Error:', error))
    //         .then(function (str) {
    //             if(apiData.message === 'Not Found') { return false }
    //             let template = ejs.compile(str, {});
    // 
    //             let html = ejs.render(str, { data: apiData }, {});
    //             document.querySelector(selector).innerHTML = html
    //             router.updatePageLinks();
    //             Navigation.update();
    //         })
    // }
    return {
        init: init,
        getView: getView,
        // getPartial: getPartial
    }
})();
