// This module describes anything related to the pdf tickets view

var Tickets = (function () {
    const FRAME_SELECTOR = '.fn-pdf-frame';
    const NAV_SELECTOR = '.fn-pdf-nav';
    const NAV_BACK_SELECTOR = '.fn-nav-back';

    let frame;
    let nav;
    let navBack;

    var init = function () {
        // before doing anything, set up the DOM variables first
        frame = document.querySelector(FRAME_SELECTOR);
        nav = document.querySelector(NAV_SELECTOR);
        navBack = document.querySelector(NAV_BACK_SELECTOR);
    }

    // update the url of the iframe with the current ticket
    var setFrame = function (ticket) {
        frame.src = ticket.url;
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
            nav.querySelector('span').textContent = `volgend ticket (${ticket.index + 1}/${event.tickets.length - 1})`;
            nav.href = `/events/${event.id}/${event.tickets[ticket.index + 1].pdf}`;
            if(ticket.index > 0) {
                navBack.href = `/events/${event.id}/${event.tickets[ticket.index - 1].pdf}`;
            } else {
                navBack.href = `/events/${event.id}`;
            }
            console.log(navBack.href)


        } else {
            nav.querySelector('span').textContent = 'klaar met scannen';
            nav.href = `/events/${event.id}/finished`;
            navBack.href = `/events/${event.id}/${event.tickets[ticket.index - 1].pdf}`;
        }


    }

    return {
        init: init,
        open: open
    }
})();
