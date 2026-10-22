import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';

/**
 * GET /admin/sales_channels/{sales_channel_id}.json
 *
 * Examples:
 *
 *      insales.getSalesChannel({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        saleschannelid: '3'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 3,
 *        "title": "test title",
 *        "state": null,
 *        "messages": [],
 *        "account_id": 1,
 *        "goods_setting_type": null,
 *        "goods_setting_id": null,
 *        "created_at": "2009-03-18T10:53:14.000+03:00",
 *        "updated_at": "2009-03-18T10:53:14.000+03:00",
 *        "application_id": 1,
 *        "last_rating_import_started_at": null,
 *        "last_feedbacks_import_started_at": null,
 *        "additional_fields": {},
 *        "auto_export_products": "disabled"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.saleschannelid Required, sales channel id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getSalesChannel(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `sales_channels/${options.saleschannelid}`
  });
}

/**
 * GET /admin/sales_channels.json
 *
 * Examples:
 *
 *      insales.listSalesChannel({
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
 *          "id": 3,
 *          "title": "test title",
 *          "state": null,
 *          "messages": [],
 *          "account_id": 1,
 *          "goods_setting_type": null,
 *          "goods_setting_id": null,
 *          "created_at": "2009-03-18T10:53:14.000+03:00",
 *          "updated_at": "2009-03-18T10:53:14.000+03:00",
 *          "application_id": 1,
 *          "last_rating_import_started_at": null,
 *          "last_feedbacks_import_started_at": null,
 *          "additional_fields": {},
 *          "auto_export_products": "disabled"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listSalesChannel(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `sales_channels`
  });
}

/**
 * POST /admin/sales_channels.json
 *
 * Examples:
 *
 *      insales.createSalesChannel({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        saleschannel: {
 *          "sales_channel": {
 *            "title": "sales channel title"
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
 *        "id": 25,
 *        "title": "sales channel title",
 *        "state": null,
 *        "messages": [],
 *        "account_id": 1,
 *        "goods_setting_type": null,
 *        "goods_setting_id": null,
 *        "created_at": "2026-10-21T23:23:06.695+03:00",
 *        "updated_at": "2026-10-21T23:23:06.695+03:00",
 *        "application_id": 1,
 *        "last_rating_import_started_at": null,
 *        "last_feedbacks_import_started_at": null,
 *        "additional_fields": {},
 *        "auto_export_products": "disabled"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.saleschannel Required, sales channel
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createSalesChannel(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `sales_channels`,
    obj: options.saleschannel
  });
}

/**
 * DELETE /admin/sales_channels/{sales_channel_id}.json
 *
 * Examples:
 *
 *      insales.removeSalesChannel({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        saleschannelid: '3'
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
 * @param {number|string} options.saleschannelid Required, sales channel id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeSalesChannel(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `sales_channels/${options.saleschannelid}`
  });
}
