webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	var responseMenu = function responseMenu($) {
		var iconClass = 'header__mobile-icon';
		var menuClass = 'header__menu';
		var openedMod = '_opened';
	
		var icon = $('.' + iconClass);
		var menu = $('.' + menuClass);
	
		icon.on('click', function () {
			console.log('click');
			menu.toggleClass(menuClass + openedMod);
			icon.toggleClass(iconClass + openedMod);
		});
	};
	
	module.exports = responseMenu;

/***/ }

})
//# sourceMappingURL=0.eedba51b4b6dd1882b4b.hot-update.js.map