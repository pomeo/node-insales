import { get } from '../methods/get';
import { post } from '../methods/post';
import { put } from '../methods/put';
import { remove } from '../methods/remove';

/**
 * GET /admin/application_actions/{application_action_id}.json
 *
 * Examples:
 *
 *      insales.getApplicationAction({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        actionid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "title": "test",
 *        "url": "http://www.google.ru",
 *        "handle": "test",
 *        "entity": "order"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.actionid Required, application action id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getApplicationAction(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `application_actions/${options.actionid}`
  });
}

/**
 * GET /admin/application_actions.json
 *
 * Examples:
 *
 *      insales.listApplicationAction({
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
 *          "title": "test",
 *          "url": "http://www.google.ru",
 *          "handle": "test",
 *          "entity": "order"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listApplicationAction(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `application_actions`
  });
}

/**
 * POST /admin/application_actions.json
 *
 * Examples:
 *
 *      insales.createApplicationAction({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        applicationaction: {
 *          "application_action": {
 *            "title": "backoffice title",
 *            "handle": "unique_handle",
 *            "entity": "product",
 *            "url": "http://www.yandex.ru"
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
 *        "id": 17,
 *        "title": "backoffice title",
 *        "url": "http://www.yandex.ru",
 *        "handle": "unique_handle",
 *        "entity": "product"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.applicationaction Required, application action
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createApplicationAction(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `application_actions`,
    obj: options.applicationaction
  });
}

/**
 * DELETE /admin/application_actions/{application_action_id}.json
 *
 * Examples:
 *
 *      insales.removeApplicationAction({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        actionid: '1'
 *      }).then(output => {
 *        console.info(output.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      200
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.actionid Required, application action id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeApplicationAction(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `application_actions/${options.actionid}`
  });
}

/**
 * PUT /admin/application_actions/{application_action_id}.json
 *
 * Examples:
 *
 *      insales.editApplicationAction({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        actionid: '1',
 *        applicationaction: {
 *          "application_action": {
 *            "title": "new  title",
 *            "handle": "new_unique_handle",
 *            "entity": "client",
 *            "url": "http://www.yandex.ru"
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
 *        "title": "new  title",
 *        "url": "http://www.yandex.ru",
 *        "handle": "new_unique_handle",
 *        "entity": "client"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.actionid Required, application action id
 * @param {object} options.applicationaction Required, application action
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editApplicationAction(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `application_actions/${options.actionid}`,
    obj: options.applicationaction
  });
}
