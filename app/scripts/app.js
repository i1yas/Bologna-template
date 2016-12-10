import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import searchInput from '../blocks/header/search-input';

$(() => {
	svg4everybody();
	searchInput($);
});
