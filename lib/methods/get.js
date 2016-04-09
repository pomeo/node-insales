import { request } from '../request';
import rest from 'restler';
import options from '../options';
const opt = Object.create(options);

/**
 * GET request
 *
 * @param {Object} conn
 * @param {string} conn.id Required, app id
 * @param {string} conn.token Required, token to access shop
 * @param {string} conn.url Required, shop url
 * @param {string} conn.api Required, api endpoint
 * @param {object} [conn.query] URL query string
 * @returns {Promise}
 */
export function get(conn) {
  if (conn.query) opt.query = conn.query;

  const g = rest.get(`https://${conn.id}:${conn.token}@${conn.url}/admin/${conn.api}.xml`, opt);
  return new Promise((resolve, reject) => {
    request(g)
      .then(resolve)
      .catch(reject);
  });
}
