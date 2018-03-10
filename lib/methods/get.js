import rp          from 'request-promise';
import options     from '../options';
import { request } from '../request';

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
  if (conn.query) opt.qs = conn.query;

  opt.uri = `${opt.scheme}://${conn.id}:${conn.token}@${conn.url}/admin/${conn.api}.json`;
  opt.method = 'GET';

  return request(rp(opt));
}
