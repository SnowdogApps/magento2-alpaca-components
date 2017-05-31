'use strict'

const searchAutocomplete = document.querySelector('.solr-search'),
      searchBlock        = document.querySelector('.search-block'),
      searchClose        = document.querySelector('.solr-search__close'),
      searchLabel        = document.querySelector('.search__label');

searchLabel.addEventListener('click', () => searchBlock.classList.toggle('visible'));
if (searchClose) {
  searchClose.addEventListener('click', () => searchAutocomplete.classList.toggle('visible'));
}
