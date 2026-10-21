import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/client_groups/{client_group_id}.json
 *
 * Examples:
 *
 *      insales.getClientGroup({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        clientgroupid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "title": "vip",
 *        "discount": "25.0",
 *        "discount_description": null,
 *        "is_default": true,
 *        "b2b": false,
 *        "created_at": "2026-07-11T22:28:41.000+03:00",
 *        "updated_at": "2026-10-19T22:28:42.495+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.clientgroupid Required, client group id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getClientGroup(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `client_groups/${options.clientgroupid}`
  });
}

/**
 * GET /admin/client_groups.json
 *
 * Examples:
 *
 *      insales.listClientGroup({
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
 *          "id": 1,
 *          "title": "vip",
 *          "discount": "25.0",
 *          "discount_description": null,
 *          "is_default": true,
 *          "b2b": false,
 *          "created_at": "2026-07-11T22:28:41.000+03:00",
 *          "updated_at": "2026-10-19T22:28:42.495+03:00"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listClientGroup(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `client_groups`
  });
}

/**
 * POST /admin/client_groups.json
 *
 * Examples:
 *
 *      insales.createClientGroup({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        clientgroup: {
 *          "client_group": {
 *            "title": "test group",
 *            "discount": 0.2,
 *            "discount_description": "test group discount",
 *            "is_default": false
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
 *        "id": 33,
 *        "title": "test group",
 *        "discount": "0.2",
 *        "discount_description": "test group discount",
 *        "is_default": false,
 *        "b2b": false,
 *        "created_at": "2026-10-21T23:29:36.851+03:00",
 *        "updated_at": "2026-10-21T23:29:36.855+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.clientgroup Required, client group
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createClientGroup(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `client_groups`,
    obj: options.clientgroup
  });
}

/**
 * DELETE /admin/client_groups/{client_group_id}.json
 *
 * Examples:
 *
 *      insales.removeClientGroup({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        clientgroupid: '1'
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
 * @param {number|string} options.clientgroupid Required, client group id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeClientGroup(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `client_groups/${options.clientgroupid}`
  });
}

/**
 * PUT /admin/client_groups/{client_group_id}.json
 *
 * Examples:
 *
 *      insales.editClientGroup({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        clientgroupid: '1',
 *        clientgroup: {
 *          "client_group": {
 *            "title": "test group",
 *            "discount": 0.2,
 *            "discount_description": "test group discount",
 *            "is_default": false
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
 *        "status": "ok"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.clientgroupid Required, client group id
 * @param {object} options.clientgroup Required, client group
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editClientGroup(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `client_groups/${options.clientgroupid}`,
    obj: options.clientgroup
  });
}
