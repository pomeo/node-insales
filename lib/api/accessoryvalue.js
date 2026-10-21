import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/accessories/{accessory_id}/values/{accessory_value_id}.json
 *
 * Examples:
 *
 *      insales.getAccessoryValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        accessoryid: '90',
 *        accessoryvalueid: '64'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 64,
 *        "account_id": 1,
 *        "accessory_id": 90,
 *        "name_translations": [
 *          "Значение опции"
 *        ],
 *        "price": "2.57",
 *        "created_at": "2026-10-21T23:15:59.533+03:00",
 *        "updated_at": "2026-10-21T23:15:59.533+03:00",
 *        "accounting_variant_id": null,
 *        "name": "Значение опции"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.accessoryid Required, accessory id
 * @param {number|string} options.accessoryvalueid Required, accessory value id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getAccessoryValue(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `accessories/${options.accessoryid}/values/${options.accessoryvalueid}`
  });
}

/**
 * GET /admin/accessories/{accessory_id}/values.json
 *
 * Examples:
 *
 *      insales.listAccessoryValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        accessoryid: '88'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      [
 *        {
 *          "id": 50,
 *          "account_id": 1,
 *          "accessory_id": 88,
 *          "name_translations": [
 *            "Значение опции"
 *          ],
 *          "price": "2.93",
 *          "created_at": "2026-10-21T23:15:59.087+03:00",
 *          "updated_at": "2026-10-21T23:15:59.087+03:00",
 *          "accounting_variant_id": null,
 *          "name": "Значение опции"
 *        },
 *        {
 *          "id": 51,
 *          "account_id": 1,
 *          "accessory_id": 88,
 *          "name_translations": [
 *            "Значение опции 0"
 *          ],
 *          "price": "6.77",
 *          "created_at": "2026-10-21T23:15:59.100+03:00",
 *          "updated_at": "2026-10-21T23:15:59.100+03:00",
 *          "accounting_variant_id": null,
 *          "name": "Значение опции 0"
 *        },
 *        {
 *          "id": 52,
 *          "account_id": 1,
 *          "accessory_id": 88,
 *          "name_translations": [
 *            "Значение опции 1"
 *          ],
 *          "price": "3.94",
 *          "created_at": "2026-10-21T23:15:59.110+03:00",
 *          "updated_at": "2026-10-21T23:15:59.110+03:00",
 *          "accounting_variant_id": null,
 *          "name": "Значение опции 1"
 *        },
 *        {
 *          "id": 53,
 *          "account_id": 1,
 *          "accessory_id": 88,
 *          "name_translations": [
 *            "Значение опции 2"
 *          ],
 *          "price": "9.04",
 *          "created_at": "2026-10-21T23:15:59.124+03:00",
 *          "updated_at": "2026-10-21T23:15:59.124+03:00",
 *          "accounting_variant_id": null,
 *          "name": "Значение опции 2"
 *        },
 *        {
 *          "id": 54,
 *          "account_id": 1,
 *          "accessory_id": 88,
 *          "name_translations": [
 *            "Значение опции 0"
 *          ],
 *          "price": "9.43",
 *          "created_at": "2026-10-21T23:15:59.132+03:00",
 *          "updated_at": "2026-10-21T23:15:59.132+03:00",
 *          "accounting_variant_id": null,
 *          "name": "Значение опции 0"
 *        },
 *        {
 *          "id": 55,
 *          "account_id": 1,
 *          "accessory_id": 88,
 *          "name_translations": [
 *            "Значение опции 1"
 *          ],
 *          "price": "8.18",
 *          "created_at": "2026-10-21T23:15:59.140+03:00",
 *          "updated_at": "2026-10-21T23:15:59.140+03:00",
 *          "accounting_variant_id": null,
 *          "name": "Значение опции 1"
 *        },
 *        {
 *          "id": 56,
 *          "account_id": 1,
 *          "accessory_id": 88,
 *          "name_translations": [
 *            "Значение опции 2"
 *          ],
 *          "price": "9.95",
 *          "created_at": "2026-10-21T23:15:59.148+03:00",
 *          "updated_at": "2026-10-21T23:15:59.148+03:00",
 *          "accounting_variant_id": null,
 *          "name": "Значение опции 2"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.accessoryid Required, accessory id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listAccessoryValue(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `accessories/${options.accessoryid}/values`
  });
}

/**
 * POST /admin/accessories/{accessory_id}/values.json
 *
 * Examples:
 *
 *      insales.createAccessoryValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        accessoryid: '92',
 *        accessoryvalue: {
 *          "accessory_value": {
 *            "name": "Значение опции",
 *            "price": 100,
 *            "accounting_variant_id": null
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
 *        "id": 86,
 *        "account_id": 1,
 *        "accessory_id": 92,
 *        "name_translations": [
 *          "Значение опции"
 *        ],
 *        "price": "100.0",
 *        "created_at": "2026-10-21T23:16:00.075+03:00",
 *        "updated_at": "2026-10-21T23:16:00.075+03:00",
 *        "accounting_variant_id": null,
 *        "name": "Значение опции"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.accessoryid Required, accessory id
 * @param {object} options.accessoryvalue Required, accessory value
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createAccessoryValue(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `accessories/${options.accessoryid}/values`,
    obj: options.accessoryvalue
  });
}

/**
 * DELETE /admin/accessories/{accessory_id}/values/{accessory_value_id}.json
 *
 * Examples:
 *
 *      insales.removeAccessoryValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        accessoryid: '96',
 *        accessoryvalueid: '108'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 108,
 *        "account_id": 1,
 *        "accessory_id": 96,
 *        "name_translations": [
 *          "Значение опции"
 *        ],
 *        "price": "7.09",
 *        "created_at": "2026-10-21T23:16:00.762+03:00",
 *        "updated_at": "2026-10-21T23:16:00.762+03:00",
 *        "accounting_variant_id": null,
 *        "name": "Значение опции"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.accessoryid Required, accessory id
 * @param {number|string} options.accessoryvalueid Required, accessory value id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeAccessoryValue(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `accessories/${options.accessoryid}/values/${options.accessoryvalueid}`
  });
}

/**
 * PUT /admin/accessories/{accessory_id}/values/{accessory_value_id}.json
 *
 * Examples:
 *
 *      insales.editAccessoryValue({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        accessoryid: '94',
 *        accessoryvalueid: '94',
 *        accessoryvalue: {
 *          "accessory_value": {
 *            "name": "Обновлённое значение опции",
 *            "price": 200,
 *            "accounting_variant_id": null
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
 *        "accessory_id": 94,
 *        "name": "Обновлённое значение опции",
 *        "price": "200.0",
 *        "accounting_variant_id": null,
 *        "name_translations": [
 *          "Обновлённое значение опции"
 *        ],
 *        "id": 94,
 *        "account_id": 1,
 *        "created_at": "2026-10-21T23:16:00.357+03:00",
 *        "updated_at": "2026-10-21T23:16:00.508+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.accessoryid Required, accessory id
 * @param {number|string} options.accessoryvalueid Required, accessory value id
 * @param {object} options.accessoryvalue Required, accessory value
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editAccessoryValue(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `accessories/${options.accessoryid}/values/${options.accessoryvalueid}`,
    obj: options.accessoryvalue
  });
}

/**
 * GET /admin/products/{product_id}/product_accessory_links.json
 *
 * Examples:
 *
 *      insales.listAccessoryLink({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '293978481'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      []
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listAccessoryLink(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/product_accessory_links`
  });
}

/**
 * POST /admin/products/{product_id}/product_accessory_links.json
 *
 * Examples:
 *
 *      insales.createAccessoryLink({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '293978497',
 *        accessorylink: {
 *          "product_accessory_link": {
 *            "accessory_id": 100
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
 *        "id": 19,
 *        "account_id": 1,
 *        "accessory_id": 100,
 *        "created_at": "2026-10-21T23:16:02.499+03:00",
 *        "updated_at": "2026-10-21T23:16:02.499+03:00",
 *        "product_id": 293978497,
 *        "accessory": {
 *          "id": 100,
 *          "account_id": 1,
 *          "name_translations": [
 *            "Опция 1"
 *          ],
 *          "min_count": 4,
 *          "max_count": 9,
 *          "created_at": "2026-10-21T23:16:02.342+03:00",
 *          "updated_at": "2026-10-21T23:16:02.342+03:00",
 *          "back_office_name": "Лоснящийся Мраморный Стол",
 *          "permalink": "opcia-1",
 *          "name": "Опция 1"
 *        },
 *        "product": {
 *          "category_id": 1,
 *          "created_at": "2026-10-21T23:16:02.000+03:00",
 *          "updated_at": "2026-10-21T23:16:02.000+03:00",
 *          "is_hidden": false,
 *          "account_id": 1,
 *          "title_translations": [
 *            "product 4"
 *          ],
 *          "available": null,
 *          "archived": false,
 *          "key": null,
 *          "price_min_cached": null,
 *          "price_max_cached": null,
 *          "price_min_available_cached": null,
 *          "price_max_available_cached": null,
 *          "canonical_url_collection_id": null,
 *          "collections_id": [],
 *          "characteristics_id": [],
 *          "custom_layout": null,
 *          "custom_template": null,
 *          "old_price_min_cached": null,
 *          "old_price_max_cached": null,
 *          "old_price_min_available_cached": null,
 *          "old_price_max_available_cached": null,
 *          "permalink": "product-4",
 *          "unit": "pce",
 *          "deleted": false,
 *          "cost_price_min_cached": null,
 *          "cost_price_max_cached": null,
 *          "stock_currency_id": 1,
 *          "sort_weight": null,
 *          "bundle": null,
 *          "ignore_discounts": null,
 *          "vat": 10,
 *          "dimensions": null,
 *          "fiscal_product_type": 1,
 *          "popularity": null,
 *          "available_at_warehouses": [],
 *          "auto_assign_bundle_price": null,
 *          "demo": null,
 *          "sales_channels_id": null,
 *          "demo_thematic": null,
 *          "reviews_average_rating_cached": null,
 *          "reviews_count_cached": null,
 *          "merge_product_id": null,
 *          "merge_group_product_id": null,
 *          "merge_group_hidden": null,
 *          "no_delivery": false,
 *          "id": 293978497,
 *          "main_image_id": null,
 *          "is_adult": false,
 *          "title": "product 4"
 *        }
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {object} options.accessorylink Required, product accessory link
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createAccessoryLink(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/product_accessory_links`,
    obj: options.accessorylink
  });
}

/**
 * DELETE /admin/products/{product_id}/product_accessory_links/{product_accessory_link_id}.json
 *
 * Examples:
 *
 *      insales.removeAccessoryLink({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '293978513',
 *        accessorylinkid: '21'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 21,
 *        "account_id": 1,
 *        "accessory_id": 102,
 *        "created_at": "2026-10-21T23:16:02.878+03:00",
 *        "updated_at": "2026-10-21T23:16:02.878+03:00",
 *        "product_id": 293978513,
 *        "accessory": {
 *          "id": 102,
 *          "account_id": 1,
 *          "name_translations": [
 *            "Опция 1"
 *          ],
 *          "min_count": 2,
 *          "max_count": 5,
 *          "created_at": "2026-10-21T23:16:02.813+03:00",
 *          "updated_at": "2026-10-21T23:16:02.813+03:00",
 *          "back_office_name": "Фантастический Стальной Часы",
 *          "permalink": "opcia-1",
 *          "name": "Опция 1"
 *        },
 *        "product": {
 *          "category_id": 1,
 *          "created_at": "2026-10-21T23:16:02.000+03:00",
 *          "updated_at": "2026-10-21T23:16:02.000+03:00",
 *          "is_hidden": false,
 *          "account_id": 1,
 *          "title_translations": [
 *            "product 6"
 *          ],
 *          "available": null,
 *          "archived": false,
 *          "key": null,
 *          "price_min_cached": null,
 *          "price_max_cached": null,
 *          "price_min_available_cached": null,
 *          "price_max_available_cached": null,
 *          "canonical_url_collection_id": null,
 *          "collections_id": [],
 *          "characteristics_id": [],
 *          "custom_layout": null,
 *          "custom_template": null,
 *          "old_price_min_cached": null,
 *          "old_price_max_cached": null,
 *          "old_price_min_available_cached": null,
 *          "old_price_max_available_cached": null,
 *          "permalink": "product-6",
 *          "unit": "pce",
 *          "deleted": false,
 *          "cost_price_min_cached": null,
 *          "cost_price_max_cached": null,
 *          "stock_currency_id": 1,
 *          "sort_weight": null,
 *          "bundle": null,
 *          "ignore_discounts": null,
 *          "vat": 10,
 *          "dimensions": null,
 *          "fiscal_product_type": 1,
 *          "popularity": null,
 *          "available_at_warehouses": [],
 *          "auto_assign_bundle_price": null,
 *          "demo": null,
 *          "sales_channels_id": null,
 *          "demo_thematic": null,
 *          "reviews_average_rating_cached": null,
 *          "reviews_count_cached": null,
 *          "merge_product_id": null,
 *          "merge_group_product_id": null,
 *          "merge_group_hidden": null,
 *          "no_delivery": false,
 *          "id": 293978513,
 *          "main_image_id": null,
 *          "is_adult": false,
 *          "title": "product 6"
 *        }
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {number|string} options.accessorylinkid Required, product accessory link id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeAccessoryLink(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/product_accessory_links/${options.accessorylinkid}`
  });
}
