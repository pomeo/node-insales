/**
 * Output Request-Promise response, used to create Promise resolve
 *
 * @param {Object} response Required
 * @returns {Object}
 * @property {Object} data Response body
 * @property {Object} response Full response
 * @property {Number} statusCode Status code
 * @property {Object} callLimits API call limit
 * @property {number} callLimits.current
 * @property {number} callLimits.remaining
 * @property {Number} callLimits.max
 */
export function output(response) {
  return {
    data: response.body,
    response,
    statusCode: response.statusCode,
    callLimits: {
      remaining: response.headers['api-usage-limit'].split('/')[1]-response.headers['api-usage-limit'].split('/')[0],
      current: +response.headers['api-usage-limit'].split('/')[0],
      max: +response.headers['api-usage-limit'].split('/')[1]
    }
  };
}
