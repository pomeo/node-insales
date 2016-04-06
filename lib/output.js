/**
 * Output Restler response, used to create Promise resolve
 *
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
