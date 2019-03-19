function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
}

var Router = ( function () {

	var init = function () {
		var root = null;
		var useHash = true; // Defaults to: false
		var hash = '#!'; // Defaults to: '#'
		var router = new Navigo( root, useHash, hash );

		router
			.on( {
				'events/:id': function ( params ) {


					document.querySelectorAll( '.fn-card' ).forEach( ( card ) => {

						if( card.getAttribute( 'data-id' ) === params.id ) {
							card.classList.add( 'active' );
                            console.log(getPosition(card))
                            card.style.transform = `translate3d(0, -${getPosition(card).y}px, 0)`;

						} else {
                            console.log(card.classList);
                            delete card.style.transform;
							card.classList.remove( 'active' )
						}
					} )

				},
				'events/pdf/:id': function ( params ) {
					console.log( "pdf", params )
				},
				'*': function () {
					console.log( 'home' )
				}
			} )
			.resolve();
	}

	return {
		init: init
	}
} )();
