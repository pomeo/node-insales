import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';

/**
 * GET /admin/products/{product_id}/supplementaries.json
 *
 * Examples:
 *
 *      insales.listSupplementary({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      [
 *        {
 *          "id": 3
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listSupplementary(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/supplementaries`
  });
}

/**
 * POST /admin/products/{product_id}/supplementaries.json
 *
 * Examples:
 *
 *      insales.createSupplementary({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        supplementary: {
 *          "supplementary_ids": [
 *            2,
 *            3
 *          ]
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
 * @param {number|string} options.productid Required, product id
 * @param {object} options.supplementary Required, supplementary
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createSupplementary(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/supplementaries`,
    obj: options.supplementary
  });
}

/**
 * DELETE /admin/products/{product_id}/supplementaries/{supplementary_id}.json
 *
 * Examples:
 *
 *      insales.removeSupplementary({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        supplementaryid: '1'
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
 * @param {number|string} options.productid Required, product id
 * @param {number|string} options.supplementaryid Required, supplementary id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeSupplementary(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/supplementaries/${options.supplementaryid}`
  });
}
