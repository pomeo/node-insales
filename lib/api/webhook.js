import { get } from '../methods/get';
import { post } from '../methods/post';
import { put } from '../methods/put';
import { remove } from '../methods/remove';

/**
 * GET /admin/webhooks/{webhook_id}.json
 *
 * Examples:
 *
 *      insales.getWebhook({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        webhookid: '10'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "address": "http://app.ru/orders/create",
 *        "created_at": "2026-10-21T23:32:48.529+03:00",
 *        "id": 10,
 *        "topic": "orders/create",
 *        "format_type": "xml",
 *        "warehouse_id": null,
 *        "sales_channel_id": null,
 *        "batch_size": null
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.webhookid Required, webhook id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getWebhook(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `webhooks/${options.webhookid}`
  });
}

/**
 * GET /admin/webhooks.json
 *
 * Examples:
 *
 *      insales.listWebhook({
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
 *          "address": "https://webhook.site/4f4dd3e6-46d8-403f-8a3e-4fb0b1f108a0",
 *          "created_at": "2022-05-05T20:37:45.000+03:00",
 *          "id": 1,
 *          "topic": "products/update",
 *          "format_type": "json",
 *          "warehouse_id": null,
 *          "sales_channel_id": null,
 *          "batch_size": 5
 *        },
 *        {
 *          "address": "https://webhook.site/4f4dd3e6-46d8-403f-8a3e-4fb0b1f108a0",
 *          "created_at": "2022-05-05T20:37:45.000+03:00",
 *          "id": 3,
 *          "topic": "products/create",
 *          "format_type": "json",
 *          "warehouse_id": null,
 *          "sales_channel_id": null,
 *          "batch_size": 5
 *        },
 *        {
 *          "address": "https://webhook.site/4f4dd3e6-46d8-403f-8a3e-4fb0b1f108a0",
 *          "created_at": "2022-05-05T20:37:45.000+03:00",
 *          "id": 4,
 *          "topic": "client/update",
 *          "format_type": "json",
 *          "warehouse_id": null,
 *          "sales_channel_id": null,
 *          "batch_size": null
 *        },
 *        {
 *          "address": "https://webhook.site/4f4dd3e6-46d8-403f-8a3e-4fb0b1f108a0",
 *          "created_at": "2022-05-05T20:37:45.000+03:00",
 *          "id": 5,
 *          "topic": "client/create",
 *          "format_type": "json",
 *          "warehouse_id": null,
 *          "sales_channel_id": null,
 *          "batch_size": null
 *        },
 *        {
 *          "address": "http://app.ru/orders/create",
 *          "created_at": "2026-10-21T23:32:48.117+03:00",
 *          "id": 8,
 *          "topic": "orders/create",
 *          "format_type": "xml",
 *          "warehouse_id": null,
 *          "sales_channel_id": null,
 *          "batch_size": null
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listWebhook(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `webhooks`
  });
}

/**
 * POST /admin/webhooks.json
 *
 * Examples:
 *
 *      insales.createWebhook({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        webhook: {
 *          "webhook": {
 *            "address": "http://application.com/orders/create",
 *            "topic": "orders/create",
 *            "format_type": "json"
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
 *        "address": "http://application.com/orders/create",
 *        "created_at": "2026-10-21T23:32:48.911+03:00",
 *        "id": 14,
 *        "topic": "orders/create",
 *        "format_type": "json",
 *        "warehouse_id": null,
 *        "sales_channel_id": null,
 *        "batch_size": null
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.webhook Required, webhook
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createWebhook(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `webhooks`,
    obj: options.webhook
  });
}

/**
 * DELETE /admin/webhooks/{webhook_id}.json
 *
 * Examples:
 *
 *      insales.removeWebhook({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        webhookid: '18'
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
 * @param {number|string} options.webhookid Required, webhook id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeWebhook(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `webhooks/${options.webhookid}`
  });
}

/**
 * PUT /admin/webhooks/{webhook_id}.json
 *
 * Examples:
 *
 *      insales.editWebhook({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        webhookid: '16',
 *        webhook: {
 *          "webhook": {
 *            "format_type": "xml"
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
 *        "address": "http://app.ru/orders/create",
 *        "created_at": "2026-10-21T23:32:49.126+03:00",
 *        "id": 16,
 *        "topic": "orders/create",
 *        "format_type": "xml",
 *        "warehouse_id": null,
 *        "sales_channel_id": null,
 *        "batch_size": null
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.webhookid Required, webhook id
 * @param {object} options.webhook Required, webhook
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editWebhook(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `webhooks/${options.webhookid}`,
    obj: options.webhook
  });
}
