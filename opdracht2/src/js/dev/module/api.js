var Api = (function () {
    var init = function () {

    }

    var mergePartialWithData = function (params, url, templateUrl, eventName, selector, cb) {
        
        let combineTemplateWithData = function (templateString, apiData) {
            let template = ejs.compile(templateString, {});
            let html = ejs.render(templateString, { data: apiData }, {});
            
            document.querySelector(selector).innerHTML = html;
            
            ee.emitEvent('created-partial', [name]);
            
            if(cb) {
              cb(apiData);
            }
            
        }

        fetch(templateUrl)
            .then((templateResponse) => {
                return templateResponse.text();
            })
            .then((templateResponse) => {
                fetch(url)
                    .then((apiResponse) => {
                        return apiResponse.json();
                    })
                    .then((apiResponse) => {
                        apiResponse.params = params
                        combineTemplateWithData(templateResponse, apiResponse);
                    })
            })
    }

    var displayPartial = function (name, params) {

        if(name == 'review') {
            const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/${name}.json`;
            const templateUrl = 'list-review.ejs';
            mergePartialWithData(params, url, templateUrl, 'created-partial', '.fn-list-review');
        }
        if(name == 'file') {
            const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}.json`;
            const templateUrl = 'data-file.ejs';
            mergePartialWithData(params, url, templateUrl, 'created-partial', '.fn-api-file', function (data) {
              Git.displayCode(data)
            });

        }

    }

    var updateReviewedFile = function (params) {
        let url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}/files.json`;
        
        let files;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                
                let first = response.find((item) => {
                    return !item.reviewed;
                })
                first.reviewed = true;
                const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}/files/${first.id}.json`;
                fetch(url, {
                        method: 'PUT', // or 'PUT'
                        body: JSON.stringify(first), // data can be `string` or {object}!
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).then(res => res.json())
                    .then(function (response) {
                        


                    })
                    .catch(error => console.error('Error:', error));
            })

        // fetch(url, {
        //         method: 'PUT', // or 'PUT'
        //         body: JSON.stringify(currentVote), // data can be `string` or {object}!
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }).then(res => res.json())
        //     .then(function (response) {
        //         
        //         displayVotes(params);
        // 
        //     })
        //     .catch(error => console.error('Error:', error));
    }


    // var displayPartial = function (name) {
    //     if(name == 'review') {
    //         
    // 
    //         const url = `https://${keys.FIREBASE_PROJECT_ID}.firebaseio.com/${name}.json`;
    //         const templateUrl = 'list-review.ejs';
    // 
    //         fetch(templateUrl)
    //             .then(function (response) {
    //                 return response.text();
    //             })
    //             .then(getApiData)
    //             .then(function (htmlString) {
    //                 fetch(url)
    //                     .then(function (response) {
    //                         return response.json();
    //                     })
    //                     .catch(error => console.error('Error:', error))
    //                     .then(function (apiData) {
    //                         
    //                         let template = ejs.compile(htmlString, {});
    // 
    //                         let html = ejs.render(htmlString, { data: apiData }, {});
    //                         document.querySelector('.fn-list-review').innerHTML = html;
    //                         ee.emitEvent('created-partial', [name]);
    //                     })
    //             })
    // 
    // 
    // 
    //     }


    // }

    return {
        init: init,
        displayPartial: displayPartial,
        updateReviewedFile: updateReviewedFile
    }
})();
