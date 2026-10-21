import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * POST /admin/js_tags.xml
 *
 * Examples:
 *
 *      insales.createJsTag({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        jstag: {
 *          'js-tag': {
 *            'type': 'JsTag::TextTag',
 *            'content': 'http://link'
 *          }
 *        }
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'file-tag':
 *        { 'account-id': '12345',
 *          'application-password-id': '12345',
 *          content: 'http://link',
 *          'created-at': '2011-11-11 11:11:11 +0300',
 *          id: '12345',
 *          name: '',
 *          'updated-at': '2011-11-11 11:11:11 +0300' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.jstag Required, jstag
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createJsTag(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: 'js_tags',
    obj: options.jstag
  });
}

/**
 * GET /admin/js_tags/{js_tag_id}.json
 *
 * Examples:
 *
 *      insales.getJsTag({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        jstagid: '25'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "content": "http://code.jquery.com/jquery-1.9.1.min.js",
 *        "id": 25,
 *        "name": "jquery1.9.1",
 *        "created_at": "2026-10-21T23:10:49.000+03:00",
 *        "updated_at": "2026-10-21T23:10:49.000+03:00",
 *        "type": "JsTag::FileTag"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.jstagid Required, js tag id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getJsTag(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `js_tags/${options.jstagid}`
  });
}

/**
 * GET /admin/js_tags.json
 *
 * Examples:
 *
 *      insales.listJsTag({
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
 *          "content": "http://code.jquery.com/jquery-1.9.1.min.js",
 *          "id": 9,
 *          "name": "jquery1.9.1",
 *          "created_at": "2026-10-21T23:10:48.000+03:00",
 *          "updated_at": "2026-10-21T23:10:48.000+03:00",
 *          "type": "JsTag::FileTag"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listJsTag(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `js_tags`
  });
}

/**
 * DELETE /admin/js_tags/{js_tag_id}.json
 *
 * Examples:
 *
 *      insales.removeJsTag({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        jstagid: '121'
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
 * @param {number|string} options.jstagid Required, js tag id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeJsTag(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `js_tags/${options.jstagid}`
  });
}

/**
 * PUT /admin/js_tags/{js_tag_id}.json
 *
 * Examples:
 *
 *      insales.editJsTag({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        jstagid: '105',
 *        jstag: {
 *          "js_tag": {
 *            "content": "http://code.jquery.com/jquery-2.2.4.min.js",
 *            "name": "jquery-2.2.4"
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
 *        "content": "http://code.jquery.com/jquery-2.2.4.min.js",
 *        "id": 105,
 *        "name": "jquery-2.2.4",
 *        "created_at": "2026-10-21T23:10:50.000+03:00",
 *        "updated_at": "2026-10-21T23:10:50.000+03:00",
 *        "type": "JsTag::FileTag"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.jstagid Required, js tag id
 * @param {object} options.jstag Required, js tag
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editJsTag(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `js_tags/${options.jstagid}`,
    obj: options.jstag
  });
}
