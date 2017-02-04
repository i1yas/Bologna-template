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
			search.toggleClass(searchClass + hiddenMod);
		});
	};

/***/ }

})
//# sourceMappingURL=0.5b5ab6dbb32d52ccfe5d.hot-update.js.map