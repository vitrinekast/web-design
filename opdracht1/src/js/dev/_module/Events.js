var Events = (function () {

    const CARD_SELECTOR = '.fn-card';
    const CARD_ID_ATTR = 'data-id';
    const CARD_SELECTOR_ACTIVE = 'card-active';

    // Opens any event card based on the current route
    var openEventBasedOnParams = function (params) {
      if(!params) {
        params = {id: false}
      }
        document.querySelectorAll(CARD_SELECTOR).forEach((card) => {

            // find the correct card, close a card when it used to be active
            if(card.getAttribute(CARD_ID_ATTR) === params.id) {
                open(card);
            } else if(card.classList.contains(CARD_SELECTOR_ACTIVE)) {
                close(card);
            }
        })
    }


    var open = function (elem) {
        const bounds = elem.getBoundingClientRect();

        elem.classList.add(CARD_SELECTOR_ACTIVE);
        elem.setAttribute('data-width', bounds.width);
        // Anime.js might be the greatest JS library since sliced bread. Powerfull + 16 kb.
        // Docs: https://animejs.com/

        // translate the card to the top of the viewport by using its current bounds
        // also, remove any margin around by setting it's width to the window width
        // transition-done class sets the card to 'fixed' - which allows the  user to scroll easily within the card.
        // transition-done replaces the functionality of the transforms (without the user noticing)
        anime({
            targets: elem,
            translateY: bounds.y * -1,
            translateX: bounds.x * -1,
            width: window.innerWidth,
            easing: 'linear',
            duration: 100,
            complete: function () {

                elem.classList.add('transition-done');
            }
        });

        // also, display the 'card expanded' -> description of the event, is translated open.
        anime({
            targets: elem.querySelector('.card__expanded'),
            maxHeight: 999,
            opacity: 1,
            easing: 'linear',
            duration: 200,
        });
    }

    var close = function (elem) {
        elem.classList.remove(CARD_SELECTOR_ACTIVE);
        elem.classList.remove('transition-done');


        // revert everything, use the original width of the card to animate it back into place.
        anime({
            targets: elem,
            translateY: 0,
            translateX: 0,
            easing: 'linear',
            width: parseInt(elem.getAttribute('data-width')),
            duration: 300
        });
        anime({
            targets: elem.querySelector('.card__expanded'),
            maxHeight: 0,
            opacity: 0,
            duration: 150,
            easing: 'linear',
        });
    }

    var find = function (config) {

        // find an event based on the params
        // TODO: combine the today / soon so we can easily loop trough all the events, or provide an event api


        let todayEvent = data.today.events.find(function (event) {
            return event.id === parseInt(config.id);
        })
        let soonEvent = data.soon.events.find(function (event) {
            return event.id === parseInt(config.id);
        })

        return todayEvent ? todayEvent : soonEvent

    }

    return {
        find: find,
        openEventBasedOnParams: openEventBasedOnParams
    }
})();
