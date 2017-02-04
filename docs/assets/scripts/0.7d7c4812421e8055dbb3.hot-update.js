webpackHotUpdate(0,{

/***/ 5:
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
		var jqWindow = $(window);
	
		button.on('click', function () {
			navigation.toggleClass(navClass + hiddenMod);
			search.toggleClass(searchClass + hiddenMod);
			if (jqWindow.width() <= 600) {
				input.toggleClass(inputClass + hiddenMod);
				button.toggleClass(buttonClass + hiddenMod);
			}
		});
	};
	
	module.exports = searchInput;

/***/ }

})
//# sourceMappingURL=0.7d7c4812421e8055dbb3.hot-update.js.map