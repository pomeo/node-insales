import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/collection_fields/{collection_field_id}.json
 *
 * Examples:
 *
 *      insales.getCollectionField({
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
 *        "type": "CollectionField::TextArea",
 *        "application_id": 1,
 *        "position": 2,
 *        "is_hidden": null,
 *        "title": "title2",
 *        "application_title": "Цифровые товары"
 *      }
 *
 *      insales.getCollectionField({
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
 *        "type": "CollectionField::TextArea",
 *        "application_id": 1,
 *        "position": 2,
 *        "is_hidden": null,
 *        "title": "title2",
 *        "application_title": "Цифровые товары"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.fieldid Required, collection field id or handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getCollectionField(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `collection_fields/${options.fieldid}`
  });
}

/**
 * GET /admin/collection_fields.json
 *
 * Examples:
 *
 *      insales.listCollectionField({
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
 *          "type": "CollectionField::TextField",
 *          "application_id": null,
 *          "position": 1,
 *          "is_hidden": null,
 *          "title": "title",
 *          "application_title": null
 *        },
 *        {
 *          "id": 2,
 *          "handle": "handle2",
 *          "type": "CollectionField::TextArea",
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
export function listCollectionField(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `collection_fields`
  });
}

/**
 * POST /admin/collection_fields.json
 *
 * Examples:
 *
 *      insales.createCollectionField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectionfield: {
 *          "collection_field": {
 *            "title": "Size",
 *            "handle": "size",
 *            "type": "CollectionField::TextArea"
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
 *        "id": 59,
 *        "handle": "size",
 *        "type": "CollectionField::TextArea",
 *        "application_id": 1,
 *        "position": 3,
 *        "is_hidden": null,
 *        "title": "Size",
 *        "application_title": "Цифровые товары"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.collectionfield Required, collection field
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createCollectionField(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `collection_fields`,
    obj: options.collectionfield
  });
}

/**
 * DELETE /admin/collection_fields/{collection_field_id}.json
 *
 * Examples:
 *
 *      insales.removeCollectionField({
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
 *      insales.removeCollectionField({
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
 * @param {number|string} options.fieldid Required, collection field id or handle
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeCollectionField(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `collection_fields/${options.fieldid}`
  });
}

/**
 * PUT /admin/collection_fields/{collection_field_id}.json
 *
 * Examples:
 *
 *      insales.editCollectionField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: '2',
 *        collectionfield: {
 *          "collection_field": {
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
 *        "status": "ok"
 *      }
 *
 *      insales.editCollectionField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: 'handle2',
 *        collectionfield: {
 *          "collection_field": {
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
 *        "status": "ok"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.fieldid Required, collection field id or handle
 * @param {object} options.collectionfield Required, collection field
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editCollectionField(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `collection_fields/${options.fieldid}`,
    obj: options.collectionfield
  });
}
