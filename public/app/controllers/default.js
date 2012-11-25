define([
	'application',
	'text!../database_1.json',
	'../collections/index',
	'../views/itemsView',
	'../models/index',
	'../views/itemView'
], function ( App, Database, MyCollection, MyCollectionView, MyModel, MyItemView ) {
	"use strict";

	var DefaultController = {

		angrycat: function(param) {

			var AngryCat = Backbone.Model.extend({ });

			var AngryCats = Backbone.Collection.extend({
				model: AngryCat
			});

			var AngryCatView = Backbone.Marionette.ItemView.extend({
				template: "#angry_cat-template",
				tagName: 'tr'
			});

			var AngryCatsView = Backbone.Marionette.CompositeView.extend({
				tagName: "table",
				template: "#angry_cats-template",
				itemView: AngryCatView,

				appendHtml: function(collectionView, itemView){
					collectionView.$("tbody").append(itemView.el);
				}
			});

			var cats = new AngryCats([
				new AngryCat({ name: 'Wet Cat', age: 30 }),
				new AngryCat({ name: 'Bitey Cat', age: 12  }),
				new AngryCat({ name: 'Surprised Cat', age: 24  })
			]);

			var angryCatsView = new AngryCatsView({
				collection: cats
			});

			App.mainRegion.show(angryCatsView);
		},

		default: function(param) {

			var myCollection = new MyCollection([
				new MyModel({
					"id": "Derick_Bailery",
					"firstName": "Derick",
					"lastName": "Bailey",
					"email": "derickbailey@gmail.com",
					"details": "He is the creator of Marionette framework."
				}),
				new MyModel({
					"id": "Matt_Ma",
					"firstName": "Matt",
					"lastName": "Ma",
					"email": "mma@adchemy.com",
					"details": "He is a front end developer."
				})
			]);

			var myCollectionView = new MyCollectionView({ collection: myCollection });

			App.mainRegion.show( myCollectionView  );

			// var myModel = new MyModel();
			// var myItemView = new MyItemView({ model: myModel });

			// App.mainRegion.show( myItemView );
		},

		details: function(param) {
			console.log( param + " testing ");
		}
	};

	return DefaultController;
});
