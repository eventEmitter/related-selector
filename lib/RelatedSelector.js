!function() {

	var Class = require('ee-class');


	/*
	 * basic selector module of which all selector modules must inherit from
	 */


	module.exports = new Class({

		name: null

		/**
		 * store values passed by the user
		 */
		, init: function(options) {
			this.parameters = options.parameters;
			this.alias = options.alias;
		}


		/**
		 * stub for the render method
		 */
		, render: function() {
			throw new Error('Cannot render '+this.name+' extension, '+
						    'the render method was not implementedd!');
		}
	});
}();
