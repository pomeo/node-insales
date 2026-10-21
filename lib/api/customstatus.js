import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/custom_statuses/{custom_status_permalink}.json
 *
 * Examples:
 *
 *      insales.getCustomStatus({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        permalink: 'novyy'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 41,
 *        "system_status": "new",
 *        "permalink": "novyy",
 *        "position": 1,
 *        "is_default": true,
 *        "created_at": "2026-10-21T23:27:53.516+03:00",
 *        "updated_at": "2026-10-21T23:27:53.516+03:00",
 *        "title": "Новый",
 *        "color": "#DC5F59"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.permalink Required, custom status permalink
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getCustomStatus(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `custom_statuses/${options.permalink}`
  });
}

/**
 * GET /admin/custom_statuses.json
 *
 * Examples:
 *
 *      insales.listCustomStatus({
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
 *          "id": null,
 *          "system_status": "new",
 *          "permalink": "new",
 *          "position": null,
 *          "is_default": true,
 *          "created_at": null,
 *          "updated_at": null,
 *          "title": "Новый",
 *          "color": "#DC5F59"
 *        },
 *        {
 *          "id": null,
 *          "system_status": "accepted",
 *          "permalink": "accepted",
 *          "position": null,
 *          "is_default": true,
 *          "created_at": null,
 *          "updated_at": null,
 *          "title": "В обработке",
 *          "color": "#85C5E0"
 *        },
 *        {
 *          "id": null,
 *          "system_status": "approved",
 *          "permalink": "approved",
 *          "position": null,
 *          "is_default": true,
 *          "created_at": null,
 *          "updated_at": null,
 *          "title": "Согласован",
 *          "color": "#86AA60"
 *        },
 *        {
 *          "id": null,
 *          "system_status": "dispatched",
 *          "permalink": "dispatched",
 *          "position": null,
 *          "is_default": true,
 *          "created_at": null,
 *          "updated_at": null,
 *          "title": "Отгружен",
 *          "color": "#3A9FC9"
 *        },
 *        {
 *          "id": null,
 *          "system_status": "delivered",
 *          "permalink": "delivered",
 *          "position": null,
 *          "is_default": true,
 *          "created_at": null,
 *          "updated_at": null,
 *          "title": "Доставлен",
 *          "color": "#249641"
 *        },
 *        {
 *          "id": null,
 *          "system_status": "returning",
 *          "permalink": "returning",
 *          "position": null,
 *          "is_default": true,
 *          "created_at": null,
 *          "updated_at": null,
 *          "title": "В процессе возврата",
 *          "color": "#686A69"
 *        },
 *        {
 *          "id": null,
 *          "system_status": "declined",
 *          "permalink": "declined",
 *          "position": null,
 *          "is_default": true,
 *          "created_at": null,
 *          "updated_at": null,
 *          "title": "Отменен",
 *          "color": "#929594"
 *        },
 *        {
 *          "id": null,
 *          "system_status": "returned",
 *          "permalink": "returned",
 *          "position": null,
 *          "is_default": true,
 *          "created_at": null,
 *          "updated_at": null,
 *          "title": "Возврат",
 *          "color": "#A69196"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listCustomStatus(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `custom_statuses`
  });
}

/**
 * POST /admin/custom_statuses.json
 *
 * Examples:
 *
 *      insales.createCustomStatus({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        customstatus: {
 *          "custom_status": {
 *            "system_status": "new",
 *            "title": "New (ordered by phone)"
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
 *        "id": 73,
 *        "system_status": "new",
 *        "permalink": "new-ordered-by-phone",
 *        "position": 2,
 *        "is_default": false,
 *        "created_at": "2026-10-21T23:27:54.052+03:00",
 *        "updated_at": "2026-10-21T23:27:54.052+03:00",
 *        "title": "New (ordered by phone)",
 *        "color": "#DC5F59"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.customstatus Required, custom status
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createCustomStatus(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `custom_statuses`,
    obj: options.customstatus
  });
}

/**
 * DELETE /admin/custom_statuses/{custom_status_permalink}.json
 *
 * Examples:
 *
 *      insales.removeCustomStatus({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        permalink: 'novyy'
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
 * @param {number|string} options.permalink Required, custom status permalink
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeCustomStatus(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `custom_statuses/${options.permalink}`
  });
}

/**
 * PUT /admin/custom_statuses/{custom_status_permalink}.json
 *
 * Examples:
 *
 *      insales.editCustomStatus({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        permalink: 'novyy',
 *        customstatus: {
 *          "custom_status": {
 *            "title": "New (ordered by website)"
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
 * @param {number|string} options.permalink Required, custom status permalink
 * @param {object} options.customstatus Required, custom status
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editCustomStatus(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `custom_statuses/${options.permalink}`,
    obj: options.customstatus
  });
}
