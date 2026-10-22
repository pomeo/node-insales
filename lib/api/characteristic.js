import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/properties/{property_id}/characteristics/{characteristic_id}.json
 *
 * Examples:
 *
 *      insales.getCharacteristic({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        propertyid: '3',
 *        characteristicid: '7'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 7,
 *        "property_id": 3,
 *        "position": 1,
 *        "title": "Nike",
 *        "permalink": "nike"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.propertyid Required, property id
 * @param {number|string} options.characteristicid Required, characteristic id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getCharacteristic(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `properties/${options.propertyid}/characteristics/${options.characteristicid}`
  });
}

/**
 * GET /admin/properties/{property_id}/characteristics.json
 *
 * Examples:
 *
 *      insales.listCharacteristic({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        propertyid: '3'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      [
 *        {
 *          "id": 7,
 *          "property_id": 3,
 *          "position": 1,
 *          "title": "Nike",
 *          "permalink": "nike"
 *        },
 *        {
 *          "id": 8,
 *          "property_id": 3,
 *          "position": 2,
 *          "title": "Puma",
 *          "permalink": "puma"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.propertyid Required, property id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listCharacteristic(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `properties/${options.propertyid}/characteristics`
  });
}

/**
 * POST /admin/properties/{property_id}/characteristics.json
 *
 * Examples:
 *
 *      insales.createCharacteristic({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        propertyid: '3',
 *        characteristic: {
 *          "characteristic": {
 *            "title": "Reebok"
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
 *        "id": 898584327,
 *        "property_id": 3,
 *        "position": 3,
 *        "title": "Reebok",
 *        "permalink": "reebok"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.propertyid Required, property id
 * @param {object} options.characteristic Required, characteristic
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createCharacteristic(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `properties/${options.propertyid}/characteristics`,
    obj: options.characteristic
  });
}

/**
 * DELETE /admin/properties/{property_id}/characteristics/{characteristic_id}.json
 *
 * Examples:
 *
 *      insales.removeCharacteristic({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        propertyid: '3',
 *        characteristicid: '7'
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
 * @param {number|string} options.propertyid Required, property id
 * @param {number|string} options.characteristicid Required, characteristic id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeCharacteristic(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `properties/${options.propertyid}/characteristics/${options.characteristicid}`
  });
}

/**
 * PUT /admin/properties/{property_id}/characteristics/{characteristic_id}.json
 *
 * Examples:
 *
 *      insales.editCharacteristic({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        propertyid: '3',
 *        characteristicid: '7',
 *        characteristic: {
 *          "characteristic": {
 *            "title": "Adidas"
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
 *        "id": 7,
 *        "property_id": 3,
 *        "position": 1,
 *        "title": "Adidas",
 *        "permalink": "nike"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.propertyid Required, property id
 * @param {number|string} options.characteristicid Required, characteristic id
 * @param {object} options.characteristic Required, characteristic
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editCharacteristic(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `properties/${options.propertyid}/characteristics/${options.characteristicid}`,
    obj: options.characteristic
  });
}
