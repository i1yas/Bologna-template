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
		debugger;
		icon.on('click', function () {
			console.log('click');
			menu.toggleClass(menuClass + openedMod);
			icon.toggleClass(iconClass + openedMod);
		});
	};
	
	module.exports = responseMenu;

/***/ }

})
//# sourceMappingURL=0.b65853b832e9e0e05556.hot-update.js.map