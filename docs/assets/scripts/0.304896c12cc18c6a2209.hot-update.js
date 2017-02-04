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
			menu.toggleClass(menuClass + openedMod);
			icon.toggleClass(iconClass + openedMod);
		});
	};
	
	module.exports = responseMenu;

/***/ }

})
//# sourceMappingURL=0.304896c12cc18c6a2209.hot-update.js.map