define([
	'backbone',
	'marionette',
	'../controllers/default'
], function(Backbone, Marionette, DefaultController) {
	'use strict';

	var Router = Backbone.Marionette.AppRouter.extend({
		appRoutes:{
			'*action': 'default'
		},
		controller: DefaultController
		// routes: {
		// 	'': 'init'
		// }
	});

	return Router;
});
