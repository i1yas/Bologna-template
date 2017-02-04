webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _searchInput = __webpack_require__(5);
	
	var _searchInput2 = _interopRequireDefault(_searchInput);
	
	var _responseMenu = __webpack_require__(6);
	
	var _responseMenu2 = _interopRequireDefault(_responseMenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		(0, _searchInput2.default)(_jquery2.default);
		(0, _responseMenu2.default)(_jquery2.default);
	});

/***/ },

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	var responseMenu = function responseMenu($) {
		var iconClass = 'header__mobile-icon';
		var menuClass = 'header__menu-container';
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
//# sourceMappingURL=0.c7c697b43c24aed16d62.hot-update.js.map