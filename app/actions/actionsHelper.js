/**
 * create action
 *
 * @param type
 * @param payload
 * @return {{type: string, payload: object}}
 */
export function createAction(type, payload = null) {
  return { type, payload };
}


/**
 * create error action
 *
 * @param type
 * @param error
 * @return {{type: string, error: boolean, payload: error}}
 */
export function createErrorAction(type, error) {
  return { type, error: true, payload: error };
}
