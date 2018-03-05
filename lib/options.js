/**
 * Options for Restler
 *
 * @returns {Object}
 */
export default {
  headers: {
    'Content-Type': 'application/json'
  },
  json: true,
  timeout: 30000,
  resolveWithFullResponse: true,
  scheme: 'https'
};
