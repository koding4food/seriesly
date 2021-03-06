const Trakt = require('nodeless-trakt');
import config from '../../config';
import httpClient from '../lib/httpClient';
import { parse } from 'query-string';

const trakt = new Trakt({
  client_id: config.TRAKT_API_KEY,
  client_secret: config.TRAKT_API_SECRET,
  redirect_uri: config.TRAKT_REDIRECT_URI,
}, true);

const traktHttpOption = {
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-version': config.TRAKT_API_VERSION,
    'trakt-api-key': config.TRAKT_API_KEY,
  },
};

const traktUrl = (url) => `${config.TRAKT_API_HOST}${url}`;
const traktRequest = (url) => httpClient.get(traktUrl(url), traktHttpOption);

export function exchangeAuthCode (response) {
  const query = parse(response.url.replace(config.TRAKT_REDIRECT_URI, ''));
  return trakt.exchange_code(query.code, trakt._authentication.state);
};

export const getAuthUrl = () => trakt.get_url();

/**
 * Get Trending Movies
 * Reference: http://docs.trakt.apiary.io/#reference/movies/trending/get-trending-movies
 *
 * @returns {Promise<Array>}
 */
export const getTrendingMovies = () => traktRequest('movies/trending');


/**
 * Get Popular Movies
 * Reference: http://docs.trakt.apiary.io/#reference/movies/popular/get-popular-movies
 *
 * @returns {Promise<Array>}
 */
export const getPopularMovies = () => traktRequest('movies/popular');


/**
 * Get Trending Shows
 * Reference: http://docs.trakt.apiary.io/#reference/shows/trending/get-trending-shows
 *
 * @returns {Promise<Array>}
 */
export const getTrendingShows = () => traktRequest('shows/trending');


/**
 * Get Popular Shows
 * Reference: http://docs.trakt.apiary.io/#reference/shows/popular/get-popular-shows
 *
 * @returns {Promise<Array>}
 */
export const getPopularShows = () => traktRequest('shows/popular');


/**
 * Get Show Details
 * Reference: http://docs.trakt.apiary.io/#reference/shows/summary/get-a-single-show
 *
 * @param {String} id - can be the Trakt.tv ID, Trakt.tv slug, or IMDB ID
 *
 * @returns {Promise<Array>}
 */
export const getShow = (id) => traktRequest(`shows/${id}?extended=full`);


/**
 * Text Query
 * Reference: http://docs.trakt.apiary.io/#reference/search/get-text-query-results
 *
 * @param {Array<String>} types - the type of data
 * @param {Array<String>} fields - the fields of data
 * @param {String} searchValue - field to be use for the search
 *
 * @returns {Promise<Array>}
 */
export const getTextQuery = (types, searchValue, fields) => {
  const TYPE_WHITELIST = ['movie', 'show', 'episode', 'person', 'list'];

  if (!types || !types.length) {
    throw new Error('Not type selected for getTextQuery');
  }

  types.forEach((type) => {
    if (!TYPE_WHITELIST.includes(type)) {
      throw new Error(`Invalid type '${type}' for getTextQuery`);
    }
  });

  const typesParameter = types.join(',');
  const fieldsParameter = (fields || []).join(',');

  return traktRequest(`search/${typesParameter}?query=${searchValue}&fields=${fieldsParameter}`);
};

