webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	var searchInput = function searchInput($) {
		var inputClass = 'search-input__field';
		var buttonClass = 'search-input__button';
		var hiddenMod = '_hidden';
	
		var input = $('.' + inputClass);
		var button = $('.' + buttonClass);
	
		$(input).on('click', function () {
			console.log('click');
			$(input).toggleClass(inputClass + hiddenMod);
			$(button).toggleClass(buttonClass + hiddenMod);
		});
	};
	
	module.exports = searchInput;

/***/ }

})
//# sourceMappingURL=0.1126128d0b39f4213a73.hot-update.js.map