/**
 * Output Restler response, used to create Promise resolve
 *
 * @param {Object} data Required
 * @param {Object} response Required
 * @returns {Object}
 * @property {Object} data
 * @property {Object} response
 */
export function output(data, response) {
  return {
    data,
    response
  };
}
