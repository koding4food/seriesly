/* global fetch */

/**
 * HTTP GET
 *
 * @param {String} url - url to request
 * @param {Object} options - set the options for the fetch request
 *
 * @returns {Promise<Object|Array>}
 */
const get = (url, options) => fetch(url, options)
  .then((response) => response.json())
  .then((responseJson) => responseJson);


export default {
  get,
};
