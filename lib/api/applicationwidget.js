import { get } from '../methods/get';
import { post } from '../methods/post';
import { put } from '../methods/put';
import { remove } from '../methods/remove';

/**
 * GET /admin/application_widgets/{application_widget_id}.json
 *
 * Examples:
 *
 *      insales.getApplicationWidget({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        widgetid: '25'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "code": "html/js code",
 *        "created_at": "2026-10-21T23:32:46.605+03:00",
 *        "id": 25,
 *        "height": 50,
 *        "page_type": "product"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.widgetid Required, application widget id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getApplicationWidget(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `application_widgets/${options.widgetid}`
  });
}

/**
 * GET /admin/application_widgets.json
 *
 * Examples:
 *
 *      insales.listApplicationWidget({
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
 *          "code": "html/js code",
 *          "created_at": "2026-10-21T23:32:46.260+03:00",
 *          "id": 9,
 *          "height": 50,
 *          "page_type": "product"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listApplicationWidget(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `application_widgets`
  });
}

/**
 * POST /admin/application_widgets.json
 *
 * Examples:
 *
 *      insales.createApplicationWidget({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        applicationwidget: {
 *          "application_widget": {
 *            "code": "some html or javascript code",
 *            "height": 70,
 *            "page_type": "order"
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
 *        "code": "some html or javascript code",
 *        "created_at": "2026-10-21T23:32:46.991+03:00",
 *        "id": 57,
 *        "height": 70,
 *        "page_type": "order"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.applicationwidget Required, application widget
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createApplicationWidget(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `application_widgets`,
    obj: options.applicationwidget
  });
}

/**
 * DELETE /admin/application_widgets/{application_widget_id}.json
 *
 * Examples:
 *
 *      insales.removeApplicationWidget({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        widgetid: '89'
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
 * @param {number|string} options.widgetid Required, application widget id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeApplicationWidget(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `application_widgets/${options.widgetid}`
  });
}

/**
 * PUT /admin/application_widgets/{application_widget_id}.json
 *
 * Examples:
 *
 *      insales.editApplicationWidget({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        widgetid: '73',
 *        applicationwidget: {
 *          "application_widget": {
 *            "code": "code changed",
 *            "height": 80,
 *            "page_type": "order"
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
 *        "code": "code changed",
 *        "created_at": "2026-10-21T23:32:47.244+03:00",
 *        "id": 73,
 *        "height": 80,
 *        "page_type": "order"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.widgetid Required, application widget id
 * @param {object} options.applicationwidget Required, application widget
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editApplicationWidget(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `application_widgets/${options.widgetid}`,
    obj: options.applicationwidget
  });
}
