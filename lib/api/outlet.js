import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/outlets/{outlet_id}.json
 *
 * Examples:
 *
 *      insales.getOutlet({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        outletid: '4'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 4,
 *        "account_id": 1,
 *        "delivery_variant_id": 225,
 *        "price": "100.0",
 *        "title_translations": [
 *          "Самовывоз от метро"
 *        ],
 *        "description_translations": [
 *          "Вход через арку во двор"
 *        ],
 *        "address": "ул Хмурого д1",
 *        "latitude": "55.7558",
 *        "longitude": "37.6173",
 *        "created_at": "2026-10-21T23:30:59.449+03:00",
 *        "updated_at": "2026-10-21T23:30:59.449+03:00",
 *        "title": "Самовывоз от метро",
 *        "description": "Вход через арку во двор"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.outletid Required, outlet id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getOutlet(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `outlets/${options.outletid}`
  });
}

/**
 * GET /admin/outlets.json
 *
 * Examples:
 *
 *      insales.listOutlet({
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
 *          "id": 2,
 *          "account_id": 1,
 *          "delivery_variant_id": 209,
 *          "price": "100.0",
 *          "title_translations": [
 *            "Самовывоз от метро"
 *          ],
 *          "description_translations": [
 *            "Вход через арку во двор"
 *          ],
 *          "address": "ул Хмурого д1",
 *          "latitude": "55.7558",
 *          "longitude": "37.6173",
 *          "created_at": "2026-10-21T23:30:58.910+03:00",
 *          "updated_at": "2026-10-21T23:30:58.910+03:00",
 *          "title": "Самовывоз от метро",
 *          "description": "Вход через арку во двор"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listOutlet(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `outlets`
  });
}

/**
 * POST /admin/outlets.json
 *
 * Examples:
 *
 *      insales.createOutlet({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        outlet: {
 *          "outlet": {
 *            "title": "Point 2",
 *            "description": "Point description",
 *            "address": "some address",
 *            "price": 300,
 *            "latitude": 55.7558,
 *            "longitude": 37.6173
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
 *        "id": 8,
 *        "account_id": 1,
 *        "delivery_variant_id": 241,
 *        "price": "300.0",
 *        "title_translations": [
 *          "Point 2"
 *        ],
 *        "description_translations": [
 *          "Point description"
 *        ],
 *        "address": "some address",
 *        "latitude": "55.7558",
 *        "longitude": "37.6173",
 *        "created_at": "2026-10-21T23:30:59.966+03:00",
 *        "updated_at": "2026-10-21T23:30:59.966+03:00",
 *        "title": "Point 2",
 *        "description": "Point description"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.outlet Required, outlet
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createOutlet(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `outlets`,
    obj: options.outlet
  });
}

/**
 * DELETE /admin/outlets/{outlet_id}.json
 *
 * Examples:
 *
 *      insales.removeOutlet({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        outletid: '12'
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
 * @param {number|string} options.outletid Required, outlet id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeOutlet(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `outlets/${options.outletid}`
  });
}

/**
 * PUT /admin/outlets/{outlet_id}.json
 *
 * Examples:
 *
 *      insales.editOutlet({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        outletid: '10',
 *        outlet: {
 *          "outlet": {
 *            "title": "New point title",
 *            "description": "New point description",
 *            "address": "some new address",
 *            "price": 300,
 *            "latitude": 55.7558,
 *            "longitude": 37.6173
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
 *        "delivery_variant_id": 257,
 *        "title": "New point title",
 *        "description": "New point description",
 *        "address": "some new address",
 *        "price": "300.0",
 *        "latitude": "55.7558",
 *        "longitude": "37.6173",
 *        "title_translations": [
 *          "New point title"
 *        ],
 *        "description_translations": [
 *          "New point description"
 *        ],
 *        "id": 10,
 *        "account_id": 1,
 *        "created_at": "2026-10-21T23:31:00.235+03:00",
 *        "updated_at": "2026-10-21T23:31:00.324+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.outletid Required, outlet id
 * @param {object} options.outlet Required, outlet
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editOutlet(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `outlets/${options.outletid}`,
    obj: options.outlet
  });
}
