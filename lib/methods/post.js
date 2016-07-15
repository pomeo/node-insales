import { request } from '../request';
import rest from 'restler';
import xml2js  from 'xml2js';
import options from '../options';
const opt = Object.create(options);

/**
 * POST request
 *
 * @param {Object} conn
 * @param {string} conn.id Required, app id
 * @param {string} conn.token Required, token to access shop
 * @param {string} conn.url Required, shop url
 * @param {string} conn.api Required, api endpoint
 * @param {object} [conn.obj] HTTP POST data
 * @returns {Promise}
 */
export function post(conn) {
  if (conn.obj !== undefined) {
    const builder = new xml2js.Builder();
    opt.data = builder.buildObject(conn.obj);
  }

  const p = rest.post(`${opt.scheme}://${conn.id}:${conn.token}@${conn.url}/admin/${conn.api}.xml`, opt);
  return new Promise((resolve, reject) => {
    request(p)
      .then(resolve)
      .catch(reject);
  });
}
