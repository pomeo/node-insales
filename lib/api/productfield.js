import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/product_fields/{product_field_id}.json
 *
 * Examples:
 *
 *      insales.getProductField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: '2'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 2,
 *        "handle": "handle2",
 *        "type": "ProductField::TextArea",
 *        "application_id": 1,
 *        "position": 2,
 *        "is_hidden": null,
 *        "is_indexed": null,
 *        "title": "title2",
 *        "application_title": "Цифровые товары"
 *      }
 *
 *      insales.getProductField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: 'handle2'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 2,
 *        "handle": "handle2",
 *        "type": "ProductField::TextArea",
 *        "application_id": 1,
 *        "position": 2,
 *        "is_hidden": null,
 *        "is_indexed": null,
 *        "title": "title2",
 *        "application_title": "Цифровые товары"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.fieldid Required, product field id or handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getProductField(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `product_fields/${options.fieldid}`
  });
}

/**
 * GET /admin/product_fields.json
 *
 * Examples:
 *
 *      insales.listProductField({
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
 *          "handle": "handle",
 *          "type": "ProductField::TextField",
 *          "application_id": null,
 *          "position": 1,
 *          "is_hidden": null,
 *          "is_indexed": null,
 *          "title": "title",
 *          "application_title": null
 *        },
 *        {
 *          "id": 4,
 *          "handle": "yml_import",
 *          "type": "ProductField::YmlImportField",
 *          "application_id": null,
 *          "position": 1,
 *          "is_hidden": null,
 *          "is_indexed": null,
 *          "title": "import field",
 *          "application_title": null
 *        },
 *        {
 *          "id": 2,
 *          "handle": "handle2",
 *          "type": "ProductField::TextArea",
 *          "application_id": 1,
 *          "position": 2,
 *          "is_hidden": null,
 *          "is_indexed": null,
 *          "title": "title2",
 *          "application_title": "Цифровые товары"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listProductField(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `product_fields`
  });
}

/**
 * POST /admin/product_fields.json
 *
 * Examples:
 *
 *      insales.createProductField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productfield: {
 *          "product_field": {
 *            "title": "Size",
 *            "handle": "size",
 *            "type": "ProductField::TextArea"
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
 *        "id": 38,
 *        "handle": "size",
 *        "type": "ProductField::TextArea",
 *        "application_id": 1,
 *        "position": 3,
 *        "is_hidden": null,
 *        "is_indexed": null,
 *        "title": "Size",
 *        "application_title": "Цифровые товары"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.productfield Required, product field id or handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createProductField(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `product_fields`,
    obj: options.productfield
  });
}

/**
 * DELETE /admin/product_fields/{product_field_id}.json
 *
 * Examples:
 *
 *      insales.removeProductField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: '2'
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
 *      insales.removeProductField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: 'handle2'
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
 * @param {number|string} options.fieldid Required, product field id or handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeProductField(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `product_fields/${options.fieldid}`
  });
}

/**
 * PUT /admin/product_fields/{product_field_id}.json
 *
 * Examples:
 *
 *      insales.editProductField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: '2',
 *        productfield: {
 *          "product_field": {
 *            "title": "Volume",
 *            "handle": "volume",
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
 *        "id": 2,
 *        "handle": "volume",
 *        "type": "ProductField::TextArea",
 *        "application_id": 1,
 *        "position": 2,
 *        "is_hidden": null,
 *        "is_indexed": null,
 *        "title": "Volume",
 *        "application_title": "Цифровые товары"
 *      }
 *
 *      insales.editProductField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: 'handle2',
 *        productfield: {
 *          "product_field": {
 *            "title": "Volume",
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
 *        "id": 2,
 *        "handle": "handle2",
 *        "type": "ProductField::TextArea",
 *        "application_id": 1,
 *        "position": 2,
 *        "is_hidden": null,
 *        "is_indexed": null,
 *        "title": "Volume",
 *        "application_title": "Цифровые товары"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.fieldid Required, product field id or handle
 * @param {object} options.productfield Required, product field id or handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editProductField(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `product_fields/${options.fieldid}`,
    obj: options.productfield
  });
}
