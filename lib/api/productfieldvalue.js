import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/products/{product_id}/product_field_values/{product_field_value_id}.json
 *
 * Examples:
 *
 *      insales.getProductFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        valueid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "product_field_id": 1,
 *        "value": "some product field value"
 *      }
 *
 *      insales.getProductFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        valueid: 'handle'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "product_field_id": 1,
 *        "value": "some product field value"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {number|string} options.valueid Required, product field value id or field handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getProductFieldValue(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/product_field_values/${options.valueid}`
  });
}

/**
 * GET /admin/products/{product_id}/product_field_values.json
 *
 * Examples:
 *
 *      insales.listProductFieldValue({
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
 *          "id": 1,
 *          "product_field_id": 1,
 *          "value": "some product field value"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listProductFieldValue(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/product_field_values`
  });
}

/**
 * POST /admin/products/{product_id}/product_field_values.json
 *
 * Examples:
 *
 *      insales.createProductFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        fieldvalue: {
 *          "product_field_value": {
 *            "product_field_id": 2,
 *            "value": "test value"
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
 *        "id": 121,
 *        "product_field_id": 2,
 *        "value": "test value"
 *      }
 *
 *      insales.createProductFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        fieldvalue: {
 *          "product_field_value": {
 *            "product_field_handle": "handle2",
 *            "value": "test value"
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
 *        "id": 123,
 *        "product_field_id": 2,
 *        "value": "test value"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {object} options.fieldvalue Required, product field value id or field handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createProductFieldValue(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/product_field_values`,
    obj: options.fieldvalue
  });
}

/**
 * DELETE /admin/products/{product_id}/product_field_values/{product_field_value_id}.json
 *
 * Examples:
 *
 *      insales.removeProductFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        valueid: '1'
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
 *
 *      insales.removeProductFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        valueid: 'handle'
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
 * @param {number|string} options.valueid Required, product field value id or field handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeProductFieldValue(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/product_field_values/${options.valueid}`
  });
}

/**
 * PUT /admin/products/{product_id}/product_field_values/{product_field_value_id}.json
 *
 * Examples:
 *
 *      insales.editProductFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        valueid: '1',
 *        fieldvalue: {
 *          "product_field_value": {
 *            "value": "new value"
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
 *        "product_field_id": 1,
 *        "value": "new value"
 *      }
 *
 *      insales.editProductFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        valueid: 'handle',
 *        fieldvalue: {
 *          "product_field_value": {
 *            "value": "new value"
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
 *        "product_field_id": 1,
 *        "value": "new value"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {number|string} options.valueid Required, product field value id or field handle
 * @param {object} options.fieldvalue Required, product field value id or field handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editProductFieldValue(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/product_field_values/${options.valueid}`,
    obj: options.fieldvalue
  });
}
