import fp from 'lodash/fp';
import * as search from '../actions/searchActions';

/**
 * mediaByType
 *
 * @param {Object} currentState
 * @param {String} actionType
 * @param {Array} payload
 * @return {Object} all received media keyed by type
 */
// eslint-disable-next-line import/prefer-default-export
export function mediaByType(currentState = {}, { type: actionType, payload }) {
  switch (actionType) {
    case search.QUERY_SEARCH_START:
      return {};
    case search.QUERY_SEARCH_SUCCESS:
      return fp.groupBy('type')(payload);
    default:
      return currentState;
  }
}

/**
 * Popular list.
 *
 * @param {Object} currentState - Redux Current State.
 * @param {String} actionType   - Action type.
 * @param {Array} payload       - Response payload.
 * @returns {Object} New state, with response added.
 */
export function popular(currentState = {}, { type: actionType, payload }) {
  switch (actionType) {
    case search.POPULAR_SHOWS_START:
      return currentState;
    case search.POPULAR_SHOWS_SUCCESS:
      return {...currentState, shows: payload};
    default:
      return currentState;
  }
}
