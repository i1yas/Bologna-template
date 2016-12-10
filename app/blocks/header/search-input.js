const searchInput = $ => {
	const navClass = 'header__navigation';
	const searchClass = 'header__search';
	const inputClass = 'search-input__field';
	const buttonClass = 'search-input__button';
	const hiddenMod = '_hidden';

	const navigation = $('.' + navClass);
	const search = $('.' + searchClass);
	const input = $('.' + inputClass);
	const button = $('.' + buttonClass);

	button.on('click', function (){
		navigation.toggleClass(navClass + hiddenMod);
		search.toggleClass(searchClass + hiddenMod);
		input.toggleClass(inputClass + hiddenMod);
		button.toggleClass(buttonClass + hiddenMod);
	});
};

module.exports = searchInput;
