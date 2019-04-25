const FIREBASE_PROJECT_ID = 'opdracht-2-iteratie';

var Api = (function () {

    const REVIEW_ELEM_SELECTOR = '.fn-review-elem';


    var init = function () {

    }

    let combineTemplateWithData = function (templateString, apiData, selector, cb) {
        let template = ejs.compile(templateString, {});
        let html = ejs.render(templateString, { data: apiData }, {});

        document.querySelector(selector).innerHTML = html;

        if(cb) {
            cb(apiData);
        }
    }

    var mergePartialWithData = function (params, url, templateUrl, eventName, selector, cb) {
        getTextContent(templateUrl)
            .then((templateResponse) => {
                getApi(url)
                    .then((apiResponse) => {
                        apiResponse.params = params;
                        combineTemplateWithData(templateResponse, apiResponse, selector, cb);
                    })
            })
    }

    async function getTextContent(templateUrl) {
        let response = await fetch(templateUrl);
        let data = await response.text()
        return data;
    }

    async function getApi(url) {
        let response = await fetch(url);
        let data = await response.json()
        return data;
    }

    async function post(url, postData) {
        let response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json()
        return data;
    }

    var displayView = function (name, params) {

        if(name == 'home') {
            const url = `https://${FIREBASE_PROJECT_ID}.firebaseio.com/review.json`;
            const templateUrl = 'home.ejs';

            mergePartialWithData(params, url, templateUrl, 'created-partial', APP_SELECTOR, function (data) {
                ee.emitEvent(CREATED_VIEW_E, [name]);
            });
        } else if(name == 'review') {

            const url = `https://${FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}.json`;
            const templateUrl = 'review.ejs';

            mergePartialWithData(params, url, templateUrl, 'created-partial', APP_SELECTOR, function (data) {
                ee.emitEvent(CREATED_VIEW_E, [name]);
                displayCode(data)

            });
        } else if(name == 'thanks') {

            const url = `https://${FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}.json`;
            const templateUrl = 'thanks.ejs';

            mergePartialWithData(params, url, templateUrl, 'created-partial', APP_SELECTOR, function (data) {
                ee.emitEvent(CREATED_VIEW_E, [name]);
            });
        }
    }

    var displayCode = function (data) {
        let currentFile = data.files.find((item) => {
            return item.id === parseInt(data.params.fileid)
        })
        let codeElem = document.querySelector(REVIEW_ELEM_SELECTOR);
        let url = `${currentFile.url}?client_id=${keys.GITHUB_CLIENT_ID}&client_secret=${keys.GITHUB_CLIENT_SECRET}`;

        getTextContent(url)
            .then((string) => {
                codeElem.textContent = parseCode(currentFile.type, string);
                hljs.highlightBlock(codeElem);
                hljs.lineNumbersBlock(codeElem);

                window.setTimeout(function () {
                    ee.emitEvent('created-partial');

                }, 50)
            })
    }

    var parseCode = function (type, data) {
        const codeConfig = {
            indent_size: 2,
            space_in_empty_paren: true
        }

        if(type === 'css') {
            return css_beautify(data, codeConfig);
        } else if(type === 'javascript') {
            return js_beautify(data, codeConfig);
        } else if(type === 'html') {
            return html_beautify(data, codeConfig);
        } else {
            return data
        }
    }

    var updateReviewedFile = function (params) {
        let url = `https://${FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}/files.json`;

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
                const url = `https://${FIREBASE_PROJECT_ID}.firebaseio.com/review/${params.reviewid}/files/${first.id}.json`;
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

    }





    return {
        init: init,
        updateReviewedFile: updateReviewedFile,
        displayView: displayView,
        post: post,
        getApi: getApi
    }
})();
