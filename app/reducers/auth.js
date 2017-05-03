import * as traktAuthActions from '../actions/traktAuthActions';

// eslint-disable-next-line import/prefer-default-export
export function auth(currentState = {}, { type: actionType, payload }) {
  switch (actionType) {
    case traktAuthActions.TRAKT_AUTH_SUCCESS:
      return {...currentState, trakt: payload };
    case traktAuthActions.TRAKT_AUTH_FAILURE:
      return currentState;
    default:
      return currentState;
  }
}
