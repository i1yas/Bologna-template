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
	
		var layout = {
			type: 'desktop',
			change: function change(type) {
				if (this.type === type) {
					return;
				}
				if (type === 'mobile') {
					this.type = type;
					input.removeClass(inputClass + hiddenMod);
					button.css('display', 'none');
				} else if (type === 'desktop') {
					this.type = type;
					input.addClass(inputClass + hiddenMod);
					button.css('display', 'inline-block');
				}
			}
		};
	
		if (jqWindow.width() <= 600) {
			layout.change('mobile');
		} else {
			layout.change('desktop');
		}
	
		jqWindow.on('resize', function () {});
	};
	
	module.exports = searchInput;

/***/ }

})
//# sourceMappingURL=0.6a148370c9d493c283da.hot-update.js.map