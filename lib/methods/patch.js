import rp          from 'request-promise';
import { request } from '../request';
import options from '../options';

const opt = Object.create(options);

/**
 * PATCH request
 *
 * @param {Object} conn
 * @param {string} conn.id Required, app id
 * @param {string} conn.token Required, token to access shop
 * @param {string} conn.url Required, shop url
 * @param {string} conn.api Required, api endpoint
 * @param {object} conn.obj HTTP PATCH data
 * @returns {Promise}
 */
export function patch(conn) {
  if (conn.obj !== undefined) {
    opt.body = conn.obj;
  }

  opt.uri = `${opt.scheme}://${conn.id}:${conn.token}@${conn.url}/admin/${conn.api}.json`;
  opt.method = 'PATCH';

  return request(rp(opt));
}
