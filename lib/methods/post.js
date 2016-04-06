import { request } from '../request';
import rest from 'restler';
import { Js2Xml } from 'js2xml';
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
    const js2xml = new Js2Xml(Object.keys(conn.obj)[0], conn.obj[Object.keys(conn.obj)[0]]);
    opt.data = js2xml.toString();
  }

  const p = rest.post(`https://${conn.id}:${conn.token}@${conn.url}/admin/${conn.api}.xml`, opt);
  return new Promise((resolve, reject) => {
    request(p)
      .then(resolve)
      .catch(reject);
  });
}
