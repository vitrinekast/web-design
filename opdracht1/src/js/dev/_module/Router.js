var Router = (function () {
    var init = function () {

        // setup the navigo router
        // Navigo Router is a simple vanilla JS micro router 
        // Docs / source: https://github.com/krasimir/navigo
        var routeRoot = null;
        var useHash = true;
        var hash = '#!';
        var router = new Navigo(routeRoot, useHash, hash);

        // set the view attribute on the body so the styling can display the correct views

        router
            .on({
                'events/:id': function (params) {
                    window.noSleep.disable();
                    document.body.setAttribute('view-active', 'event');
                    // open/animate the current event
                    Events.openEventBasedOnParams(params);

                },
                'events/:id/finished': function (params) {
                    window.noSleep.disable();
                    Gif.update();
                    
                    document.body.setAttribute('view-active', 'finished');
                    // open/animate the current event
                    
                    
                },
                'events/:id/:pdf': function (params) {
                    window.noSleep.enable();
                    document.body.setAttribute('view-active', 'pdf');
                    // open/animate the current event
                    // Events.openEventBasedOnParams(params);
                    // open/animate the currently selected ticket
                    Tickets.open(params)
                },
                
                '*': function (params) {
                    window.noSleep.disable();
                    document.body.removeAttribute('view-active');
                    // This function will also close any cards that are opened when navigating back to the overview page
                    Events.openEventBasedOnParams(params);
                }
            })
            .resolve();
    }

    return {
        init: init
    }
})();
