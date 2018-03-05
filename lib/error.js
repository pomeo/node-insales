/**
 * Output Restler error, used to create Promise reject
 *
 * @param {Object} response Required, full response data
 * @returns {Object}
 * @property {String} type Name of error
 * @property {String} url Url where error happen
 * @property {String} method Http method
 * @property {String} msg Error message
 * @property {Object} response Full response
 * @property {Number} statusCode Status code
 */
export function error(response) {
  return {
    type: response.name,
    url: response.options.uri,
    method: response.options.method,
    msg: response.error,
    response,
    statusCode: response.statusCode
  };
}
