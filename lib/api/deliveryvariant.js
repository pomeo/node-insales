import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/delivery_variants/{delivery_variant_id}.json
 *
 * Examples:
 *
 *      insales.getDeliveryVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        deliveryvariantid: '2'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 2,
 *        "position": 2,
 *        "updated_at": "2009-03-31T12:20:34.000+04:00",
 *        "created_at": "2009-03-30T04:37:32.000+04:00",
 *        "charge_up_to": null,
 *        "inverted": false,
 *        "show_zip_code": false,
 *        "title": "курьер",
 *        "description": "",
 *        "type": "DeliveryVariant::PriceDepend",
 *        "min_order_sum": null,
 *        "show_calendar_in_checkout": null,
 *        "delivery_date_required": null,
 *        "forbid_weekends": null,
 *        "utc_from_address": null,
 *        "estimated_delivery_period": null,
 *        "order_time_is_later": null,
 *        "forbidden_days": null,
 *        "show_time_intervals_in_checkout": null,
 *        "time_intervals_required": null,
 *        "min_price": 200,
 *        "payment_delivery_variants": [
 *          {
 *            "id": 2,
 *            "payment_gateway_id": 1,
 *            "created_at": "2026-10-19T22:28:42.000+03:00"
 *          }
 *        ],
 *        "delivery_locations": [],
 *        "delivery_time_intervals": [],
 *        "rules": [
 *          {
 *            "id": 1,
 *            "order_price": 2000,
 *            "price": 600,
 *            "order_weight": 10
 *          },
 *          {
 *            "id": 2,
 *            "order_price": 2000,
 *            "price": 700,
 *            "order_weight": 20
 *          },
 *          {
 *            "id": 3,
 *            "order_price": 2000,
 *            "price": 800,
 *            "order_weight": null
 *          },
 *          {
 *            "id": 4,
 *            "order_price": 10000,
 *            "price": 300,
 *            "order_weight": 10
 *          },
 *          {
 *            "id": 5,
 *            "order_price": 10000,
 *            "price": 400,
 *            "order_weight": 20
 *          },
 *          {
 *            "id": 6,
 *            "order_price": 10000,
 *            "price": 500,
 *            "order_weight": null
 *          },
 *          {
 *            "id": 7,
 *            "order_price": null,
 *            "price": 0,
 *            "order_weight": 10
 *          },
 *          {
 *            "id": 8,
 *            "order_price": null,
 *            "price": 100,
 *            "order_weight": 20
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.deliveryvariantid Required, delivery variant id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getDeliveryVariant(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `delivery_variants/${options.deliveryvariantid}`
  });
}

/**
 * GET /admin/delivery_variants.json
 *
 * Examples:
 *
 *      insales.listDeliveryVariant({
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
 *          "updated_at": "2009-03-31T12:20:34.000+04:00",
 *          "created_at": "2009-03-30T04:37:32.000+04:00",
 *          "charge_up_to": null,
 *          "inverted": false,
 *          "show_zip_code": false,
 *          "title": "самовывоз",
 *          "description": "самовывоз из офиса",
 *          "type": "DeliveryVariant::Fixed",
 *          "min_order_sum": null,
 *          "show_calendar_in_checkout": null,
 *          "delivery_date_required": null,
 *          "forbid_weekends": null,
 *          "utc_from_address": null,
 *          "estimated_delivery_period": null,
 *          "order_time_is_later": null,
 *          "forbidden_days": null,
 *          "show_time_intervals_in_checkout": null,
 *          "time_intervals_required": null,
 *          "price": 100,
 *          "javascript": null,
 *          "payment_delivery_variants": [
 *            {
 *              "id": 1,
 *              "payment_gateway_id": 1,
 *              "created_at": "2026-10-19T22:28:42.000+03:00"
 *            }
 *          ],
 *          "delivery_locations": [],
 *          "delivery_time_intervals": []
 *        },
 *        {
 *          "id": 2,
 *          "position": 2,
 *          "updated_at": "2009-03-31T12:20:34.000+04:00",
 *          "created_at": "2009-03-30T04:37:32.000+04:00",
 *          "charge_up_to": null,
 *          "inverted": false,
 *          "show_zip_code": false,
 *          "title": "курьер",
 *          "description": "",
 *          "type": "DeliveryVariant::PriceDepend",
 *          "min_order_sum": null,
 *          "show_calendar_in_checkout": null,
 *          "delivery_date_required": null,
 *          "forbid_weekends": null,
 *          "utc_from_address": null,
 *          "estimated_delivery_period": null,
 *          "order_time_is_later": null,
 *          "forbidden_days": null,
 *          "show_time_intervals_in_checkout": null,
 *          "time_intervals_required": null,
 *          "min_price": 200,
 *          "payment_delivery_variants": [
 *            {
 *              "id": 2,
 *              "payment_gateway_id": 1,
 *              "created_at": "2026-10-19T22:28:42.000+03:00"
 *            }
 *          ],
 *          "delivery_locations": [],
 *          "delivery_time_intervals": [],
 *          "rules": [
 *            {
 *              "id": 1,
 *              "order_price": 2000,
 *              "price": 600,
 *              "order_weight": 10
 *            },
 *            {
 *              "id": 2,
 *              "order_price": 2000,
 *              "price": 700,
 *              "order_weight": 20
 *            },
 *            {
 *              "id": 3,
 *              "order_price": 2000,
 *              "price": 800,
 *              "order_weight": null
 *            },
 *            {
 *              "id": 4,
 *              "order_price": 10000,
 *              "price": 300,
 *              "order_weight": 10
 *            },
 *            {
 *              "id": 5,
 *              "order_price": 10000,
 *              "price": 400,
 *              "order_weight": 20
 *            },
 *            {
 *              "id": 6,
 *              "order_price": 10000,
 *              "price": 500,
 *              "order_weight": null
 *            },
 *            {
 *              "id": 7,
 *              "order_price": null,
 *              "price": 0,
 *              "order_weight": 10
 *            },
 *            {
 *              "id": 8,
 *              "order_price": null,
 *              "price": 100,
 *              "order_weight": 20
 *            }
 *          ]
 *        },
 *        {
 *          "id": 3,
 *          "position": 3,
 *          "updated_at": "2009-03-31T12:20:34.000+04:00",
 *          "created_at": "2009-03-30T04:37:32.000+04:00",
 *          "charge_up_to": null,
 *          "inverted": false,
 *          "show_zip_code": false,
 *          "title": "Внешний",
 *          "description": "Внешний способ",
 *          "type": "DeliveryVariant::External",
 *          "min_order_sum": null,
 *          "show_calendar_in_checkout": null,
 *          "delivery_date_required": null,
 *          "forbid_weekends": null,
 *          "utc_from_address": null,
 *          "estimated_delivery_period": null,
 *          "order_time_is_later": null,
 *          "forbidden_days": null,
 *          "show_time_intervals_in_checkout": null,
 *          "time_intervals_required": null,
 *          "url": "url",
 *          "javascript": null,
 *          "customer_pickup": false,
 *          "payment_delivery_variants": [],
 *          "delivery_locations": [],
 *          "delivery_time_intervals": []
 *        },
 *        {
 *          "id": 4,
 *          "position": 4,
 *          "updated_at": "2009-03-31T12:20:34.000+04:00",
 *          "created_at": "2009-03-30T04:37:32.000+04:00",
 *          "charge_up_to": null,
 *          "inverted": false,
 *          "show_zip_code": false,
 *          "title": "Внешний",
 *          "description": "Внешний способ",
 *          "type": "DeliveryVariant::MapZoneDelivery",
 *          "min_order_sum": null,
 *          "show_calendar_in_checkout": null,
 *          "delivery_date_required": null,
 *          "forbid_weekends": null,
 *          "utc_from_address": null,
 *          "estimated_delivery_period": null,
 *          "order_time_is_later": null,
 *          "forbidden_days": null,
 *          "show_time_intervals_in_checkout": null,
 *          "time_intervals_required": null,
 *          "payment_delivery_variants": [],
 *          "delivery_locations": [],
 *          "delivery_time_intervals": []
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listDeliveryVariant(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `delivery_variants`
  });
}

/**
 * POST /admin/delivery_variants.json
 *
 * Examples:
 *
 *      insales.createDeliveryVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        deliveryvariant: {
 *          "delivery_variant": {
 *            "title": "express delivery",
 *            "type": "DeliveryVariant::Fixed",
 *            "description": "text",
 *            "position": 1,
 *            "add_payment_gateways": true,
 *            "delivery_locations_attributes": [
 *              {
 *                "region": "A",
 *                "city": "B"
 *              }
 *            ],
 *            "inverted": false,
 *            "charge_up_to": 1000,
 *            "price": 300,
 *            "show_calendar_in_checkout": true,
 *            "delivery_date_required": true,
 *            "forbid_weekends": true,
 *            "estimated_delivery_period": 2,
 *            "order_time_is_later": "18:00",
 *            "forbidden_days": "23.02,08.03,01.05",
 *            "show_time_intervals_in_checkout": true,
 *            "time_intervals_required": true,
 *            "time_intervals": "10-12,12-16,16-20"
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
 *        "id": 113,
 *        "position": 1,
 *        "updated_at": "2026-10-21T23:30:51.000+03:00",
 *        "created_at": "2026-10-21T23:30:51.000+03:00",
 *        "charge_up_to": "1000.0",
 *        "inverted": false,
 *        "show_zip_code": false,
 *        "title": "express delivery",
 *        "description": "text",
 *        "type": "DeliveryVariant::Fixed",
 *        "min_order_sum": null,
 *        "show_calendar_in_checkout": true,
 *        "delivery_date_required": true,
 *        "forbid_weekends": true,
 *        "utc_from_address": null,
 *        "estimated_delivery_period": 2,
 *        "order_time_is_later": "18:00",
 *        "forbidden_days": "23.02,08.03,01.05",
 *        "show_time_intervals_in_checkout": true,
 *        "time_intervals_required": true,
 *        "price": "300.0",
 *        "javascript": null,
 *        "payment_delivery_variants": [
 *          {
 *            "id": 18,
 *            "payment_gateway_id": 1,
 *            "created_at": "2026-10-21T23:30:51.000+03:00"
 *          },
 *          {
 *            "id": 19,
 *            "payment_gateway_id": 3,
 *            "created_at": "2026-10-21T23:30:51.000+03:00"
 *          },
 *          {
 *            "id": 20,
 *            "payment_gateway_id": 4,
 *            "created_at": "2026-10-21T23:30:51.000+03:00"
 *          }
 *        ],
 *        "delivery_locations": [
 *          {
 *            "id": 9,
 *            "city": "B",
 *            "region": "A",
 *            "country": "RU"
 *          }
 *        ],
 *        "delivery_time_intervals": [
 *          {
 *            "time_from": "10:00",
 *            "time_to": "12:00",
 *            "monday": true,
 *            "tuesday": true,
 *            "wednesday": true,
 *            "thursday": true,
 *            "friday": true,
 *            "saturday": true,
 *            "sunday": true
 *          },
 *          {
 *            "time_from": "12:00",
 *            "time_to": "16:00",
 *            "monday": true,
 *            "tuesday": true,
 *            "wednesday": true,
 *            "thursday": true,
 *            "friday": true,
 *            "saturday": true,
 *            "sunday": true
 *          },
 *          {
 *            "time_from": "16:00",
 *            "time_to": "20:00",
 *            "monday": true,
 *            "tuesday": true,
 *            "wednesday": true,
 *            "thursday": true,
 *            "friday": true,
 *            "saturday": true,
 *            "sunday": true
 *          }
 *        ]
 *      }
 *
 *      insales.createDeliveryVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        deliveryvariant: {
 *          "delivery_variant": {
 *            "title": "express delivery",
 *            "type": "DeliveryVariant::External",
 *            "description": "text",
 *            "position": 1,
 *            "add_payment_gateways": true,
 *            "delivery_locations_attributes": [
 *              {
 *                "region": "A",
 *                "city": "B"
 *              }
 *            ],
 *            "inverted": false,
 *            "charge_up_to": 1000,
 *            "javascript": "<script type='text/javascript' src='http://mydelivery.ru/delivery.js'></script>\n        <script type='text/javascript'>\n          $(function(){\n          alert('Choose a point of customer pickup');\n          });\n        </script>",
 *            "url": "http://google.ru"
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
 *        "id": 129,
 *        "position": 1,
 *        "updated_at": "2026-10-21T23:30:52.000+03:00",
 *        "created_at": "2026-10-21T23:30:52.000+03:00",
 *        "charge_up_to": "1000.0",
 *        "inverted": false,
 *        "show_zip_code": false,
 *        "title": "express delivery",
 *        "description": "text",
 *        "type": "DeliveryVariant::External",
 *        "min_order_sum": null,
 *        "show_calendar_in_checkout": null,
 *        "delivery_date_required": null,
 *        "forbid_weekends": null,
 *        "utc_from_address": null,
 *        "estimated_delivery_period": null,
 *        "order_time_is_later": null,
 *        "forbidden_days": null,
 *        "show_time_intervals_in_checkout": null,
 *        "time_intervals_required": null,
 *        "url": "http://google.ru",
 *        "javascript": "<script type='text/javascript' src='http://mydelivery.ru/delivery.js'></script>\n        <script type='text/javascript'>\n          $(function(){\n          alert('Choose a point of customer pickup');\n          });\n        </script>",
 *        "customer_pickup": false,
 *        "payment_delivery_variants": [
 *          {
 *            "id": 24,
 *            "payment_gateway_id": 1,
 *            "created_at": "2026-10-21T23:30:52.000+03:00"
 *          },
 *          {
 *            "id": 25,
 *            "payment_gateway_id": 3,
 *            "created_at": "2026-10-21T23:30:52.000+03:00"
 *          },
 *          {
 *            "id": 26,
 *            "payment_gateway_id": 4,
 *            "created_at": "2026-10-21T23:30:52.000+03:00"
 *          }
 *        ],
 *        "delivery_locations": [
 *          {
 *            "id": 25,
 *            "city": "B",
 *            "region": "A",
 *            "country": "RU"
 *          }
 *        ],
 *        "delivery_time_intervals": []
 *      }
 *
 *      insales.createDeliveryVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        deliveryvariant: {
 *          "delivery_variant": {
 *            "title": "express delivery",
 *            "type": "DeliveryVariant::LocationDepend",
 *            "description": "text",
 *            "position": 1,
 *            "add_payment_gateways": true,
 *            "delivery_locations_attributes": [
 *              {
 *                "region": "A",
 *                "city": "B"
 *              }
 *            ],
 *            "inverted": true,
 *            "charge_up_to": 1000,
 *            "delivery_zones_attributes": [
 *              {
 *                "title": "test",
 *                "tariffs_attributes": [
 *                  {
 *                    "max_weight": 30,
 *                    "price": 100,
 *                    "step": 2,
 *                    "step_price": 50
 *                  }
 *                ],
 *                "locations_attributes": [
 *                  {
 *                    "country": "A",
 *                    "region": "C",
 *                    "city": "D"
 *                  }
 *                ]
 *              }
 *            ]
 *          },
 *          "delivery_variant[delivery_zones_attributes]": {
 *            "title": "express delivery"
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
 *        "id": 145,
 *        "position": 1,
 *        "updated_at": "2026-10-21T23:30:53.000+03:00",
 *        "created_at": "2026-10-21T23:30:53.000+03:00",
 *        "charge_up_to": "1000.0",
 *        "inverted": true,
 *        "show_zip_code": false,
 *        "title": "express delivery",
 *        "description": "text",
 *        "type": "DeliveryVariant::LocationDepend",
 *        "min_order_sum": null,
 *        "show_calendar_in_checkout": null,
 *        "delivery_date_required": null,
 *        "forbid_weekends": null,
 *        "utc_from_address": null,
 *        "estimated_delivery_period": null,
 *        "order_time_is_later": null,
 *        "forbidden_days": null,
 *        "show_time_intervals_in_checkout": null,
 *        "time_intervals_required": null,
 *        "payment_delivery_variants": [
 *          {
 *            "id": 30,
 *            "payment_gateway_id": 1,
 *            "created_at": "2026-10-21T23:30:53.000+03:00"
 *          },
 *          {
 *            "id": 31,
 *            "payment_gateway_id": 3,
 *            "created_at": "2026-10-21T23:30:53.000+03:00"
 *          },
 *          {
 *            "id": 32,
 *            "payment_gateway_id": 4,
 *            "created_at": "2026-10-21T23:30:53.000+03:00"
 *          }
 *        ],
 *        "delivery_locations": [
 *          {
 *            "id": 49,
 *            "city": "B",
 *            "region": "A",
 *            "country": "RU"
 *          }
 *        ],
 *        "delivery_time_intervals": [],
 *        "delivery_zones": [
 *          {
 *            "id": 9,
 *            "title": "test",
 *            "tariffs": [
 *              {
 *                "id": 9,
 *                "max_weight": "30.0",
 *                "price": "100.0",
 *                "step": "2.0",
 *                "step_price": "50.0"
 *              }
 *            ],
 *            "locations": [
 *              {
 *                "id": 57,
 *                "country": "A",
 *                "region": "C",
 *                "city": "D"
 *              }
 *            ]
 *          }
 *        ]
 *      }
 *
 *      insales.createDeliveryVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        deliveryvariant: {
 *          "delivery_variant": {
 *            "title": "express delivery",
 *            "type": "DeliveryVariant::PriceDepend",
 *            "description": "text",
 *            "position": 1,
 *            "add_payment_gateways": true,
 *            "delivery_locations_attributes": [
 *              {
 *                "region": "A",
 *                "city": "B"
 *              }
 *            ],
 *            "inverted": false,
 *            "charge_up_to": 1000,
 *            "min_price": 300,
 *            "rules_attributes": [
 *              {
 *                "price": 300,
 *                "order_price": 10,
 *                "order_weight": 1
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
 *        "id": 161,
 *        "position": 1,
 *        "updated_at": "2026-10-21T23:30:53.000+03:00",
 *        "created_at": "2026-10-21T23:30:53.000+03:00",
 *        "charge_up_to": "1000.0",
 *        "inverted": false,
 *        "show_zip_code": false,
 *        "title": "express delivery",
 *        "description": "text",
 *        "type": "DeliveryVariant::PriceDepend",
 *        "min_order_sum": null,
 *        "show_calendar_in_checkout": null,
 *        "delivery_date_required": null,
 *        "forbid_weekends": null,
 *        "utc_from_address": null,
 *        "estimated_delivery_period": null,
 *        "order_time_is_later": null,
 *        "forbidden_days": null,
 *        "show_time_intervals_in_checkout": null,
 *        "time_intervals_required": null,
 *        "min_price": "300.0",
 *        "payment_delivery_variants": [
 *          {
 *            "id": 36,
 *            "payment_gateway_id": 1,
 *            "created_at": "2026-10-21T23:30:53.000+03:00"
 *          },
 *          {
 *            "id": 37,
 *            "payment_gateway_id": 3,
 *            "created_at": "2026-10-21T23:30:53.000+03:00"
 *          },
 *          {
 *            "id": 38,
 *            "payment_gateway_id": 4,
 *            "created_at": "2026-10-21T23:30:53.000+03:00"
 *          }
 *        ],
 *        "delivery_locations": [
 *          {
 *            "id": 73,
 *            "city": "B",
 *            "region": "A",
 *            "country": "RU"
 *          }
 *        ],
 *        "delivery_time_intervals": [],
 *        "rules": [
 *          {
 *            "id": 24,
 *            "order_price": "10.0",
 *            "price": "300.0",
 *            "order_weight": "1.0"
 *          }
 *        ]
 *      }
 *
 *      insales.createDeliveryVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        deliveryvariant: {
 *          "delivery_variant": {
 *            "title": "express delivery",
 *            "type": "DeliveryVariant::PickUp",
 *            "description": "text",
 *            "position": 1,
 *            "add_payment_gateways": true,
 *            "delivery_locations_attributes": [
 *              {
 *                "region": "A",
 *                "city": "B"
 *              }
 *            ],
 *            "inverted": false,
 *            "charge_up_to": 1000,
 *            "show_calendar_in_checkout": true,
 *            "delivery_date_required": true,
 *            "forbid_weekends": true,
 *            "estimated_delivery_period": 2,
 *            "order_time_is_later": "18:00",
 *            "forbidden_days": "23.02,08.03,01.05",
 *            "show_time_intervals_in_checkout": true,
 *            "time_intervals_required": true,
 *            "time_intervals": "10-12,12-16,16-20",
 *            "pick_up_sources_attributes": [
 *              {
 *                "title": "My company",
 *                "pick_up_source_http_method": "POST",
 *                "url": "https://example.com/get_points",
 *                "point_info_url": "https://example.com/get_point_info"
 *              }
 *            ]
 *          },
 *          "delivery_variant[pick_up_sources_attributes]": {
 *            "title": "express delivery",
 *            "http_method": "post"
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
 *        "id": 177,
 *        "position": 1,
 *        "updated_at": "2026-10-21T23:30:54.000+03:00",
 *        "created_at": "2026-10-21T23:30:54.000+03:00",
 *        "charge_up_to": "1000.0",
 *        "inverted": false,
 *        "show_zip_code": false,
 *        "title": "express delivery",
 *        "description": "text",
 *        "type": "DeliveryVariant::PickUp",
 *        "min_order_sum": null,
 *        "show_calendar_in_checkout": true,
 *        "delivery_date_required": true,
 *        "forbid_weekends": true,
 *        "utc_from_address": null,
 *        "estimated_delivery_period": 2,
 *        "order_time_is_later": "18:00",
 *        "forbidden_days": "23.02,08.03,01.05",
 *        "show_time_intervals_in_checkout": true,
 *        "time_intervals_required": true,
 *        "payment_delivery_variants": [
 *          {
 *            "id": 44,
 *            "payment_gateway_id": 1,
 *            "created_at": "2026-10-21T23:30:54.000+03:00"
 *          },
 *          {
 *            "id": 45,
 *            "payment_gateway_id": 3,
 *            "created_at": "2026-10-21T23:30:54.000+03:00"
 *          },
 *          {
 *            "id": 46,
 *            "payment_gateway_id": 4,
 *            "created_at": "2026-10-21T23:30:54.000+03:00"
 *          },
 *          {
 *            "id": 47,
 *            "payment_gateway_id": 42,
 *            "created_at": "2026-10-21T23:30:54.000+03:00"
 *          }
 *        ],
 *        "delivery_locations": [
 *          {
 *            "id": 89,
 *            "city": "B",
 *            "region": "A",
 *            "country": "RU"
 *          }
 *        ],
 *        "delivery_time_intervals": [
 *          {
 *            "time_from": "10:00",
 *            "time_to": "12:00",
 *            "monday": true,
 *            "tuesday": true,
 *            "wednesday": true,
 *            "thursday": true,
 *            "friday": true,
 *            "saturday": true,
 *            "sunday": true
 *          },
 *          {
 *            "time_from": "12:00",
 *            "time_to": "16:00",
 *            "monday": true,
 *            "tuesday": true,
 *            "wednesday": true,
 *            "thursday": true,
 *            "friday": true,
 *            "saturday": true,
 *            "sunday": true
 *          },
 *          {
 *            "time_from": "16:00",
 *            "time_to": "20:00",
 *            "monday": true,
 *            "tuesday": true,
 *            "wednesday": true,
 *            "thursday": true,
 *            "friday": true,
 *            "saturday": true,
 *            "sunday": true
 *          }
 *        ],
 *        "pick_up_sources": [
 *          {
 *            "id": 2,
 *            "url": "https://example.com/get_points",
 *            "point_info_url": "https://example.com/get_point_info",
 *            "method": "POST",
 *            "created_at": "2026-10-21T23:30:54.721+03:00"
 *          }
 *        ],
 *        "pick_up_source_delivery_variants": [
 *          {
 *            "id": 2,
 *            "pick_up_source_id": 2,
 *            "created_at": "2026-10-21T23:30:54.725+03:00"
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.deliveryvariant Required, delivery variant
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createDeliveryVariant(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `delivery_variants`,
    obj: options.deliveryvariant
  });
}

/**
 * DELETE /admin/delivery_variants/{delivery_variant_id}.json
 *
 * Examples:
 *
 *      insales.removeDeliveryVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        deliveryvariantid: '2'
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
 * @param {number|string} options.deliveryvariantid Required, delivery variant id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeDeliveryVariant(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `delivery_variants/${options.deliveryvariantid}`
  });
}

/**
 * PUT /admin/delivery_variants/{delivery_variant_id}.json
 *
 * Examples:
 *
 *      insales.editDeliveryVariant({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        deliveryvariantid: '2',
 *        deliveryvariant: {
 *          "delivery_variant": {
 *            "title": "new title",
 *            "description": "new description",
 *            "position": 1,
 *            "charge_up_to": 2500,
 *            "payment_delivery_variants_attributes": [
 *              {
 *                "_destroy": 1,
 *                "id": 2
 *              },
 *              {
 *                "payment_gateway_id": 3
 *              }
 *            ],
 *            "pick_up_sources_attributes": [
 *              {
 *                "title": "My company",
 *                "pick_up_source_http_method": "POST",
 *                "url": "https://example.com/get_points",
 *                "point_info_url": "https://example.com/get_point_info"
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
 *        "id": 2,
 *        "position": 1,
 *        "updated_at": "2026-10-21T23:30:55.000+03:00",
 *        "created_at": "2009-03-30T04:37:32.000+04:00",
 *        "charge_up_to": "2500.0",
 *        "inverted": false,
 *        "show_zip_code": false,
 *        "title": "new title",
 *        "description": "new description",
 *        "type": "DeliveryVariant::PriceDepend",
 *        "min_order_sum": null,
 *        "show_calendar_in_checkout": null,
 *        "delivery_date_required": null,
 *        "forbid_weekends": null,
 *        "utc_from_address": null,
 *        "estimated_delivery_period": null,
 *        "order_time_is_later": null,
 *        "forbidden_days": null,
 *        "show_time_intervals_in_checkout": null,
 *        "time_intervals_required": null,
 *        "min_price": 200,
 *        "payment_delivery_variants": [
 *          {
 *            "id": 54,
 *            "payment_gateway_id": 3,
 *            "created_at": "2026-10-21T23:30:55.000+03:00"
 *          }
 *        ],
 *        "delivery_locations": [],
 *        "delivery_time_intervals": [],
 *        "rules": [
 *          {
 *            "id": 1,
 *            "order_price": 2000,
 *            "price": 600,
 *            "order_weight": 10
 *          },
 *          {
 *            "id": 2,
 *            "order_price": 2000,
 *            "price": 700,
 *            "order_weight": 20
 *          },
 *          {
 *            "id": 3,
 *            "order_price": 2000,
 *            "price": 800,
 *            "order_weight": null
 *          },
 *          {
 *            "id": 4,
 *            "order_price": 10000,
 *            "price": 300,
 *            "order_weight": 10
 *          },
 *          {
 *            "id": 5,
 *            "order_price": 10000,
 *            "price": 400,
 *            "order_weight": 20
 *          },
 *          {
 *            "id": 6,
 *            "order_price": 10000,
 *            "price": 500,
 *            "order_weight": null
 *          },
 *          {
 *            "id": 7,
 *            "order_price": null,
 *            "price": 0,
 *            "order_weight": 10
 *          },
 *          {
 *            "id": 8,
 *            "order_price": null,
 *            "price": 100,
 *            "order_weight": 20
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.deliveryvariantid Required, delivery variant id
 * @param {object} options.deliveryvariant Required, delivery variant
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editDeliveryVariant(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `delivery_variants/${options.deliveryvariantid}`,
    obj: options.deliveryvariant
  });
}
