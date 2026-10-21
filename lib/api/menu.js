import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/menus/{menu_id}.json
 *
 * Examples:
 *
 *      insales.getMenu({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        menuid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "name": "Main menu",
 *        "handle": "main",
 *        "used_in_theme": false
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.menuid Required, menu id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getMenu(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `menus/${options.menuid}`
  });
}

/**
 * GET /admin/menus.json
 *
 * Examples:
 *
 *      insales.listMenu({
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
 *          "name": "Main menu",
 *          "handle": "main",
 *          "used_in_theme": false
 *        },
 *        {
 *          "id": 2,
 *          "name": "Secondary menu",
 *          "handle": "second",
 *          "used_in_theme": false
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listMenu(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `menus`
  });
}

/**
 * POST /admin/menus.json
 *
 * Examples:
 *
 *      insales.createMenu({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        menu: {
 *          "menu": {
 *            "name": "top menu",
 *            "handle": "top-menu"
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
 *        "id": 250,
 *        "name": "top menu",
 *        "handle": "top-menu",
 *        "used_in_theme": false
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.menu Required, menu
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createMenu(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `menus`,
    obj: options.menu
  });
}

/**
 * DELETE /admin/menus/{menu_id}.json
 *
 * Examples:
 *
 *      insales.removeMenu({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        menuid: '1'
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
 * @param {number|string} options.menuid Required, menu id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeMenu(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `menus/${options.menuid}`
  });
}

/**
 * PUT /admin/menus/{menu_id}.json
 *
 * Examples:
 *
 *      insales.editMenu({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        menuid: '1',
 *        menu: {
 *          "menu": {
 *            "name": "Bottom menu"
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
 *        "id": 1,
 *        "name": "Bottom menu",
 *        "handle": "main",
 *        "used_in_theme": false
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.menuid Required, menu id
 * @param {object} options.menu Required, menu
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editMenu(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `menus/${options.menuid}`,
    obj: options.menu
  });
}
