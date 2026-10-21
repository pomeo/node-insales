import { get } from '../methods/get';
import { post } from '../methods/post';
import { put } from '../methods/put';
import { remove } from '../methods/remove';

/**
 * GET /admin/marketplaces/{ym_marketplace_id}.json
 *
 * Examples:
 *
 *      insales.getMarketplace({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        marketplaceid: '41'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 41,
 *        "name": "Yandex Model",
 *        "type": "Marketplace::ModelYandexMarket",
 *        "created_at": "2026-10-21T23:32:41.293+03:00",
 *        "updated_at": "2026-10-21T23:32:41.293+03:00",
 *        "url": "https://quentin.insales.io:3003/marketplace/41.xml",
 *        "collection_ids": [],
 *        "delivery_price_kind": null,
 *        "description_type": 1,
 *        "local_delivery_cost": null,
 *        "sales_notes": null,
 *        "utm_label": null,
 *        "vendor_id": 6,
 *        "page_encoding": "windows-1251",
 *        "shop_company": "eBay",
 *        "shop_name": "eBay",
 *        "adult": false,
 *        "delivery": false,
 *        "delivery_new_style": false,
 *        "pickup": false,
 *        "store": false,
 *        "use_sku_as_vendor_code": false,
 *        "use_stock_currency": false,
 *        "use_variants": false
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.marketplaceid Required, marketplace id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getMarketplace(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `marketplaces/${options.marketplaceid}`
  });
}

/**
 * GET /admin/marketplaces.json
 *
 * Examples:
 *
 *      insales.listMarketplace({
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
 *          "id": 17,
 *          "name": "Yandex Model",
 *          "type": "Marketplace::LiquidYandexMarket",
 *          "created_at": "2026-10-21T23:32:40.781+03:00",
 *          "updated_at": "2026-10-21T23:32:40.781+03:00",
 *          "url": "https://quentin.insales.io:3003/marketplace/17.xml",
 *          "collection_ids": [],
 *          "local_delivery_cost": null,
 *          "vendor_id": null,
 *          "offer_liquid": "<offer>...</offer>",
 *          "page_encoding": "utf-8",
 *          "shop_company": "eBay",
 *          "shop_name": "eBay",
 *          "delivery_new_style": false,
 *          "use_stock_currency": false,
 *          "use_variants": false
 *        },
 *        {
 *          "id": 25,
 *          "name": "Google Model",
 *          "type": "Marketplace::GoogleMerchant",
 *          "created_at": "2026-10-21T23:32:40.793+03:00",
 *          "updated_at": "2026-10-21T23:32:40.793+03:00",
 *          "url": "https://quentin.insales.io:3003/marketplace/25.xml",
 *          "collection_ids": [],
 *          "description_type": null,
 *          "local_delivery_cost": null,
 *          "utm_label": null,
 *          "adult": false,
 *          "delivery_new_style": false,
 *          "use_stock_currency": false,
 *          "use_variants": false
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listMarketplace(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `marketplaces`
  });
}

/**
 * POST /admin/marketplaces.json
 *
 * Examples:
 *
 *      insales.createMarketplace({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        marketplace: {
 *          "marketplace": {
 *            "name": "YM",
 *            "type": "Marketplace::ModelYandexMarket",
 *            "shop_name": "eBay",
 *            "shop_company": "eBay",
 *            "description_type": 1,
 *            "vendor_id": 6,
 *            "adult": 0,
 *            "page_encoding": "windows-1251",
 *            "image_style": "oroginal",
 *            "collection_ids": [
 *              6,
 *              1,
 *              2,
 *              3,
 *              4,
 *              5,
 *              8
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
 *        "id": 57,
 *        "name": "YM",
 *        "type": "Marketplace::ModelYandexMarket",
 *        "created_at": "2026-10-21T23:32:41.837+03:00",
 *        "updated_at": "2026-10-21T23:32:41.837+03:00",
 *        "url": "https://quentin.insales.io:3003/marketplace/57.xml",
 *        "collection_ids": [],
 *        "delivery_price_kind": null,
 *        "description_type": 1,
 *        "local_delivery_cost": null,
 *        "sales_notes": null,
 *        "utm_label": null,
 *        "vendor_id": 6,
 *        "page_encoding": "windows-1251",
 *        "shop_company": "eBay",
 *        "shop_name": "eBay",
 *        "adult": false,
 *        "delivery": true,
 *        "delivery_new_style": false,
 *        "pickup": false,
 *        "store": false,
 *        "use_sku_as_vendor_code": false,
 *        "use_stock_currency": false,
 *        "use_variants": false
 *      }
 *
 *      insales.createMarketplace({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        marketplace: {
 *          "marketplace": {
 *            "name": "GM",
 *            "type": "Marketplace::GoogleMerchant",
 *            "description_type": 1,
 *            "adult": 0
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
 *        "name": "GM",
 *        "type": "Marketplace::GoogleMerchant",
 *        "created_at": "2026-10-21T23:32:42.169+03:00",
 *        "updated_at": "2026-10-21T23:32:42.169+03:00",
 *        "url": "https://quentin.insales.io:3003/marketplace/73.xml",
 *        "collection_ids": [],
 *        "description_type": 1,
 *        "local_delivery_cost": null,
 *        "utm_label": null,
 *        "adult": false,
 *        "delivery_new_style": false,
 *        "use_stock_currency": false,
 *        "use_variants": false
 *      }
 *
 *      insales.createMarketplace({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        marketplace: {
 *          "marketplace": {
 *            "name": "LYM",
 *            "type": "Marketplace::LiquidYandexMarket",
 *            "shop_name": "eBay",
 *            "use_variants": 1,
 *            "shop_company": "eBay",
 *            "page_encoding": "utf-8",
 *            "offer_liquid": "\n<offer type=\"vendor.model\" available=\"{% if product.available %}true{% else %}false{% endif %}\" id=\"{{product.id}}\" >\n  <url>{{account.url}}/product_by_id/{{product.id}}</url>\n  <price>{{product.price}}</price>\n  <currencyId>RUR</currencyId>\n  <categoryId>{{collection.id}}</categoryId>\n  {%for image in product.images limit: 10 %}\n  <picture>{{image.url}}</picture>\n  {% endfor %}\n  <store>false</store>\n  <pickup>true</pickup>\n  <delivery>true</delivery>\n  <vendor>{{product.properties.vendor}}</vendor>\n  <model>{{product.title}}</model>\n  <description>{{product.description}}</description>\n</offer>\n        ",
 *            "collection_ids": [
 *              6,
 *              1,
 *              2,
 *              3,
 *              4,
 *              5,
 *              8
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
 *        "id": 121,
 *        "name": "LYM",
 *        "type": "Marketplace::LiquidYandexMarket",
 *        "created_at": "2026-10-21T23:32:43.300+03:00",
 *        "updated_at": "2026-10-21T23:32:43.300+03:00",
 *        "url": "https://quentin.insales.io:3003/marketplace/121.xml",
 *        "collection_ids": [],
 *        "local_delivery_cost": null,
 *        "vendor_id": null,
 *        "offer_liquid": "\n<offer type=\"vendor.model\" available=\"{% if product.available %}true{% else %}false{% endif %}\" id=\"{{product.id}}\" >\n  <url>{{account.url}}/product_by_id/{{product.id}}</url>\n  <price>{{product.price}}</price>\n  <currencyId>RUR</currencyId>\n  <categoryId>{{collection.id}}</categoryId>\n  {%for image in product.images limit: 10 %}\n  <picture>{{image.url}}</picture>\n  {% endfor %}\n  <store>false</store>\n  <pickup>true</pickup>\n  <delivery>true</delivery>\n  <vendor>{{product.properties.vendor}}</vendor>\n  <model>{{product.title}}</model>\n  <description>{{product.description}}</description>\n</offer>\n        ",
 *        "page_encoding": "utf-8",
 *        "shop_company": "eBay",
 *        "shop_name": "eBay",
 *        "delivery_new_style": false,
 *        "use_stock_currency": false,
 *        "use_variants": true
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.marketplace Required, marketplace
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createMarketplace(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `marketplaces`,
    obj: options.marketplace
  });
}

/**
 * DELETE /admin/marketplaces/{ym_marketplace_id}.json
 *
 * Examples:
 *
 *      insales.removeMarketplace({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        marketplaceid: '153'
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
 * @param {number|string} options.marketplaceid Required, marketplace id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeMarketplace(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `marketplaces/${options.marketplaceid}`
  });
}

/**
 * PUT /admin/marketplaces/{ym_marketplace_id}.json
 *
 * Examples:
 *
 *      insales.editMarketplace({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        marketplaceid: '89',
 *        marketplace: {
 *          "marketplace": {
 *            "name": "New YM",
 *            "vendor_id": 4,
 *            "collection_ids": [
 *              6,
 *              1,
 *              2,
 *              3,
 *              4,
 *              5,
 *              8
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
 *        "id": 89,
 *        "name": "New YM",
 *        "type": "Marketplace::ModelYandexMarket",
 *        "created_at": "2026-10-21T23:32:42.498+03:00",
 *        "updated_at": "2026-10-21T23:32:42.600+03:00",
 *        "url": "https://quentin.insales.io:3003/marketplace/89.xml",
 *        "collection_ids": [
 *          6,
 *          1,
 *          2,
 *          3,
 *          4,
 *          5,
 *          8
 *        ],
 *        "delivery_price_kind": null,
 *        "description_type": 1,
 *        "local_delivery_cost": null,
 *        "sales_notes": null,
 *        "utm_label": null,
 *        "vendor_id": 4,
 *        "page_encoding": "windows-1251",
 *        "shop_company": "eBay",
 *        "shop_name": "eBay",
 *        "adult": false,
 *        "delivery": false,
 *        "delivery_new_style": false,
 *        "pickup": false,
 *        "store": false,
 *        "use_sku_as_vendor_code": false,
 *        "use_stock_currency": false,
 *        "use_variants": false
 *      }
 *
 *      insales.editMarketplace({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        marketplaceid: '105',
 *        marketplace: {
 *          "marketplace": {
 *            "name": "New GM",
 *            "description_type": 2,
 *            "adult": 0
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
 *        "id": 105,
 *        "name": "New GM",
 *        "type": "Marketplace::GoogleMerchant",
 *        "created_at": "2026-10-21T23:32:42.876+03:00",
 *        "updated_at": "2026-10-21T23:32:42.961+03:00",
 *        "url": "https://quentin.insales.io:3003/marketplace/105.xml",
 *        "collection_ids": [],
 *        "description_type": 2,
 *        "local_delivery_cost": null,
 *        "utm_label": null,
 *        "adult": false,
 *        "delivery_new_style": false,
 *        "use_stock_currency": false,
 *        "use_variants": false
 *      }
 *
 *      insales.editMarketplace({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        marketplaceid: '137',
 *        marketplace: {
 *          "marketplace": {
 *            "name": "New LYM"
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
 *        "id": 137,
 *        "name": "New LYM",
 *        "type": "Marketplace::LiquidYandexMarket",
 *        "created_at": "2026-10-21T23:32:43.800+03:00",
 *        "updated_at": "2026-10-21T23:32:43.937+03:00",
 *        "url": "https://quentin.insales.io:3003/marketplace/137.xml",
 *        "collection_ids": [],
 *        "local_delivery_cost": null,
 *        "vendor_id": null,
 *        "offer_liquid": "<offer>...</offer>",
 *        "page_encoding": "utf-8",
 *        "shop_company": "eBay",
 *        "shop_name": "eBay",
 *        "delivery_new_style": false,
 *        "use_stock_currency": false,
 *        "use_variants": false
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.marketplaceid Required, marketplace id
 * @param {object} options.marketplace Required, marketplace
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editMarketplace(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `marketplaces/${options.marketplaceid}`,
    obj: options.marketplace
  });
}
