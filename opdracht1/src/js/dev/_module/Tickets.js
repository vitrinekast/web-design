// This module describes anything related to the pdf tickets view

var Tickets = (function () {
    const FRAME_SELECTOR = '.fn-pdf-frame';
    const NAV_SELECTOR = '.fn-pdf-nav';

    let frame;
    let nav;


    var init = function () {
        // before doing anything, set up the DOM variables first
        frame = document.querySelector(FRAME_SELECTOR);
        nav = document.querySelector(NAV_SELECTOR);
    }

    // update the url of the iframe with the current ticket
    var setFrame = function (ticket) {
        frame.src = ticket.url;
    }

    // update the frame navigation based on if another ticket is available in the flow
    var setNavigation = function (event, ticket, text) {
        nav.querySelector('span').textContent = text;
        nav.href = `/events/${event.id}/${ticket ? ticket.pdf : ''}`

    }

    // find a ticket by it's name;
    var find = function (event, config) {
        return event.tickets.find(function (ticket, index) {
            ticket.index = index;
            return ticket.pdf === config.pdf
        })
    }

    // called from the router, use all the above functions to update the current pdf view with the users ticket
    var open = function (config) {
        const event = Events.find(config);
        const ticket = find(event, config);

        setFrame(ticket)

        // if there's no next ticket available, display a final option to finish the scanning procedure.
        if(ticket.index < event.tickets.length - 1) {
            setNavigation(event, event.tickets[ticket.index + 1], 'volgend ticket');
        } else {
            setNavigation(event, false, 'klaar met scannen');
        }


    }

    return {
        init: init,
        open: open
    }
})();
