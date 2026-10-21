import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/variant_fields/{variant_field_id}.json
 *
 * Examples:
 *
 *      insales.getVariantField({
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
 *        "type": "VariantField::TextArea",
 *        "application_id": 1,
 *        "position": 2,
 *        "is_hidden": null,
 *        "title": "title2",
 *        "application_title": "Цифровые товары"
 *      }
 *
 *      insales.getVariantField({
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
 *        "type": "VariantField::TextArea",
 *        "application_id": 1,
 *        "position": 2,
 *        "is_hidden": null,
 *        "title": "title2",
 *        "application_title": "Цифровые товары"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.fieldid Required, variant field id or handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getVariantField(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `variant_fields/${options.fieldid}`
  });
}

/**
 * GET /admin/variant_fields.json
 *
 * Examples:
 *
 *      insales.listVariantField({
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
 *          "type": "VariantField::TextField",
 *          "application_id": null,
 *          "position": 1,
 *          "is_hidden": null,
 *          "title": "title",
 *          "application_title": null
 *        },
 *        {
 *          "id": 2,
 *          "handle": "handle2",
 *          "type": "VariantField::TextArea",
 *          "application_id": 1,
 *          "position": 2,
 *          "is_hidden": null,
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
export function listVariantField(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `variant_fields`
  });
}

/**
 * POST /admin/variant_fields.json
 *
 * Examples:
 *
 *      insales.createVariantField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        variantfield: {
 *          "variant_field": {
 *            "title": "Size",
 *            "handle": "size",
 *            "type": "VariantField::TextArea"
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
 *        "id": 35,
 *        "handle": "size",
 *        "type": "VariantField::TextArea",
 *        "application_id": 1,
 *        "position": 3,
 *        "is_hidden": null,
 *        "title": "Size",
 *        "application_title": "Цифровые товары"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.variantfield Required, variant field id or handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createVariantField(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `variant_fields`,
    obj: options.variantfield
  });
}

/**
 * DELETE /admin/variant_fields/{variant_field_id}.json
 *
 * Examples:
 *
 *      insales.removeVariantField({
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
 *      insales.removeVariantField({
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
 * @param {number|string} options.fieldid Required, variant field id or handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeVariantField(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `variant_fields/${options.fieldid}`
  });
}

/**
 * PUT /admin/variant_fields/{variant_field_id}.json
 *
 * Examples:
 *
 *      insales.editVariantField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: '2',
 *        variantfield: {
 *          "variant_field": {
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
 *        "type": "VariantField::TextArea",
 *        "application_id": 1,
 *        "position": 2,
 *        "is_hidden": null,
 *        "title": "Volume",
 *        "application_title": "Цифровые товары"
 *      }
 *
 *      insales.editVariantField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: 'handle2',
 *        variantfield: {
 *          "variant_field": {
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
 *        "type": "VariantField::TextArea",
 *        "application_id": 1,
 *        "position": 2,
 *        "is_hidden": null,
 *        "title": "Volume",
 *        "application_title": "Цифровые товары"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.fieldid Required, variant field id or handle
 * @param {object} options.variantfield Required, variant field id or handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editVariantField(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `variant_fields/${options.fieldid}`,
    obj: options.variantfield
  });
}
