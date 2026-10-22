import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/pages/{page_id}.json
 *
 * Examples:
 *
 *      insales.getPage({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        pageid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "meta_keywords": "meta keywords",
 *        "meta_description": "meta description",
 *        "is_hidden": false,
 *        "kind": "only_page",
 *        "permalink": "страница",
 *        "custom_template": null,
 *        "created_at": "2026-10-19T22:28:42.000+03:00",
 *        "updated_at": "2009-03-18T10:55:15.000+03:00",
 *        "is_main": true,
 *        "title": "any_url",
 *        "html_title": "html title",
 *        "content": "abc"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.pageid Required, page id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getPage(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `pages/${options.pageid}`
  });
}

/**
 * GET /admin/pages.json
 *
 * Examples:
 *
 *      insales.listPage({
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
 *          "meta_keywords": "meta keywords",
 *          "meta_description": "meta description",
 *          "is_hidden": false,
 *          "kind": "only_page",
 *          "permalink": "страница",
 *          "custom_template": null,
 *          "created_at": "2026-10-19T22:28:42.000+03:00",
 *          "updated_at": "2009-03-18T10:55:15.000+03:00",
 *          "is_main": true,
 *          "title": "any_url",
 *          "html_title": "html title",
 *          "content": "abc"
 *        },
 *        {
 *          "id": 3,
 *          "meta_keywords": "meta keywords",
 *          "meta_description": "meta description",
 *          "is_hidden": false,
 *          "kind": "only_page",
 *          "permalink": "страница2",
 *          "custom_template": null,
 *          "created_at": "2026-10-19T22:28:42.000+03:00",
 *          "updated_at": "2009-03-17T10:55:15.000+03:00",
 *          "is_main": false,
 *          "title": "bany_url",
 *          "html_title": "html title",
 *          "content": "abc"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listPage(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `pages`
  });
}

/**
 * POST /admin/pages.json
 *
 * Examples:
 *
 *      insales.createPage({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        page: {
 *          "page": {
 *            "title": "new page",
 *            "content": "<p>content of my page<p>",
 *            "permalink": "first_page",
 *            "html_title": "HTML TAG TITLE",
 *            "meta_keywords": "new cool products",
 *            "meta_description": "It's a page about our new products",
 *            "created_at": "2014-09-09"
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
 *        "id": 62,
 *        "meta_keywords": "new cool products",
 *        "meta_description": "It's a page about our new products",
 *        "is_hidden": false,
 *        "kind": "only_page",
 *        "permalink": "first_page",
 *        "custom_template": null,
 *        "created_at": "2014-09-09T00:00:00.000+04:00",
 *        "updated_at": "2026-10-21T23:05:59.000+03:00",
 *        "is_main": false,
 *        "title": "new page",
 *        "html_title": "HTML TAG TITLE",
 *        "content": "<p>content of my page<p>"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.page Required, page
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createPage(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `pages`,
    obj: options.page
  });
}

/**
 * DELETE /admin/pages/{page_id}.json
 *
 * Examples:
 *
 *      insales.removePage({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        pageid: '1'
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
 * @param {number|string} options.pageid Required, page id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removePage(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `pages/${options.pageid}`
  });
}

/**
 * PUT /admin/pages/{page_id}.json
 *
 * Examples:
 *
 *      insales.editPage({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        pageid: '1',
 *        page: {
 *          "page": {
 *            "title": "new title"
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
 * @param {number|string} options.pageid Required, page id
 * @param {object} options.page Required, page
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editPage(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `pages/${options.pageid}`,
    obj: options.page
  });
}
