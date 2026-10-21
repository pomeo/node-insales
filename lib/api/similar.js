import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';

/**
 * GET /admin/products/{product_id}/similars.json
 *
 * Examples:
 *
 *      insales.listSimilar({
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
export function listSimilar(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/similars`
  });
}

/**
 * POST /admin/products/{product_id}/similars.json
 *
 * Examples:
 *
 *      insales.createSimilar({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        similar: {
 *          "similar_ids": [
 *            2
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
 * @param {object} options.similar Required, similar
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createSimilar(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/similars`,
    obj: options.similar
  });
}

/**
 * DELETE /admin/products/{product_id}/similars/{similar_id}.json
 *
 * Examples:
 *
 *      insales.removeSimilar({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        similarid: '1'
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
 * @param {number|string} options.similarid Required, similar id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeSimilar(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/similars/${options.similarid}`
  });
}
