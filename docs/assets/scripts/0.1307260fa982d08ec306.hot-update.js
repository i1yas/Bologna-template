webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	var searchInput = function searchInput($) {
		var navClass = 'header__navigation';
		var searchClass = 'header__search';
		var inputClass = 'search-input__field';
		var buttonClass = 'search-input__button';
		var hiddenMod = '_hidden';
	
		var navigation = $('.' + navClass);
		var search = $('.' + searchClass);
		var input = $('.' + inputClass);
		var button = $('.' + buttonClass);
	
		button.on('click', function () {
			navigation.toggleClass(navClass + hiddenMod);
			search.toggleClass(searchClass + hiddenMod);
			input.toggleClass(inputClass + hiddenMod);
			button.toggleClass(buttonClass + hiddenMod);
		});
	};
	
	module.exports = searchInput;

/***/ }

})
//# sourceMappingURL=0.1307260fa982d08ec306.hot-update.js.map