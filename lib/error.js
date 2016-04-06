/**
 * Output Restler error, used to create Promise reject
 *
 * @param {String} type Required, name of error
 * @param {String} url Required, url where error happen
 * @param {?String} msg Error message
 * @param {?Object} response Response with error data
 * @returns {Object}
 * @property {String} type Name of error
 * @property {String} url Url where error happen
 * @property {?String} msg Error message
 * @property {?Object} response Response with error data
 */
export function error(type, url, msg, response) {
  return {
    type,
    url,
    msg,
    response
  };
}
