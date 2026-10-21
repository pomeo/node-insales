import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/collections/{id}.xml
 *
 * Examples:
 *
 *      insales.getCollection({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectionid: '11111'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { collection:
 *        { 'created-at': '2011-11-11 11:11:11 +0300',
 *          id: '1234567',
 *          'is-hidden': 'true',
 *          'parent-id': '22222',
 *          position: '1',
 *          recursive: '',
 *          'updated-at': '2011-11-11 11:11:11 +0300',
 *          title: 'Name 1',
 *          description: '',
 *          'html-title': '',
 *          'meta-description': '',
 *          'meta-keywords': '',
 *          permalink: 'name1',
 *          url: '/collection/name1',
 *          'seo-description': '' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.collectionid. Required, collection id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getCollection(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `collections/${options.collectionid}`
  });
}

/**
 * GET /admin/collections.xml
 *
 * Examples:
 *
 *      insales.listCollection({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'collections':
 *         { 'collection':
 *            [{ 'created-at': '2011-11-11 11:11:11 +0300',
 *              id: '1234567',
 *              'is-hidden': 'true',
 *              'parent-id': '11111',
 *              position: '1',
 *              recursive: '',
 *              'updated-at': '2011-11-11 11:11:11 +0300',
 *              title: 'Name 1',
 *              description: '',
 *              'html-title': '',
 *              'meta-description': '',
 *              'meta-keywords': '',
 *              permalink: 'name1',
 *              url: '/collection/name1',
 *              'seo-description': '' },
 *             {'created-at': '2011-11-11 11:11:11 +0300',
 *               id: '12345678',
 *               'is-hidden': 'true',
 *               'parent-id': '11111',
 *               position: '2',
 *               recursive: '',
 *               'updated-at': '2011-11-11 11:11:11 +0300',
 *               title: 'Name 2',
 *               description: '',
 *               'html-title': '',
 *               'meta-description': '',
 *               'meta-keywords': '',
 *               permalink: 'name2',
 *               url: '/collection/name2',
 *               'seo-description': ''}]}}
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listCollection(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: 'collections'
  });
}

/**
 * POST /admin/collections.json
 *
 * Examples:
 *
 *      insales.createCollection({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collection: {
 *          "collection": {
 *            "title": "T-shirts",
 *            "parent_id": 1,
 *            "position": 1,
 *            "sort_type": 1,
 *            "description": "text",
 *            "image_attributes": {
 *              "src": "https://abc.myinsales.ru/images/no_image_compact.jpg"
 *            },
 *            "field_values_attributes": [
 *              {
 *                "handle": "handle",
 *                "value": 12345
 *              }
 *            ]
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
 *        "id": 20924923,
 *        "parent_id": 1,
 *        "is_hidden": false,
 *        "is_smart": null,
 *        "position": 1,
 *        "created_at": "2026-10-21T23:17:17.000+03:00",
 *        "updated_at": "2026-10-21T23:17:17.000+03:00",
 *        "recursive": null,
 *        "sort_type": 1,
 *        "custom_template": null,
 *        "title": "T-shirts",
 *        "html_title": null,
 *        "meta_description": null,
 *        "meta_keywords": null,
 *        "permalink": "t-shirts",
 *        "url": "/collection/t-shirts",
 *        "image": {
 *          "id": 9,
 *          "created_at": "2026-10-21T23:17:17.000+03:00",
 *          "original_url": "/images/loading.gif"
 *        },
 *        "field_values": [
 *          {
 *            "id": 538,
 *            "collection_field_id": 1,
 *            "value": "12345"
 *          }
 *        ],
 *        "description": "text",
 *        "seo_description": null
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.collection Required, collection
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createCollection(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `collections`,
    obj: options.collection
  });
}

/**
 * DELETE /admin/collections/{collection_id}.json
 *
 * Examples:
 *
 *      insales.removeCollection({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectionid: '6'
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
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeCollection(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `collections/${options.collectionid}`
  });
}

/**
 * PUT /admin/collections/{collection_id}.json
 *
 * Examples:
 *
 *      insales.editCollection({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectionid: '6',
 *        collection: {
 *          "collection": {
 *            "title": "Books",
 *            "position": 2,
 *            "sort_type": 11,
 *            "description": "Description",
 *            "is_hidden": true,
 *            "field_values_attributes": [
 *              {
 *                "handle": "handle",
 *                "value": 12345
 *              }
 *            ]
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
 *        "id": 6,
 *        "parent_id": 1,
 *        "is_hidden": true,
 *        "is_smart": null,
 *        "position": 2,
 *        "created_at": "2026-07-12T11:00:55.000+03:00",
 *        "updated_at": "2026-10-21T23:17:17.000+03:00",
 *        "recursive": null,
 *        "sort_type": 11,
 *        "custom_template": null,
 *        "title": "Books",
 *        "html_title": null,
 *        "meta_description": null,
 *        "meta_keywords": null,
 *        "permalink": "all",
 *        "url": "/collection/all",
 *        "field_values": [
 *          {
 *            "id": 554,
 *            "collection_field_id": 1,
 *            "value": "12345"
 *          }
 *        ],
 *        "description": "Description",
 *        "seo_description": null
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.collectionid Required, collection id
 * @param {object} options.collection Required, collection
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editCollection(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `collections/${options.collectionid}`,
    obj: options.collection
  });
}
