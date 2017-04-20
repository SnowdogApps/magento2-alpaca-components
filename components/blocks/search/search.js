'use strict'

const searchLabel = document.querySelector('.search__label'),
      searchBlock = document.querySelector('.search-block'),
      searchAutocomplete = document.querySelector('.solr-search'),
      searchClose = document.querySelector('.solr-search__close');

searchLabel.addEventListener('click', () => searchBlock.classList.toggle('visible'));
if (searchClose) {
    searchClose.addEventListener('click', () => searchAutocomplete.classList.toggle('visible'));
}
