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
			this.alias = options.alias;
			this.parameters = options.parameters;
		}


		/**
		 * stub for the render method
		 */
		, render: function(query, parameters) {
			return '1 as "didYouRealyForgetToImplementTheRenderMethod"';
		}



		/**
		 * is called by the entity this selector is applied to
		 */
		, prepare: function(queryBuilder) {

		}


        /*
         * identify myself as selector
         */
        , isRelatedSelector: function() {
            return true;
        }
	});
}();
