import * as searchFilters from '../actions/searchActions';

/**
 * search criteria
 *
 * @param {Object} currentState
 * @param {String} actionType
 * @param {Object} payload
 * @param {String} [payload.filterName]
 * @param {Array} [payload.filterValue]
 * @return {Object} search criteria
 */
// eslint-disable-next-line import/prefer-default-export
export function searchCriteria(currentState = {}, { type: actionType, payload }) {
  switch (actionType) {
    case searchFilters.RESET_SEARCH_FILTERS:
      return {};
    case searchFilters.UPDATE_SEARCH_FILTER:
      return { ...currentState, [payload.filterName]: payload.filterValue };
    default:
      return currentState;
  }
}
