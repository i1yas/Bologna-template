webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($) {
		var inputClass = 'header__search-field';
		var buttonClass = 'header__search-btn';
		var searchClass = 'header__search-container';
		var hiddenMod = '_hidden';
	
		var input = $('.' + inputClass);
		var button = $('.' + buttonClass);
		var search = $('.' + searchClass);
	
		button.on('click', function () {
			input.toggleClass(inputClass + hiddenMod);
			button.toogleClass(buttonClass + hiddenMod);
			search.toggleClass(searchClass + hiddenMod);
		});
	};

/***/ }

})
//# sourceMappingURL=0.e865dfde5aa13243c4f9.hot-update.js.map