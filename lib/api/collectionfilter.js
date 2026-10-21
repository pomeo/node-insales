import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/collection_filters/{filter_id}.json
 *
 * Examples:
 *
 *      insales.getCollectionFilter({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        filterid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "collection_id": 1,
 *        "description": null,
 *        "seo_description": null,
 *        "title": "seo filter",
 *        "permalink": "foobar",
 *        "html_title": null,
 *        "meta_keywords": null,
 *        "meta_description": null,
 *        "characteristis": [
 *          {
 *            "id": 1,
 *            "property_id": 1,
 *            "position": 1,
 *            "title": "Japan",
 *            "permalink": "japan"
 *          },
 *          {
 *            "id": 2,
 *            "property_id": 2,
 *            "position": 1,
 *            "title": "Germany",
 *            "permalink": "germany"
 *          }
 *        ],
 *        "option_values": []
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.filterid Required, collection filter id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getCollectionFilter(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `collection_filters/${options.filterid}`
  });
}

/**
 * GET /admin/collection_filters.json?collection_id={collection_id}
 *
 * Examples:
 *
 *      insales.listCollectionFilter({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectionid: '1'
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
 *          "collection_id": 1,
 *          "description": null,
 *          "seo_description": null,
 *          "title": "seo filter",
 *          "permalink": "foobar",
 *          "html_title": null,
 *          "meta_keywords": null,
 *          "meta_description": null,
 *          "characteristis": [
 *            {
 *              "id": 1,
 *              "property_id": 1,
 *              "position": 1,
 *              "title": "Japan",
 *              "permalink": "japan"
 *            },
 *            {
 *              "id": 2,
 *              "property_id": 2,
 *              "position": 1,
 *              "title": "Germany",
 *              "permalink": "germany"
 *            }
 *          ],
 *          "option_values": []
 *        },
 *        {
 *          "id": 2,
 *          "collection_id": 1,
 *          "description": null,
 *          "seo_description": null,
 *          "title": "seo filter 2",
 *          "permalink": "barfoo",
 *          "html_title": null,
 *          "meta_keywords": null,
 *          "meta_description": null,
 *          "characteristis": [],
 *          "option_values": [
 *            {
 *              "id": 1,
 *              "option_name_id": 1,
 *              "position": 1,
 *              "title": "Red",
 *              "image_url": null,
 *              "permalink": null
 *            },
 *            {
 *              "id": 2,
 *              "option_name_id": 1,
 *              "position": 2,
 *              "title": "Зеленый",
 *              "image_url": null,
 *              "permalink": null
 *            }
 *          ]
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.collectionid Required, collection id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listCollectionFilter(options, id) {
  const query = {};
  if (options.collectionid) {
    query.collection_id = options.collectionid;
  }
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `collection_filters`,
    query
  });
}

/**
 * POST /admin/collection_filters.json
 *
 * Examples:
 *
 *      insales.createCollectionFilter({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        filter: {
 *          "filter": {
 *            "title": "new filter",
 *            "collection_id": 1,
 *            "properties_attributes": [
 *              {
 *                "title": "first property",
 *                "value": "first prop value"
 *              },
 *              {
 *                "title": "second property",
 *                "value": "second property value"
 *              }
 *            ],
 *            "options_attributes": [
 *              {
 *                "title": "first option",
 *                "value": "first option value"
 *              },
 *              {
 *                "title": "second option",
 *                "value": "second option value"
 *              }
 *            ],
 *            "field_values_attributes": [
 *              {
 *                "handle": "handle",
 *                "value": 12345
 *              }
 *            ]
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
 *        "id": 162,
 *        "collection_id": 1,
 *        "description": null,
 *        "seo_description": null,
 *        "title": "new filter",
 *        "permalink": "new-filter",
 *        "html_title": null,
 *        "meta_keywords": null,
 *        "meta_description": null,
 *        "characteristis": [
 *          {
 *            "id": 898584351,
 *            "property_id": 35187364,
 *            "position": 1,
 *            "title": "first prop value",
 *            "permalink": "first-prop-value"
 *          },
 *          {
 *            "id": 898584359,
 *            "property_id": 35187365,
 *            "position": 1,
 *            "title": "second property value",
 *            "permalink": "second-property-value"
 *          }
 *        ],
 *        "option_values": [
 *          {
 *            "id": 21063495,
 *            "option_name_id": 2517869,
 *            "position": 1,
 *            "title": "first option value",
 *            "image_url": null,
 *            "permalink": "first-option-value"
 *          },
 *          {
 *            "id": 21063496,
 *            "option_name_id": 2517870,
 *            "position": 1,
 *            "title": "second option value",
 *            "image_url": null,
 *            "permalink": "second-option-value"
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.filter Required, collection filter
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createCollectionFilter(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `collection_filters`,
    obj: options.filter
  });
}

/**
 * DELETE /admin/collection_filters/{filter_id}.json
 *
 * Examples:
 *
 *      insales.removeCollectionFilter({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        filterid: '1'
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
 * @param {number|string} options.filterid Required, collection filter id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeCollectionFilter(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `collection_filters/${options.filterid}`
  });
}

/**
 * PUT /admin/collection_filters/{filter_id}.json
 *
 * Examples:
 *
 *      insales.editCollectionFilter({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        filterid: '1',
 *        filter: {
 *          "filter": {
 *            "title": "new-seo-filter",
 *            "permalink": "new-seo-filter",
 *            "properties_attributes": [
 *              {
 *                "title": "first property",
 *                "value": "first prop value"
 *              },
 *              {
 *                "title": "second property",
 *                "value": "second property value"
 *              }
 *            ],
 *            "options_attributes": [
 *              {
 *                "title": "first option",
 *                "value": "first option value"
 *              },
 *              {
 *                "title": "second option",
 *                "value": "second option value"
 *              }
 *            ],
 *            "field_values_attributes": [
 *              {
 *                "handle": "handle",
 *                "value": 12345
 *              }
 *            ]
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
 *        "collection_id": 1,
 *        "description": null,
 *        "seo_description": null,
 *        "title": "new-seo-filter",
 *        "permalink": "new-seo-filter",
 *        "html_title": null,
 *        "meta_keywords": null,
 *        "meta_description": null,
 *        "characteristis": [
 *          {
 *            "id": 898584383,
 *            "property_id": 35187368,
 *            "position": 1,
 *            "title": "first prop value",
 *            "permalink": "first-prop-value"
 *          },
 *          {
 *            "id": 898584391,
 *            "property_id": 35187369,
 *            "position": 1,
 *            "title": "second property value",
 *            "permalink": "second-property-value"
 *          }
 *        ],
 *        "option_values": [
 *          {
 *            "id": 21063499,
 *            "option_name_id": 2517873,
 *            "position": 1,
 *            "title": "first option value",
 *            "image_url": null,
 *            "permalink": "first-option-value"
 *          },
 *          {
 *            "id": 21063500,
 *            "option_name_id": 2517874,
 *            "position": 1,
 *            "title": "second option value",
 *            "image_url": null,
 *            "permalink": "second-option-value"
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.filterid Required, collection filter id
 * @param {object} options.filter Required, collection filter
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editCollectionFilter(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `collection_filters/${options.filterid}`,
    obj: options.filter
  });
}
