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
