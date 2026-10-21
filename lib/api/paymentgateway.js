import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/payment_gateways/{payment_gateway_id_1}.json
 *
 * Examples:
 *
 *      insales.getPaymentGateway({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        gatewayid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "type": "PaymentGateway::Cod",
 *        "position": 1,
 *        "created_at": "2009-03-30T04:37:32.000+04:00",
 *        "updated_at": "2009-03-31T12:20:34.000+04:00",
 *        "margin": "0.0",
 *        "available_for_individual_clients": true,
 *        "available_for_juridical_clients": true,
 *        "title": "Наличными курьеру",
 *        "description": "",
 *        "payment_delivery_variants": [
 *          {
 *            "created_at": "2026-10-19T22:28:42.000+03:00",
 *            "delivery_variant_id": 1,
 *            "id": 1
 *          },
 *          {
 *            "created_at": "2026-10-19T22:28:42.000+03:00",
 *            "delivery_variant_id": 2,
 *            "id": 2
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.gatewayid Required, payment gateway id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getPaymentGateway(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `payment_gateways/${options.gatewayid}`
  });
}

/**
 * GET /admin/payment_gateways.json
 *
 * Examples:
 *
 *      insales.listPaymentGateway({
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
 *          "type": "PaymentGateway::Cod",
 *          "position": 1,
 *          "created_at": "2009-03-30T04:37:32.000+04:00",
 *          "updated_at": "2009-03-31T12:20:34.000+04:00",
 *          "margin": "0.0",
 *          "available_for_individual_clients": true,
 *          "available_for_juridical_clients": true,
 *          "title": "Наличными курьеру",
 *          "description": "",
 *          "payment_delivery_variants": [
 *            {
 *              "created_at": "2026-10-19T22:28:42.000+03:00",
 *              "delivery_variant_id": 1,
 *              "id": 1
 *            },
 *            {
 *              "created_at": "2026-10-19T22:28:42.000+03:00",
 *              "delivery_variant_id": 2,
 *              "id": 2
 *            }
 *          ]
 *        },
 *        {
 *          "id": 3,
 *          "type": "PaymentGateway::JuridicalPersonBill",
 *          "position": 2,
 *          "created_at": "2009-03-17T10:55:14.000+03:00",
 *          "updated_at": "2009-03-17T10:55:15.000+03:00",
 *          "margin": "20.0",
 *          "available_for_individual_clients": true,
 *          "available_for_juridical_clients": true,
 *          "title": "Выставление счета для юр. лиц.",
 *          "description": "",
 *          "redirect_to_payment": true,
 *          "payment_delivery_variants": []
 *        },
 *        {
 *          "id": 4,
 *          "type": "PaymentGateway::JuridicalPersonBill",
 *          "position": 3,
 *          "created_at": "2009-03-17T10:55:14.000+03:00",
 *          "updated_at": "2009-03-17T10:55:15.000+03:00",
 *          "margin": "0.0",
 *          "available_for_individual_clients": true,
 *          "available_for_juridical_clients": true,
 *          "title": "Выставление счета для юр. лиц 2.",
 *          "description": "",
 *          "redirect_to_payment": true,
 *          "payment_delivery_variants": []
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listPaymentGateway(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `payment_gateways`
  });
}

/**
 * POST /admin/payment_gateways.json
 *
 * Examples:
 *
 *      insales.createPaymentGateway({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        paymentgateway: {
 *          "payment_gateway": {
 *            "title": "cash on delivery",
 *            "margin": 10,
 *            "type": "PaymentGateway::Cod",
 *            "description": "text",
 *            "payment_delivery_variants_attributes": [
 *              {
 *                "delivery_variant_id": 1
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
 *        "id": 47,
 *        "type": "PaymentGateway::Cod",
 *        "position": 4,
 *        "created_at": "2026-10-21T23:30:57.000+03:00",
 *        "updated_at": "2026-10-21T23:30:57.000+03:00",
 *        "margin": "10.0",
 *        "available_for_individual_clients": true,
 *        "available_for_juridical_clients": true,
 *        "title": "cash on delivery",
 *        "description": "text",
 *        "payment_delivery_variants": [
 *          {
 *            "created_at": "2026-10-21T23:30:57.000+03:00",
 *            "delivery_variant_id": 1,
 *            "id": 60
 *          }
 *        ]
 *      }
 *
 *      insales.createPaymentGateway({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        paymentgateway: {
 *          "payment_gateway": {
 *            "title": "external payment gateway",
 *            "margin": 10,
 *            "type": "PaymentGateway::External",
 *            "description": "text",
 *            "payment_delivery_variants_attributes": [
 *              {
 *                "delivery_variant_id": 1
 *              }
 *            ],
 *            "url": "payment-gateway.ru/transactions/create",
 *            "shop_id": "123",
 *            "redirect_to_payment": false,
 *            "convert_currency": "LVL"
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
 *        "id": 49,
 *        "type": "PaymentGateway::External",
 *        "position": 4,
 *        "created_at": "2026-10-21T23:30:57.000+03:00",
 *        "updated_at": "2026-10-21T23:30:57.000+03:00",
 *        "margin": "10.0",
 *        "available_for_individual_clients": true,
 *        "available_for_juridical_clients": true,
 *        "title": "external payment gateway",
 *        "description": "text",
 *        "password": "7e2cb9b2f6febf27",
 *        "url": "payment-gateway.ru/transactions/create",
 *        "shop_id": "123",
 *        "send_order": null,
 *        "convert_currency": "LVL",
 *        "widget_mode": null,
 *        "window_mode": null,
 *        "widget_html_code": null,
 *        "show_at_product": null,
 *        "show_at_collection": null,
 *        "show_at_cart": null,
 *        "design_version": null,
 *        "text_version": null,
 *        "rounding_version": null,
 *        "show_payment_fee": false,
 *        "info_page_id": null,
 *        "success_url": "http://quentin.insales.io:3003/payments/external/49/success",
 *        "fail_url": "http://quentin.insales.io:3003/payments/external/49/fail",
 *        "server_url": "http://quentin.insales.io:3003/payments/external/49/server",
 *        "redirect_to_payment": false,
 *        "payment_delivery_variants": [
 *          {
 *            "created_at": "2026-10-21T23:30:57.000+03:00",
 *            "delivery_variant_id": 1,
 *            "id": 62
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.paymentgateway Required, payment gateway
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createPaymentGateway(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `payment_gateways`,
    obj: options.paymentgateway
  });
}

/**
 * DELETE /admin/payment_gateways/{payment_gateway_id_1}.json
 *
 * Examples:
 *
 *      insales.removePaymentGateway({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        gatewayid: '1'
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
 * @param {number|string} options.gatewayid Required, payment gateway id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removePaymentGateway(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `payment_gateways/${options.gatewayid}`
  });
}

/**
 * PUT /admin/payment_gateways/{payment_gateway_id_1}.json
 *
 * Examples:
 *
 *      insales.editPaymentGateway({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        gatewayid: '1',
 *        paymentgateway: {
 *          "payment_gateway": {
 *            "title": "cash",
 *            "margin": 10,
 *            "description": "description",
 *            "payment_delivery_variants_attributes": [
 *              {
 *                "_destroy": 1,
 *                "id": 2
 *              },
 *              {
 *                "delivery_variant_id": 2
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
 *        "type": "PaymentGateway::Cod",
 *        "position": 1,
 *        "created_at": "2009-03-30T04:37:32.000+04:00",
 *        "updated_at": "2026-10-21T23:30:58.000+03:00",
 *        "margin": "10.0",
 *        "available_for_individual_clients": true,
 *        "available_for_juridical_clients": true,
 *        "title": "cash",
 *        "description": "description",
 *        "payment_delivery_variants": [
 *          {
 *            "created_at": "2026-10-19T22:28:42.000+03:00",
 *            "delivery_variant_id": 1,
 *            "id": 1
 *          },
 *          {
 *            "created_at": "2026-10-19T22:28:42.000+03:00",
 *            "delivery_variant_id": 2,
 *            "id": 2
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.gatewayid Required, payment gateway id
 * @param {object} options.paymentgateway Required, payment gateway
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editPaymentGateway(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `payment_gateways/${options.gatewayid}`,
    obj: options.paymentgateway
  });
}
