"use strict";

// Javascripts
window.onload = function () {
  if (!keys) {
    console.error('It seems like your project is missing some keys....');
  }

  window.noSleep = new NoSleep();
  Tickets.init();
  Router.init();
  Gif.init();
}; // identical to the data provided in the handlebars files
// TODO update gulp task to combine these files


var data = {
  today: {
    title: "Vandaag",
    events: [{
      id: 0,
      img: "https://s3-eu-west-1.amazonaws.com/static.melkweg.nl/uploads/images/scaled/inspiration_view_huge/24837",
      title: "JOOST VAN BELLEN ALL NIGHT",
      planning: "19:00 zaal open | 20:00 Komodo",
      location: "Melkweg Upstairs",
      time: "19:00",
      scanned: false,
      date: "Woensdag 20 maart 2019",
      description: "Obscure, sultry, intense, a bit horny you could say. That's Joost van Bellen All Night. This living legend did not end up behind the geraniums, as we say in the Netherlands, after the conclusion of the chapter RAUW. In recent months he has crammed himself into a Speedo and dived into the darkest corners of the web to find new unheard music. He oiled himself excessively and squeezed into darkest crevices of the internet and stuck his nose in the most sinister places. What did he find? ",
      allTickets: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      tickets: [{
        shared: true,
        scanned: false,
        pdf: "aaa.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        scanned: false,
        pdf: "1111.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }]
    }]
  },
  soon: {
    title: "Binnenkort",
    events: [{
      id: 12,
      img: "https://s3-eu-west-1.amazonaws.com/static.melkweg.nl/uploads/images/scaled/event_header/24389",
      title: "Komodso",
      planning: "19:00 zaal open | 20:00 Komodo",
      location: "Melkweg Upstairs",
      time: "19:00",
      date: "Woensdag 20 maart 2019",
      description: "De naam van deze band hint niet voor niets naar verre streken. Het vijftal maakt namelijk naar eigen zeggen vintage exotic rock-‘n’-roll, stevig geworteld in de 50's, 60's en 70's, maar extra op smaak gebracht met stijlelementen en instrumenten uit verre windstreken. Exotisch, dus. Denk aan: surfrock, woestijnblues, rumba en Indiase raga. Komodo is het geesteskind van rocker Tommy Ebben (ex-Knalland) en de muzikale nomade Gino Bombrini (ex-SKIP&DIE). Beiden zingen en spelen gitaar. Janneke Nijhuis (The Deaf, The Indien) is de bassiste, Jody van Ooijen drumt en Gino’s broer Massimo speelt percussie en benadrukt daarmee nog eens extra de jungle vibe, het tribale, het ‘oergevoel’ van Komodo.",
      tickets: [{
        shared: true,
        pdf: "aweifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "98243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }]
    }, {
      id: 1,
      img: "https://s3-eu-west-1.amazonaws.com/static.melkweg.nl/uploads/images/scaled/event_header/24797",
      title: "COI LERAY",
      planning: "Het volledige tijdschema wordt hier vermeld zodra het rond is.",
      location: "Melkweg Upstairs",
      time: "19:00",
      date: "Dinsdag 9 april 2019",
      description: "New Jersey rapper en zangeres Coi Leray brengt haar melodieuze, hard-hitting tracks naar onze Upstairs! Na het consistent uitbrengen van tracks brak ze in 2017 door met de singles 'G.A.N.' en 'Pac Girl'. De twee singles creëerden niet alleen een buzz in de industrie door de harde beats, maar ook door Coi Leray's songwriting skills en uniekheid om zowel te kunnen rappen als zingen in één track.  Haar debuutalbum ' Everythingcoz' kwam in 2018 uit en bereikte binnen de korte keren al over de 150,000 plays op SoundCloud. Haar charismatische persoonlijkheid en unieke fashion sense zorgen ervoor dat fans de rising start op de voet volgen. It's lit. ",
      tickets: [{
        shared: true,
        pdf: "awe12ifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "98243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: true,
        pdf: "aweifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "9822243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }]
    }, {
      id: 2,
      img: "https://s3-eu-west-1.amazonaws.com/static.melkweg.nl/uploads/images/scaled/event_header/24797",
      title: "COI LERAY",
      planning: "Het volledige tijdschema wordt hier vermeld zodra het rond is.",
      location: "Melkweg Upstairs",
      time: "19:00",
      date: "Dinsdag 9 april 2019",
      description: "New Jersey rapper en zangeres Coi Leray brengt haar melodieuze, hard-hitting tracks naar onze Upstairs! Na het consistent uitbrengen van tracks brak ze in 2017 door met de singles 'G.A.N.' en 'Pac Girl'. De twee singles creëerden niet alleen een buzz in de industrie door de harde beats, maar ook door Coi Leray's songwriting skills en uniekheid om zowel te kunnen rappen als zingen in één track.  Haar debuutalbum ' Everythingcoz' kwam in 2018 uit en bereikte binnen de korte keren al over de 150,000 plays op SoundCloud. Haar charismatische persoonlijkheid en unieke fashion sense zorgen ervoor dat fans de rising start op de voet volgen. It's lit. ",
      tickets: [{
        shared: true,
        pdf: "aweifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "98243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: true,
        pdf: "aweifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "98243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }]
    }, {
      id: 3,
      img: "https://s3-eu-west-1.amazonaws.com/static.melkweg.nl/uploads/images/scaled/event_header/24797",
      title: "COI LERAY",
      planning: "Het volledige tijdschema wordt hier vermeld zodra het rond is.",
      location: "Melkweg Upstairs",
      time: "19:00",
      date: "Dinsdag 9 april 2019",
      description: "New Jersey rapper en zangeres Coi Leray brengt haar melodieuze, hard-hitting tracks naar onze Upstairs! Na het consistent uitbrengen van tracks brak ze in 2017 door met de singles 'G.A.N.' en 'Pac Girl'. De twee singles creëerden niet alleen een buzz in de industrie door de harde beats, maar ook door Coi Leray's songwriting skills en uniekheid om zowel te kunnen rappen als zingen in één track.  Haar debuutalbum ' Everythingcoz' kwam in 2018 uit en bereikte binnen de korte keren al over de 150,000 plays op SoundCloud. Haar charismatische persoonlijkheid en unieke fashion sense zorgen ervoor dat fans de rising start op de voet volgen. It's lit. ",
      tickets: [{
        shared: true,
        pdf: "aweifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "98243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: true,
        pdf: "aweifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "98243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }]
    }, {
      id: 4,
      img: "https://s3-eu-west-1.amazonaws.com/static.melkweg.nl/uploads/images/scaled/event_header/24797",
      title: "COI LERAY",
      planning: "Het volledige tijdschema wordt hier vermeld zodra het rond is.",
      location: "Melkweg Upstairs",
      time: "19:00",
      date: "Dinsdag 9 april 2019",
      description: "New Jersey rapper en zangeres Coi Leray brengt haar melodieuze, hard-hitting tracks naar onze Upstairs! Na het consistent uitbrengen van tracks brak ze in 2017 door met de singles 'G.A.N.' en 'Pac Girl'. De twee singles creëerden niet alleen een buzz in de industrie door de harde beats, maar ook door Coi Leray's songwriting skills en uniekheid om zowel te kunnen rappen als zingen in één track.  Haar debuutalbum ' Everythingcoz' kwam in 2018 uit en bereikte binnen de korte keren al over de 150,000 plays op SoundCloud. Haar charismatische persoonlijkheid en unieke fashion sense zorgen ervoor dat fans de rising start op de voet volgen. It's lit. ",
      tickets: [{
        shared: true,
        pdf: "aweifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "98243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: true,
        pdf: "aweifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "98243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }]
    }, {
      id: 5,
      img: "https://s3-eu-west-1.amazonaws.com/static.melkweg.nl/uploads/images/scaled/event_header/24797",
      title: "COI LERAY",
      planning: "Het volledige tijdschema wordt hier vermeld zodra het rond is.",
      location: "Melkweg Upstairs",
      time: "19:00",
      date: "Dinsdag 9 april 2019",
      description: "New Jersey rapper en zangeres Coi Leray brengt haar melodieuze, hard-hitting tracks naar onze Upstairs! Na het consistent uitbrengen van tracks brak ze in 2017 door met de singles 'G.A.N.' en 'Pac Girl'. De twee singles creëerden niet alleen een buzz in de industrie door de harde beats, maar ook door Coi Leray's songwriting skills en uniekheid om zowel te kunnen rappen als zingen in één track.  Haar debuutalbum ' Everythingcoz' kwam in 2018 uit en bereikte binnen de korte keren al over de 150,000 plays op SoundCloud. Haar charismatische persoonlijkheid en unieke fashion sense zorgen ervoor dat fans de rising start op de voet volgen. It's lit. ",
      tickets: [{
        shared: true,
        pdf: "aweifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "98243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: true,
        pdf: "aweifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "98243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }]
    }, {
      id: 6,
      img: "https://s3-eu-west-1.amazonaws.com/static.melkweg.nl/uploads/images/scaled/event_header/24797",
      title: "COI LERAY",
      planning: "Het volledige tijdschema wordt hier vermeld zodra het rond is.",
      location: "Melkweg Upstairs",
      time: "19:00",
      date: "Dinsdag 9 april 2019",
      description: "New Jersey rapper en zangeres Coi Leray brengt haar melodieuze, hard-hitting tracks naar onze Upstairs! Na het consistent uitbrengen van tracks brak ze in 2017 door met de singles 'G.A.N.' en 'Pac Girl'. De twee singles creëerden niet alleen een buzz in de industrie door de harde beats, maar ook door Coi Leray's songwriting skills en uniekheid om zowel te kunnen rappen als zingen in één track.  Haar debuutalbum ' Everythingcoz' kwam in 2018 uit en bereikte binnen de korte keren al over de 150,000 plays op SoundCloud. Haar charismatische persoonlijkheid en unieke fashion sense zorgen ervoor dat fans de rising start op de voet volgen. It's lit. ",
      tickets: [{
        shared: true,
        pdf: "aweifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "98243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: true,
        pdf: "aweifawef.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }, {
        shared: false,
        pdf: "98243.pdf",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
      }]
    }]
  }
};
var keys = {
  giphy: 'qPzKLrelOKaDnxQrlIxUKaiWI14bGYkW'
};

var Events = function () {
  var CARD_SELECTOR = '.fn-card';
  var CARD_ID_ATTR = 'data-id';
  var CARD_SELECTOR_ACTIVE = 'card-active'; // Opens any event card based on the current route

  var openEventBasedOnParams = function openEventBasedOnParams(params) {
    if (!params) {
      params = {
        id: false
      };
    }

    document.querySelectorAll(CARD_SELECTOR).forEach(function (card) {
      // find the correct card, close a card when it used to be active
      if (card.getAttribute(CARD_ID_ATTR) === params.id) {
        if (!card.classList.contains(CARD_SELECTOR_ACTIVE)) {
          open(card);
        }
      } else if (card.classList.contains(CARD_SELECTOR_ACTIVE)) {
        close(card);
      }
    });
  };

  var open = function open(elem) {
    var bounds = elem.getBoundingClientRect();
    elem.classList.add(CARD_SELECTOR_ACTIVE);
    console.log('setting the width', bounds);
    elem.setAttribute('data-width', bounds.width); // Anime.js might be the greatest JS library since sliced bread. Powerfull + 16 kb.
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
      complete: function complete() {
        elem.classList.add('transition-done');
      }
    }); // also, display the 'card expanded' -> description of the event, is translated open.

    anime({
      targets: elem.querySelector('.card__expanded'),
      maxHeight: 999,
      opacity: 1,
      easing: 'linear',
      duration: 200
    });
  };

  var close = function close(elem) {
    elem.classList.remove(CARD_SELECTOR_ACTIVE);
    elem.classList.remove('transition-done'); // revert everything, use the original width of the card to animate it back into place.

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
      easing: 'linear'
    });
  };

  var find = function find(config) {
    // find an event based on the params
    // TODO: combine the today / soon so we can easily loop trough all the events, or provide an event api
    var todayEvent = data.today.events.find(function (event) {
      return event.id === parseInt(config.id);
    });
    var soonEvent = data.soon.events.find(function (event) {
      return event.id === parseInt(config.id);
    });
    return todayEvent ? todayEvent : soonEvent;
  };

  return {
    find: find,
    openEventBasedOnParams: openEventBasedOnParams
  };
}(); // http://api.giphy.com/v1/gifs/random?tag=party&api_key=qPzKLrelOKaDnxQrlIxUKaiWI14bGYkW


var Gif = function () {
  var IMG_SELECTOR = '.fn-gif';
  var url = 'http://api.giphy.com/v1/gifs/random?tag=party&api_key=' + keys.giphy;
  var elements = [];

  var init = function init() {
    elements = document.querySelectorAll(IMG_SELECTOR);
    console.log(url);
  };

  var update = function update() {
    var Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = function (e) {
      if (!Http.responseText) {
        return false;
      }

      var response = JSON.parse(Http.responseText);
      console.log(response);
      console.log(response.data.image_original_url);
      elements.forEach(function (elem) {
        elem.src = response.data.image_original_url;
      });
    }; // http://api.giphy.com/v1/gifs/random?tag=party&api_key=qPzKLrelOKaDnxQrlIxUKaiWI14bGYkW

  };

  return {
    init: init,
    update: update
  };
}();

var Router = function () {
  var init = function init() {
    // setup the navigo router
    // Navigo Router is a simple vanilla JS micro router 
    // Docs / source: https://github.com/krasimir/navigo
    var routeRoot = null;
    var useHash = true;
    var hash = '#!';
    var router = new Navigo(routeRoot, useHash, hash); // set the view attribute on the body so the styling can display the correct views

    router.on({
      'events/:id': function eventsId(params) {
        window.noSleep.disable();
        document.body.setAttribute('view-active', 'event'); // open/animate the current event

        Events.openEventBasedOnParams(params);
      },
      'events/:id/finished': function eventsIdFinished(params) {
        window.noSleep.disable();
        Gif.update();
        document.body.setAttribute('view-active', 'finished'); // open/animate the current event
      },
      'events/:id/:pdf': function eventsIdPdf(params) {
        window.noSleep.enable();
        document.body.setAttribute('view-active', 'pdf'); // open/animate the current event
        // Events.openEventBasedOnParams(params);
        // open/animate the currently selected ticket

        Tickets.open(params);
      },
      '*': function _(params) {
        window.noSleep.disable();
        document.body.removeAttribute('view-active'); // This function will also close any cards that are opened when navigating back to the overview page

        Events.openEventBasedOnParams(params);
      }
    }).resolve();
  };

  return {
    init: init
  };
}(); // This module describes anything related to the pdf tickets view


var Tickets = function () {
  var FRAME_SELECTOR = '.fn-pdf-frame';
  var NAV_SELECTOR = '.fn-pdf-nav';
  var NAV_BACK_SELECTOR = '.fn-nav-back';
  var frame;
  var nav;
  var navBack;

  var init = function init() {
    // before doing anything, set up the DOM variables first
    frame = document.querySelector(FRAME_SELECTOR);
    nav = document.querySelector(NAV_SELECTOR);
    navBack = document.querySelector(NAV_BACK_SELECTOR);
  }; // update the url of the iframe with the current ticket


  var setFrame = function setFrame(ticket) {
    frame.src = ticket.url;
  }; // find a ticket by it's name;


  var find = function find(event, config) {
    return event.tickets.find(function (ticket, index) {
      ticket.index = index;
      return ticket.pdf === config.pdf;
    });
  }; // called from the router, use all the above functions to update the current pdf view with the users ticket


  var open = function open(config) {
    var event = Events.find(config);
    var ticket = find(event, config);
    setFrame(ticket); // if there's no next ticket available, display a final option to finish the scanning procedure.

    if (ticket.index < event.tickets.length - 1) {
      nav.querySelector('span').textContent = "volgend ticket (".concat(ticket.index + 1, "/").concat(event.tickets.length - 1, ")");
      nav.href = "/events/".concat(event.id, "/").concat(event.tickets[ticket.index + 1].pdf);

      if (ticket.index > 0) {
        navBack.href = "/events/".concat(event.id, "/").concat(event.tickets[ticket.index - 1].pdf);
      } else {
        navBack.href = "/events/".concat(event.id);
      }

      console.log(navBack.href);
    } else {
      nav.querySelector('span').textContent = 'klaar met scannen';
      nav.href = "/events/".concat(event.id, "/finished");
      navBack.href = "/events/".concat(event.id, "/").concat(event.tickets[ticket.index - 1].pdf);
    }
  };

  return {
    init: init,
    open: open
  };
}();