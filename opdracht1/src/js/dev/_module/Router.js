var Router = ( function () {

	var init = function () {
		var root = null;
		var useHash = true; // Defaults to: false
		var hash = '#!'; // Defaults to: '#'
		var router = new Navigo( root, useHash, hash );

		router
			.on( {
				'events/:id': function (params) {
					console.log("events", params)
				},
				'events/pdf/:id': function (params) {
					console.log("pdf", params)
				},
				'*': function () {
					console.log('home')
				}
			} )
			.resolve();
	}

	return {
		init: init
	}
} )();
