import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/products/{product_id}/variants/{variant_id}.json
 *
 * Examples:
 *
 *      insales.getVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        variantid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "title": "Red",
 *        "product_id": 1,
 *        "sku": "423",
 *        "barcode": null,
 *        "dimensions": "10x20x30",
 *        "available": false,
 *        "image_ids": [],
 *        "image_id": null,
 *        "weight": null,
 *        "created_at": "2009-03-18T10:53:14.000+03:00",
 *        "updated_at": "2009-03-18T10:53:14.000+03:00",
 *        "quantity": 0,
 *        "quantity_at_warehouse0": "0.0",
 *        "quantity_at_warehouse1": "0.0",
 *        "cost_price": "3.0",
 *        "cost_price_in_site_currency": "90.0",
 *        "price_in_site_currency": "300.0",
 *        "base_price": "10.0",
 *        "old_price": null,
 *        "price2": 12,
 *        "price": "10.0",
 *        "base_price_in_site_currency": "300.0",
 *        "old_price_in_site_currency": null,
 *        "price2_in_site_currency": "360.0",
 *        "prices": [
 *          12
 *        ],
 *        "prices_in_site_currency": [
 *          "360.0"
 *        ],
 *        "variant_field_values": [
 *          {
 *            "id": 1,
 *            "variant_field_id": 1,
 *            "value": "some variant field value"
 *          }
 *        ],
 *        "option_values": [
 *          {
 *            "id": 1,
 *            "option_name_id": 1,
 *            "position": 1,
 *            "title": "Red",
 *            "image_url": null,
 *            "permalink": null
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {number|string} options.variantid Required, variant id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getVariant(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/variants/${options.variantid}`
  });
}

/**
 * GET /admin/products/{product_id}/variants.json
 *
 * Examples:
 *
 *      insales.listVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1'
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
 *          "title": "Red",
 *          "product_id": 1,
 *          "sku": "423",
 *          "barcode": null,
 *          "dimensions": "10x20x30",
 *          "available": false,
 *          "image_ids": [],
 *          "image_id": null,
 *          "weight": null,
 *          "created_at": "2009-03-18T10:53:14.000+03:00",
 *          "updated_at": "2009-03-18T10:53:14.000+03:00",
 *          "quantity": 0,
 *          "quantity_at_warehouse0": "0.0",
 *          "quantity_at_warehouse1": "0.0",
 *          "cost_price": "3.0",
 *          "cost_price_in_site_currency": "90.0",
 *          "price_in_site_currency": "300.0",
 *          "base_price": "10.0",
 *          "old_price": null,
 *          "price2": 12,
 *          "price": "10.0",
 *          "base_price_in_site_currency": "300.0",
 *          "old_price_in_site_currency": null,
 *          "price2_in_site_currency": "360.0",
 *          "prices": [
 *            12
 *          ],
 *          "prices_in_site_currency": [
 *            "360.0"
 *          ],
 *          "variant_field_values": [
 *            {
 *              "id": 1,
 *              "variant_field_id": 1,
 *              "value": "some variant field value"
 *            }
 *          ],
 *          "option_values": [
 *            {
 *              "id": 1,
 *              "option_name_id": 1,
 *              "position": 1,
 *              "title": "Red",
 *              "image_url": null,
 *              "permalink": null
 *            }
 *          ]
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listVariant(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/variants`
  });
}

/**
 * POST /admin/products/{product_id}/variants.json
 *
 * Examples:
 *
 *      insales.createVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        variant: {
 *          "variant": {
 *            "price": 100,
 *            "quantity": 1,
 *            "options": [
 *              {
 *                "option_name_id": 1,
 *                "value": "Black"
 *              }
 *            ],
 *            "image_ids": [
 *              4451,
 *              4459,
 *              4467
 *            ],
 *            "variant_field_values_attributes": [
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
 *        "id": 509945722,
 *        "title": "Black",
 *        "product_id": 1,
 *        "sku": null,
 *        "barcode": null,
 *        "dimensions": "10x20x30",
 *        "available": true,
 *        "image_ids": [
 *          4451,
 *          4459,
 *          4467
 *        ],
 *        "image_id": 4451,
 *        "weight": null,
 *        "created_at": "2026-10-21T23:12:50.000+03:00",
 *        "updated_at": "2026-10-21T23:12:50.000+03:00",
 *        "quantity": 1,
 *        "quantity_at_warehouse0": "1.0",
 *        "quantity_at_warehouse1": "0.0",
 *        "cost_price": null,
 *        "cost_price_in_site_currency": null,
 *        "price_in_site_currency": "3000.0",
 *        "base_price": "100.0",
 *        "old_price": null,
 *        "price2": null,
 *        "price": "100.0",
 *        "base_price_in_site_currency": "3000.0",
 *        "old_price_in_site_currency": null,
 *        "price2_in_site_currency": null,
 *        "prices": [],
 *        "prices_in_site_currency": [],
 *        "variant_field_values": [
 *          {
 *            "id": 93,
 *            "variant_field_id": 1,
 *            "value": "12345"
 *          }
 *        ],
 *        "option_values": [
 *          {
 *            "id": 21063490,
 *            "option_name_id": 1,
 *            "position": 21,
 *            "title": "Black",
 *            "image_url": null,
 *            "permalink": "black"
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {object} options.variant Required, variant
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createVariant(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/variants`,
    obj: options.variant
  });
}

/**
 * DELETE /admin/products/{product_id}/variants/{variant_success_id}.json
 *
 * Examples:
 *
 *      insales.removeVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        variantid: '509945724'
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
 * @param {number|string} options.productid Required, product id
 * @param {number|string} options.variantid Required, variant id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeVariant(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/variants/${options.variantid}`
  });
}

/**
 * PUT /admin/products/{product_id}/variants/{variant_id}.json
 *
 * Examples:
 *
 *      insales.editVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        variantid: '1',
 *        variant: {
 *          "variant": {
 *            "price": 150,
 *            "quantity_at_warehouse0": 50,
 *            "variant_field_values_attributes": [
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
 *        "title": "Red",
 *        "product_id": 1,
 *        "sku": "423",
 *        "barcode": null,
 *        "dimensions": "10x20x30",
 *        "available": true,
 *        "image_ids": [],
 *        "image_id": null,
 *        "weight": null,
 *        "created_at": "2009-03-18T10:53:14.000+03:00",
 *        "updated_at": "2026-10-21T23:12:51.000+03:00",
 *        "quantity": 50,
 *        "quantity_at_warehouse0": "50.0",
 *        "quantity_at_warehouse1": "0.0",
 *        "cost_price": "3.0",
 *        "cost_price_in_site_currency": "90.0",
 *        "price_in_site_currency": "4500.0",
 *        "base_price": "150.0",
 *        "old_price": null,
 *        "price2": 12,
 *        "price": "150.0",
 *        "base_price_in_site_currency": "4500.0",
 *        "old_price_in_site_currency": null,
 *        "price2_in_site_currency": "360.0",
 *        "prices": [
 *          12
 *        ],
 *        "prices_in_site_currency": [
 *          "360.0"
 *        ],
 *        "variant_field_values": [
 *          {
 *            "id": 1,
 *            "variant_field_id": 1,
 *            "value": "12345"
 *          }
 *        ],
 *        "option_values": [
 *          {
 *            "id": 1,
 *            "option_name_id": 1,
 *            "position": 1,
 *            "title": "Red",
 *            "image_url": null,
 *            "permalink": null
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {number|string} options.variantid Required, variant id
 * @param {object} options.variant Required, variant
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editVariant(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/variants/${options.variantid}`,
    obj: options.variant
  });
}

/**
 * PUT /admin/products/variants_group_update.json
 *
 * Examples:
 *
 *      insales.editVariantGroup({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        variants: {
 *          "variants": [
 *            {
 *              "id": 1,
 *              "price": 100,
 *              "quantity_at_warehouse0": 3
 *            }
 *          ]
 *        }
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      []
 *
 *      insales.editVariantGroup({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        variants: {
 *          "variants": [
 *            {
 *              "id": 1,
 *              "price": 100,
 *              "quantity_at_warehouse0": 3,
 *              "quantity_at_warehouses": [
 *                5,
 *                2
 *              ]
 *            }
 *          ]
 *        }
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
 * @param {object} options.variants Required, variants group
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editVariantGroup(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `products/variants_group_update`,
    obj: options.variants
  });
}
