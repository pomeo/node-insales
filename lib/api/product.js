import { get } from '../methods/get';
import { post } from '../methods/post';
import { put } from '../methods/put';
import { remove } from '../methods/remove';

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

/**
 * PUT /admin/products/{id}.xml
 *
 * Examples:
 *
 *      insales.editProduct({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '12345',
 *        product: {
 *          'product': {
 *            'title': 'Product 2',
 *          }
 *        }
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { product:
 *        { archived: 'false',
 *          available: '',
 *          'canonical-url-collection-id': '',
 *          'category-id': '1',
 *          'created-at': '2011-11-11 11:11:11 +0300',
 *          id: '12345',
 *          'is-hidden': 'false',
 *          'sort-weight': '',
 *          unit: 'pcs',
 *          'updated-at': '2011-11-11 11:11:11 +0300',
 *          title: 'Product 2',
 *          'short-description': '',
 *          permalink: 'product-1',
 *          'html-title': '',
 *          'meta-keywords': '',
 *          'meta-description': '',
 *          'currency-code': 'RUR',
 *          'collections-ids': '',
 *          images: '',
 *          'option-names': '',
 *          properties: '',
 *          characteristics: '',
 *          'product-field-values': '',
 *          variants: { variant: [Object] },
 *          description: '' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {object} options.product Required, product
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editProduct(options, id) {
  return new Promise((resolve, reject) => {
    put({
      id,
      token: options.token,
      url: options.url,
      api: `products/${options.productid}`,
      obj: options.product
    }).then(resolve)
      .catch(reject);
  });
}

/**
 * DELETE /admin/products/{id}.xml
 *
 * Examples:
 *
 *      insales.removeProduct({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '12345'
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      200
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeProduct(options, id) {
  return new Promise((resolve, reject) => {
    remove({
      id,
      token: options.token,
      url: options.url,
      api: `products/${options.productid}`
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
