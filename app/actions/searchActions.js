import { createAction, createErrorAction } from './actionsHelper';
import { getTextQuery, getPopularShows } from '../services/traktApi';

export const RESET_SEARCH_FILTERS = 'RESET_SEARCH_FILTERS';
export const UPDATE_SEARCH_FILTER = 'UPDATE_SEARCH_FILTER';
export const POPULAR_SHOWS_START = 'GET_POPULAR_SHOWS_START';
export const POPULAR_SHOWS_SUCCESS = 'GET_POPULAR_SHOWS_SUCCESS';
export const POPULAR_SHOWS_FAILURE = 'GET_POPULAR_SHOWS_FAILURE';
export const QUERY_SEARCH_START = 'QUERY_SEARCH_START';
export const QUERY_SEARCH_SUCCESS = 'QUERY_SEARCH_SUCCESS';
export const QUERY_SEARCH_FAILURE = 'QUERY_SEARCH_FAILURE';


/**
 * reset search filters
 *
 * @return {{type, payload}}
 */
export function resetFilters() {
  return createAction(RESET_SEARCH_FILTERS, {});
}


/**
 * update a search filter
 *
 * @param filterName
 * @param filterValue
 * @return {{type, payload}}
 */
export function updateSearchFilter(filterName, filterValue) {
  return createAction(UPDATE_SEARCH_FILTER, { filterName, filterValue });
}


/**
 * Submit search with current search criteria
 *
 * @return {Function<Promise>}
 */
export function submitSearch() {
  return (dispatch, getState) => {
    dispatch(createAction(QUERY_SEARCH_START));

    const { searchCriteria } = getState();
    const { types, query, fields } = searchCriteria;
    return getTextQuery(types, query, fields)
      .then((res) => dispatch(createAction(QUERY_SEARCH_SUCCESS, res)))
      .catch((err) => dispatch(createErrorAction(QUERY_SEARCH_FAILURE, err)));
  };
}

/**
 * Fetches list of popular shows.
 *
 * @returns {Function<Promise>}
 */
export function fetchPopularShows() {
  return (dispatch) => {
    dispatch(createAction(POPULAR_SHOWS_START));

    return getPopularShows()
      .then((res) => dispatch(createAction(POPULAR_SHOWS_SUCCESS, res)))
      .catch((err) => dispatch(createErrorAction(POPULAR_SHOWS_FAILURE, err)));
  };
}
