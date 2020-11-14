/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonCardTlp from '../templates/pokemon-card.hbs';
import API from '../js/api-service.js';
import getRefs from './get-refs.js';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(e) {
    e.preventDefault();  

    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;
    
    API.fetchPokemon(searchQuery)
        .then(renderPokemonCard)
        .catch(onFetchError)
        .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
    const markup = pokemonCardTlp(pokemon);
    refs.cardContainer.innerHTML = markup;
}

function onFetchError (error) {
    alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
}

// ===================================================================

