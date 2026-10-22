import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/option_names/{option_name_id}.json
 *
 * Examples:
 *
 *      insales.getOptionName({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        optionnameid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "position": 1,
 *        "navigational": true,
 *        "permalink": null,
 *        "title": "Вариант",
 *        "api_permalink": null
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.optionnameid Required, option name id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getOptionName(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `option_names/${options.optionnameid}`
  });
}

/**
 * GET /admin/option_names.json
 *
 * Examples:
 *
 *      insales.listOptionName({
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
 *          "position": 1,
 *          "navigational": true,
 *          "permalink": null,
 *          "title": "Вариант",
 *          "api_permalink": null
 *        },
 *        {
 *          "id": 3,
 *          "position": 2,
 *          "navigational": true,
 *          "permalink": null,
 *          "title": "Цвет",
 *          "api_permalink": null
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listOptionName(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `option_names`
  });
}

/**
 * POST /admin/option_names.json
 *
 * Examples:
 *
 *      insales.createOptionName({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        optionname: {
 *          "option_name": {
 *            "title": "Colour",
 *            "navigational": false
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
 *        "id": 2517866,
 *        "position": 3,
 *        "navigational": false,
 *        "permalink": "colour",
 *        "title": "Colour",
 *        "api_permalink": "o-colour"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.optionname Required, option name
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createOptionName(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `option_names`,
    obj: options.optionname
  });
}

/**
 * DELETE /admin/option_names/{option_name_id}.json
 *
 * Examples:
 *
 *      insales.removeOptionName({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        optionnameid: '1'
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
 * @param {number|string} options.optionnameid Required, option name id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeOptionName(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `option_names/${options.optionnameid}`
  });
}

/**
 * PUT /admin/option_names/{option_name_id}.json
 *
 * Examples:
 *
 *      insales.editOptionName({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        optionnameid: '1',
 *        optionname: {
 *          "option_name": {
 *            "title": "Type",
 *            "position": 2,
 *            "navigational": false
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
 *        "position": 2,
 *        "navigational": false,
 *        "permalink": "type",
 *        "title": "Type",
 *        "api_permalink": "o-type"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.optionnameid Required, option name id
 * @param {object} options.optionname Required, option name
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editOptionName(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `option_names/${options.optionnameid}`,
    obj: options.optionname
  });
}
