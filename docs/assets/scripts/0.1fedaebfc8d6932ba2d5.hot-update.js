webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	var searchInput = function searchInput($) {
		var inputClass = '.search-input__field',
		    buttonClass = '.search-input__button',
		    hiddenMod = '_hidden';
		var input = $(inputClass);
		var button = $(buttonClass);
	
		input.on('click', function () {
			input.toggleClass(inputClass + hiddenMod);
			button.toggleClass(buttonClass + hiddenMod);
		});
	};
	
	module.exports = searchInput;

/***/ }

})
//# sourceMappingURL=0.1fedaebfc8d6932ba2d5.hot-update.js.map