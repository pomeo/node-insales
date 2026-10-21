import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/categories/{category_id}.json
 *
 * Examples:
 *
 *      insales.getCategory({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        categoryid: '6'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 6,
 *        "parent_id": 1,
 *        "title": "T-shirts",
 *        "position": 0,
 *        "created_at": "2026-10-20T11:11:05.000+03:00",
 *        "updated_at": "2026-10-20T11:11:05.000+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.categoryid Required, category id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getCategory(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `categories/${options.categoryid}`
  });
}

/**
 * GET /admin/categories.json
 *
 * Examples:
 *
 *      insales.listCategory({
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
 *          "id": 6,
 *          "parent_id": 1,
 *          "title": "T-shirts",
 *          "position": 0,
 *          "created_at": "2026-10-20T11:11:05.000+03:00",
 *          "updated_at": "2026-10-20T11:11:05.000+03:00"
 *        },
 *        {
 *          "id": 2,
 *          "parent_id": 1,
 *          "title": "Trousers",
 *          "position": 1,
 *          "created_at": "2026-10-20T11:11:05.000+03:00",
 *          "updated_at": "2026-10-20T11:11:05.000+03:00"
 *        },
 *        {
 *          "id": 3,
 *          "parent_id": 1,
 *          "title": "Shirts",
 *          "position": 2,
 *          "created_at": "2026-10-20T11:11:05.000+03:00",
 *          "updated_at": "2026-10-20T11:11:05.000+03:00"
 *        },
 *        {
 *          "id": 4,
 *          "parent_id": 1,
 *          "title": "Socks",
 *          "position": 3,
 *          "created_at": "2026-10-20T11:11:05.000+03:00",
 *          "updated_at": "2026-10-20T11:11:05.000+03:00"
 *        },
 *        {
 *          "id": 5,
 *          "parent_id": 1,
 *          "title": "Hats",
 *          "position": 4,
 *          "created_at": "2026-10-20T11:11:05.000+03:00",
 *          "updated_at": "2026-10-20T11:11:05.000+03:00"
 *        },
 *        {
 *          "id": 8,
 *          "parent_id": 5,
 *          "title": "Top Hat",
 *          "position": 1,
 *          "created_at": "2026-10-20T11:11:05.000+03:00",
 *          "updated_at": "2026-10-20T11:11:05.000+03:00"
 *        },
 *        {
 *          "id": 1,
 *          "parent_id": null,
 *          "title": "Склад",
 *          "position": 0,
 *          "created_at": "2026-10-20T11:11:05.000+03:00",
 *          "updated_at": "2026-10-20T11:11:05.000+03:00"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listCategory(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `categories`
  });
}

/**
 * POST /admin/categories.json
 *
 * Examples:
 *
 *      insales.createCategory({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        category: {
 *          "category": {
 *            "title": "Reebok"
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
 *        "id": 20498706,
 *        "parent_id": 1,
 *        "title": "Reebok",
 *        "position": 1,
 *        "created_at": "2026-10-21T23:12:55.000+03:00",
 *        "updated_at": "2026-10-21T23:12:55.000+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.category Required, category
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createCategory(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `categories`,
    obj: options.category
  });
}

/**
 * DELETE /admin/categories/{category_id}.json
 *
 * Examples:
 *
 *      insales.removeCategory({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        categoryid: '6'
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
 * @param {number|string} options.categoryid Required, category id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeCategory(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `categories/${options.categoryid}`
  });
}

/**
 * PUT /admin/categories/{category_id}.json
 *
 * Examples:
 *
 *      insales.editCategory({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        categoryid: '6',
 *        category: {
 *          "category": {
 *            "title": "Adidas"
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
 *        "id": 6,
 *        "parent_id": 1,
 *        "title": "Adidas",
 *        "position": 0,
 *        "created_at": "2026-10-20T11:11:05.000+03:00",
 *        "updated_at": "2026-10-21T23:12:56.000+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.categoryid Required, category id
 * @param {object} options.category Required, category
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editCategory(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `categories/${options.categoryid}`,
    obj: options.category
  });
}
