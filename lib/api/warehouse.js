import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/warehouses/{warehouse_id}.json
 *
 * Examples:
 *
 *      insales.getWarehouse({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        warehouseid: '39'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 39,
 *        "title": "main",
 *        "position": 2,
 *        "array_index": 1,
 *        "created_at": "2026-10-21T23:23:02.607+03:00",
 *        "updated_at": "2026-10-21T23:23:02.607+03:00",
 *        "status": "creating"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.warehouseid Required, warehouse id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getWarehouse(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `warehouses/${options.warehouseid}`
  });
}

/**
 * GET /admin/warehouses.json
 *
 * Examples:
 *
 *      insales.listWarehouse({
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
 *          "title": "Главный склад",
 *          "position": 1,
 *          "array_index": 0,
 *          "created_at": "2008-12-31T03:00:00.000+03:00",
 *          "updated_at": "2008-12-31T03:00:00.000+03:00",
 *          "status": "ready"
 *        },
 *        {
 *          "id": 37,
 *          "title": "main",
 *          "position": 2,
 *          "array_index": 1,
 *          "created_at": "2026-10-21T23:23:01.425+03:00",
 *          "updated_at": "2026-10-21T23:23:01.425+03:00",
 *          "status": "creating"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listWarehouse(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `warehouses`
  });
}

/**
 * POST /admin/warehouses.json
 *
 * Examples:
 *
 *      insales.createWarehouse({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        warehouse: {
 *          "warehouse": {
 *            "title": "secondary",
 *            "position": 2
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
 *        "id": 43,
 *        "title": "secondary",
 *        "position": 2,
 *        "array_index": 2,
 *        "created_at": "2026-10-21T23:23:03.226+03:00",
 *        "updated_at": "2026-10-21T23:23:03.226+03:00",
 *        "status": "creating"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.warehouse Required, warehouse
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createWarehouse(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `warehouses`,
    obj: options.warehouse
  });
}

/**
 * DELETE /admin/warehouses/{warehouse_id}.json
 *
 * Examples:
 *
 *      insales.removeWarehouse({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        warehouseid: '47'
 *      }).then(output => {
 *        console.info(output.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      202
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.warehouseid Required, warehouse id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeWarehouse(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `warehouses/${options.warehouseid}`
  });
}

/**
 * PUT /admin/warehouses/{warehouse_id}.json
 *
 * Examples:
 *
 *      insales.editWarehouse({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        warehouseid: '45',
 *        warehouse: {
 *          "warehouse": {
 *            "title": "new title",
 *            "position": 2
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
 *        "id": 45,
 *        "title": "new title",
 *        "position": 2,
 *        "array_index": 1,
 *        "created_at": "2026-10-21T23:23:03.523+03:00",
 *        "updated_at": "2026-10-21T23:23:03.657+03:00",
 *        "status": "creating"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.warehouseid Required, warehouse id
 * @param {object} options.warehouse Required, warehouse
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editWarehouse(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `warehouses/${options.warehouseid}`,
    obj: options.warehouse
  });
}
