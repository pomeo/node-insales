import { get } from '../methods/get';
import { post } from '../methods/post';

/**
 * GET /admin/products/{id}.xml
 *
 * Examples:
 *
 *      insales.getProduct({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1076619'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'discount-code':
 *         { 'act-once': 'false',
 *           'act-once-for-client': 'false',
 *           code: 'WWWWWW',
 *           'created-at': '2011-11-11T11:11:11+03:00',
 *           description: '',
 *           disabled: 'false',
 *           discount: '10.0',
 *           'expired-at': '2011-11-11',
 *           id: '1111111',
 *           'min-price': '0.0',
 *           'type-id': '1',
 *           'updated-at': '2011-11-11T11:11:11+03:00',
 *           worked: 'true',
 *           'discount-collections': '' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getProduct(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `products/${options.productid}`
    }).then(resolve)
      .catch(reject);
  });
}

export function createProduct(options, id) {
  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: 'products',
      obj: options.product
    }).then(resolve)
      .catch(reject);
  });
}

export function listProduct(options, id) {
  const query = {};
  query.page = options.page ? options.page : 1;
  query.per_page = options.per_page ? options.per_page : 100;
  if ((options.updated_since) && (options.updated_since !== false)) {
    query.updated_since = options.updated_since;
  }
  if (options.deleted === true) {
    query.deleted = true;
  }

  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: 'products',
      query
    }).then(resolve)
      .catch(reject);
  });
}
