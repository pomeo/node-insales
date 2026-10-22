import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/variants/{variant_id}/variant_field_values/{variant_field_value_id}.json
 *
 * Examples:
 *
 *      insales.getVariantFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        variantid: '1',
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
 *        "variant_field_id": 1,
 *        "value": "some variant field value"
 *      }
 *
 *      insales.getVariantFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        variantid: '1',
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
 *        "variant_field_id": 1,
 *        "value": "some variant field value"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.variantid Required, variant id
 * @param {number|string} options.valueid Required, variant field value id or field handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getVariantFieldValue(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `variants/${options.variantid}/variant_field_values/${options.valueid}`
  });
}

/**
 * GET /admin/variants/{variant_id}/variant_field_values.json
 *
 * Examples:
 *
 *      insales.listVariantFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        variantid: '1'
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
 *          "variant_field_id": 1,
 *          "value": "some variant field value"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.variantid Required, variant id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listVariantFieldValue(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `variants/${options.variantid}/variant_field_values`
  });
}

/**
 * POST /admin/variants/{variant_id}/variant_field_values.json
 *
 * Examples:
 *
 *      insales.createVariantFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        variantid: '1',
 *        fieldvalue: {
 *          "variant_field_value": {
 *            "variant_field_id": 2,
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
 *        "id": 95,
 *        "variant_field_id": 2,
 *        "value": "test value"
 *      }
 *
 *      insales.createVariantFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        variantid: '1',
 *        fieldvalue: {
 *          "variant_field_value": {
 *            "variant_field_handle": "handle2",
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
 *        "id": 97,
 *        "variant_field_id": 2,
 *        "value": "test value"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.variantid Required, variant id
 * @param {object} options.fieldvalue Required, variant field value id or field handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createVariantFieldValue(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `variants/${options.variantid}/variant_field_values`,
    obj: options.fieldvalue
  });
}

/**
 * DELETE /admin/variants/{variant_id}/variant_field_values/{variant_field_value_id}.json
 *
 * Examples:
 *
 *      insales.removeVariantFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        variantid: '1',
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
 *      insales.removeVariantFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        variantid: '1',
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
 * @param {number|string} options.variantid Required, variant id
 * @param {number|string} options.valueid Required, variant field value id or field handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeVariantFieldValue(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `variants/${options.variantid}/variant_field_values/${options.valueid}`
  });
}

/**
 * PUT /admin/variants/{variant_id}/variant_field_values/{variant_field_value_id}.json
 *
 * Examples:
 *
 *      insales.editVariantFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        variantid: '1',
 *        valueid: '1',
 *        fieldvalue: {
 *          "variant_field_value": {
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
 *        "variant_field_id": 1,
 *        "value": "new value"
 *      }
 *
 *      insales.editVariantFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        variantid: '1',
 *        valueid: 'handle',
 *        fieldvalue: {
 *          "variant_field_value": {
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
 *        "variant_field_id": 1,
 *        "value": "new value"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.variantid Required, variant id
 * @param {number|string} options.valueid Required, variant field value id or field handle
 * @param {object} options.fieldvalue Required, variant field value id or field handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editVariantFieldValue(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `variants/${options.variantid}/variant_field_values/${options.valueid}`,
    obj: options.fieldvalue
  });
}
