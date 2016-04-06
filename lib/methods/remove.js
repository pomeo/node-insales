import { request } from '../request';
import rest from 'restler';
import options from '../options';
const opt = Object.create(options);

/**
 * DELETE request
 *
 * @param {Object} conn
 * @param {string} conn.id Required, app id
 * @param {string} conn.token Required, token to access shop
 * @param {string} conn.url Required, shop url
 * @param {string} conn.api Required, api endpoint
 * @returns {Promise}
 */
export function remove(conn) {
  const d = rest.del(`https://${conn.id}:${conn.token}@${conn.url}/admin/${conn.api}.xml`, opt);
  return new Promise((resolve, reject) => {
    request(d)
      .then(resolve)
      .catch(reject);
  });
}
