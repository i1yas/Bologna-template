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
					var navHeight = Number(navigation.css('height').slice(0, -2));
					if (navHeight > 44) {
						navigation.css('height', navHeight - 44 + 120 + 'px');
					}
					input.removeClass(inputClass + hiddenMod);
					button.css('display', 'none');
				} else if (type === 'desktop') {
					this.type = type;
					input.addClass(inputClass + hiddenMod);
					button.css('display', 'inline-block');
				}
			}
		};
	
		var fixLayout = function fixLayout() {
			if (jqWindow.width() <= 600) {
				layout.change('mobile');
			} else {
				layout.change('desktop');
			}
		};
	
		// init
		fixLayout();
	
		jqWindow.on('resize', function () {
			fixLayout();
		});
	};
	
	module.exports = searchInput;

/***/ }

})
//# sourceMappingURL=0.aaa7b389bb558e6b6b95.hot-update.js.map