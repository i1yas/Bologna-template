module.exports = $ => {
	const inputClass = 'header__search-field';
	const buttonClass = 'header__search-btn';
	const searchClass = 'header__search-container';
	const hiddenMod = '_hidden';

	const input = $('.' + inputClass);
	const button = $('.' + buttonClass);
	const search = $('.' + searchClass);

	button.on('click', function (){
		input.toggleClass(inputClass + hiddenMod);
		button.toggleClass(buttonClass + hiddenMod);
		search.toggleClass(searchClass + hiddenMod);
	});

};
