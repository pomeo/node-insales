import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/external_discounts/{external_discount_id}.json
 *
 * Examples:
 *
 *      insales.getExternalDiscount({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        discountid: '25'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 25,
 *        "url": "https://myservice.com/external_discount",
 *        "order_lines_depend": null,
 *        "active": true,
 *        "created_at": "2026-10-21T23:27:55.000+03:00",
 *        "updated_at": "2026-10-21T23:27:55.000+03:00",
 *        "description": "My External Discount",
 *        "observed_fields": []
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.discountid Required, external discount id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getExternalDiscount(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `external_discounts/${options.discountid}`
  });
}

/**
 * GET /admin/external_discounts.json
 *
 * Examples:
 *
 *      insales.listExternalDiscount({
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
 *          "id": 9,
 *          "url": "https://myservice.com/external_discount",
 *          "order_lines_depend": null,
 *          "active": true,
 *          "created_at": "2026-10-21T23:27:55.000+03:00",
 *          "updated_at": "2026-10-21T23:27:55.000+03:00",
 *          "description": "My External Discount",
 *          "observed_fields": []
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listExternalDiscount(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `external_discounts`
  });
}

/**
 * POST /admin/external_discounts.json
 *
 * Examples:
 *
 *      insales.createExternalDiscount({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        discount: {
 *          "external_discount": {
 *            "description": "Birthday discount",
 *            "url": "https://myservice.com/birthday_external_discount",
 *            "order_lines_depend": false,
 *            "active": true,
 *            "observed_fields": [
 *              1,
 *              2
 *            ]
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
 *        "id": 57,
 *        "url": "https://myservice.com/birthday_external_discount",
 *        "order_lines_depend": false,
 *        "active": true,
 *        "created_at": "2026-10-21T23:27:55.000+03:00",
 *        "updated_at": "2026-10-21T23:27:55.000+03:00",
 *        "description": "Birthday discount",
 *        "observed_fields": [
 *          1,
 *          2
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.discount Required, external discount
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createExternalDiscount(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `external_discounts`,
    obj: options.discount
  });
}

/**
 * DELETE /admin/external_discounts/{external_discount_id}.json
 *
 * Examples:
 *
 *      insales.removeExternalDiscount({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        discountid: '89'
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
 * @param {number|string} options.discountid Required, external discount id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeExternalDiscount(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `external_discounts/${options.discountid}`
  });
}

/**
 * PUT /admin/external_discounts/{external_discount_id}.json
 *
 * Examples:
 *
 *      insales.editExternalDiscount({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        discountid: '73',
 *        discount: {
 *          "external_discount": {
 *            "url": "https://myservice.com/birthday_external_discount_v2"
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
 *        "id": 73,
 *        "url": "https://myservice.com/birthday_external_discount_v2",
 *        "order_lines_depend": null,
 *        "active": true,
 *        "created_at": "2026-10-21T23:27:55.000+03:00",
 *        "updated_at": "2026-10-21T23:27:55.000+03:00",
 *        "description": "My External Discount",
 *        "observed_fields": []
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.discountid Required, external discount id
 * @param {object} options.discount Required, external discount
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editExternalDiscount(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `external_discounts/${options.discountid}`,
    obj: options.discount
  });
}
