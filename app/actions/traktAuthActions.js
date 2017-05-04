import { createAction, createErrorAction } from './actionsHelper';
import { exchangeAuthCode } from '../services/traktApi';

export const TRAKT_AUTH_START = 'TRAKT_AUTH_START';
export const TRAKT_AUTH_SUCCESS = 'TRAKT_AUTH_SUCCESS';
export const TRAKT_AUTH_FAILURE = 'TRAKT_AUTH_FAILURE';


/**
 * Start Authentication procedure.
 *
 * @return {Function<Promise>}
 */
export function requestAccessToken(response) {
  return (dispatch) => {
    dispatch(createAction(TRAKT_AUTH_START));

    return exchangeAuthCode(response)
      .then((res) => dispatch(createAction(TRAKT_AUTH_SUCCESS, res)))
      .catch((err) => dispatch(createErrorAction(TRAKT_AUTH_FAILURE, err)));
  };
}
