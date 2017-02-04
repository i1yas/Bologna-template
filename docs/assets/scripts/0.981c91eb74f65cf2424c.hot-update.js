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
			input.toggleClass(inputClass + hiddenMod);
			button.toggleClass(buttonClass + hiddenMod);
		});
	
		var toMobileLayout = function toMobileLayout() {
			input.removeClass(inputClass + hiddenMod);
			button.css('display', 'none');
		};
	
		if (jqWindow.width() <= 600) {
			toMobileLayout();
		}
	
		jqWindow.on('resize', toMobileLayout);
	};
	
	module.exports = searchInput;

/***/ }

})
//# sourceMappingURL=0.981c91eb74f65cf2424c.hot-update.js.map