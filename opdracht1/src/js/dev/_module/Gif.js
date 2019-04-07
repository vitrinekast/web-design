// http://api.giphy.com/v1/gifs/random?tag=party&api_key=qPzKLrelOKaDnxQrlIxUKaiWI14bGYkW
var Gif = (function () {
    const IMG_SELECTOR = '.fn-gif';
    const url = 'http://api.giphy.com/v1/gifs/random?tag=party&api_key=' + keys.giphy;

    let elements = [];

    var init = function () {

        elements = document.querySelectorAll(IMG_SELECTOR);
        console.log(url)
    }

    var update = function () {
        const Http = new XMLHttpRequest();

        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            if(!Http.responseText) { return false }
            const response = JSON.parse(Http.responseText);
            console.log(response)
            console.log(response.data.image_original_url)
            elements.forEach((elem) => {
              elem.src = response.data.image_original_url;
            })
        }
        // http://api.giphy.com/v1/gifs/random?tag=party&api_key=qPzKLrelOKaDnxQrlIxUKaiWI14bGYkW
    }

    return {
        init: init,
        update: update
    }
})();
