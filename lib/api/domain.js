import { get } from '../methods/get';
import { post } from '../methods/post';
import { put } from '../methods/put';
import { remove } from '../methods/remove';

/**
 * GET /admin/domains/{domain_id}.json
 *
 * Examples:
 *
 *      insales.getDomain({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        domainid: '32'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 32,
 *        "domain": "some-domain.ru",
 *        "created_at": "2026-10-21T23:32:36.000+03:00",
 *        "updated_at": "2026-10-21T23:32:36.000+03:00",
 *        "main": true
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.domainid Required, domain id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getDomain(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `domains/${options.domainid}`
  });
}

/**
 * GET /admin/domains.json
 *
 * Examples:
 *
 *      insales.listDomain({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      [
 *        {
 *          "id": 30,
 *          "domain": "some-domain.ru",
 *          "created_at": "2026-10-21T23:32:36.000+03:00",
 *          "updated_at": "2026-10-21T23:32:36.000+03:00",
 *          "main": true
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listDomain(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `domains`
  });
}

/**
 * POST /admin/domains.json
 *
 * Examples:
 *
 *      insales.createDomain({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        domain: {
 *          "domain": {
 *            "domain": "another-domain.ru",
 *            "main": true
 *          }
 *        }
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 36,
 *        "domain": "another-domain.ru",
 *        "created_at": "2026-10-21T23:32:37.000+03:00",
 *        "updated_at": "2026-10-21T23:32:37.000+03:00",
 *        "main": true
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.domain Required, domain
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createDomain(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `domains`,
    obj: options.domain
  });
}

/**
 * DELETE /admin/domains/{domain_id}.json
 *
 * Examples:
 *
 *      insales.removeDomain({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        domainid: '40'
 *      }).then(output => {
 *        console.info(output.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      200
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.domainid Required, domain id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeDomain(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `domains/${options.domainid}`
  });
}

/**
 * PUT /admin/domains/{domain_id}.json
 *
 * Examples:
 *
 *      insales.editDomain({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        domainid: '38',
 *        domain: {
 *          "domain": {
 *            "domain": "other-domain.ru"
 *          }
 *        }
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 38,
 *        "domain": "other-domain.ru",
 *        "created_at": "2026-10-21T23:32:37.000+03:00",
 *        "updated_at": "2026-10-21T23:32:37.000+03:00",
 *        "main": true
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.domainid Required, domain id
 * @param {object} options.domain Required, domain
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editDomain(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `domains/${options.domainid}`,
    obj: options.domain
  });
}
