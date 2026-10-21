import { get } from '../methods/get';
import { put } from '../methods/put';

/**
 * GET /admin/collections/{collection_id}/collection_field_values/{field_id}.json
 *
 * Examples:
 *
 *      insales.getCollectionFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectionid: '1',
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
 *        "collection_field_id": 2,
 *        "value": "some collection field value"
 *      }
 *
 *      insales.getCollectionFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectionid: '1',
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
 *        "collection_field_id": 2,
 *        "value": "some collection field value"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.collectionid Required, collection id
 * @param {number|string} options.fieldid Required, collection field id or handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getCollectionFieldValue(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `collections/${options.collectionid}/collection_field_values/${options.fieldid}`
  });
}

/**
 * GET /admin/collections/{collection_id}/collection_field_values.json
 *
 * Examples:
 *
 *      insales.listCollectionFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectionid: '1'
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
 *          "collection_field_id": 1,
 *          "value": "some collection field value"
 *        },
 *        {
 *          "id": 2,
 *          "collection_field_id": 2,
 *          "value": "some collection field value"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.collectionid Required, collection id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listCollectionFieldValue(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `collections/${options.collectionid}/collection_field_values`
  });
}

/**
 * PUT /admin/collections/{collection_id}/collection_field_values/{field_id}.json
 *
 * Examples:
 *
 *      insales.editCollectionFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectionid: '1',
 *        fieldid: '2',
 *        fieldvalue: {
 *          "collection_field_value": {
 *            "value": "new test value of field"
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
 *        "status": "ok"
 *      }
 *
 *      insales.editCollectionFieldValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectionid: '1',
 *        fieldid: 'handle2',
 *        fieldvalue: {
 *          "collection_field_value": {
 *            "value": "new test value of field"
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
 *        "status": "ok"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.collectionid Required, collection id
 * @param {number|string} options.fieldid Required, collection field id or handle
 * @param {object} options.fieldvalue Required, collection field value
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editCollectionFieldValue(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `collections/${options.collectionid}/collection_field_values/${options.fieldid}`,
    obj: options.fieldvalue
  });
}
