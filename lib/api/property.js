import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/properties/{property_id}.json
 *
 * Examples:
 *
 *      insales.getProperty({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        propertyid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "position": 8,
 *        "backoffice": false,
 *        "is_hidden": false,
 *        "is_navigational": true,
 *        "permalink": "producer",
 *        "title": "Producer"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.propertyid Required, property id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getProperty(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `properties/${options.propertyid}`
  });
}

/**
 * GET /admin/properties.json
 *
 * Examples:
 *
 *      insales.listProperty({
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
 *          "id": -1,
 *          "position": 1,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "kategoriya-yandeks-marketa",
 *          "title": "Категория Яндекс Маркета"
 *        },
 *        {
 *          "id": 6,
 *          "position": 1,
 *          "backoffice": false,
 *          "is_hidden": true,
 *          "is_navigational": true,
 *          "permalink": "hidden",
 *          "title": "hidden"
 *        },
 *        {
 *          "id": -5,
 *          "position": 1,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "kategoriya-tovara-v-wildberries",
 *          "title": "Категория товара в Wildberries"
 *        },
 *        {
 *          "id": 7,
 *          "position": 2,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "visible",
 *          "title": "visible"
 *        },
 *        {
 *          "id": 9,
 *          "position": 3,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": false,
 *          "permalink": "numeric",
 *          "title": "numeric"
 *        },
 *        {
 *          "id": 8,
 *          "position": 3,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": false,
 *          "permalink": "not_navigational",
 *          "title": "not_navigational"
 *        },
 *        {
 *          "id": 5,
 *          "position": 4,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "параметр",
 *          "title": "параметр"
 *        },
 *        {
 *          "id": 4,
 *          "position": 5,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "style",
 *          "title": "Style"
 *        },
 *        {
 *          "id": 3,
 *          "position": 6,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "vendor",
 *          "title": "Vendor"
 *        },
 *        {
 *          "id": 2,
 *          "position": 7,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "importer",
 *          "title": "Importer"
 *        },
 *        {
 *          "id": 1,
 *          "position": 8,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "producer",
 *          "title": "Producer"
 *        },
 *        {
 *          "id": 14,
 *          "position": 11,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "age",
 *          "title": "Age"
 *        },
 *        {
 *          "id": 15,
 *          "position": 12,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "age_unit",
 *          "title": "Age Unit"
 *        },
 *        {
 *          "id": 100,
 *          "position": 100,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "color",
 *          "title": "Расцветка"
 *        },
 *        {
 *          "id": 101,
 *          "position": 101,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "shape",
 *          "title": "Форма"
 *        },
 *        {
 *          "id": 102,
 *          "position": 102,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "size",
 *          "title": "Размер"
 *        },
 *        {
 *          "id": 103,
 *          "position": 103,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "material",
 *          "title": "Материал"
 *        },
 *        {
 *          "id": -7,
 *          "position": 10000,
 *          "backoffice": false,
 *          "is_hidden": true,
 *          "is_navigational": false,
 *          "permalink": "new-ketagoriya-tovara-v-ozon",
 *          "title": "Новая категория товара в OZON"
 *        },
 *        {
 *          "id": -6,
 *          "position": 10001,
 *          "backoffice": false,
 *          "is_hidden": false,
 *          "is_navigational": true,
 *          "permalink": "kategoriya-tovara-v-vk",
 *          "title": "Категория товара в VK"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listProperty(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `properties`
  });
}

/**
 * POST /admin/properties.json
 *
 * Examples:
 *
 *      insales.createProperty({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        property: {
 *          "property": {
 *            "title": "Country",
 *            "permalink": "country",
 *            "backoffice": true,
 *            "is_navigational": true
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
 *        "id": 35187361,
 *        "position": 104,
 *        "backoffice": true,
 *        "is_hidden": false,
 *        "is_navigational": true,
 *        "permalink": "country",
 *        "title": "Country"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.property Required, property
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createProperty(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `properties`,
    obj: options.property
  });
}

/**
 * DELETE /admin/properties/{property_id}.json
 *
 * Examples:
 *
 *      insales.removeProperty({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        propertyid: '1'
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
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeProperty(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `properties/${options.propertyid}`
  });
}

/**
 * PUT /admin/properties/{property_id}.json
 *
 * Examples:
 *
 *      insales.editProperty({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        propertyid: '1',
 *        property: {
 *          "property": {
 *            "title": "Brand country"
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
 *        "position": 8,
 *        "backoffice": false,
 *        "is_hidden": false,
 *        "is_navigational": true,
 *        "permalink": "producer",
 *        "title": "Brand country"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.propertyid Required, property id
 * @param {object} options.property Required, property
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editProperty(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `properties/${options.propertyid}`,
    obj: options.property
  });
}
