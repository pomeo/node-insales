import { get } from '../methods/get';
import { post } from '../methods/post';
import { put } from '../methods/put';

/**
 * GET /admin/stock_currencies/{stock_currency_id}.json
 *
 * Examples:
 *
 *      insales.getStockCurrency({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        currencyid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "is_default": true,
 *        "exchange_rate_use_cb": false,
 *        "exchange_rate_manual": "30.0",
 *        "exchange_rate_percent": "0.0",
 *        "exchange_rate_round": true,
 *        "code": "LVL",
 *        "title": "Латвийский лат",
 *        "cb_rate": "30.0",
 *        "unit": "Ls",
 *        "exchange_rate": "30.0"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.currencyid Required, stock currency id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getStockCurrency(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `stock_currencies/${options.currencyid}`
  });
}

/**
 * GET /admin/stock_currencies.json
 *
 * Examples:
 *
 *      insales.listStockCurrency({
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
 *          "is_default": true,
 *          "exchange_rate_use_cb": false,
 *          "exchange_rate_manual": "30.0",
 *          "exchange_rate_percent": "0.0",
 *          "exchange_rate_round": true,
 *          "code": "LVL",
 *          "title": "Латвийский лат",
 *          "cb_rate": "30.0",
 *          "unit": "Ls",
 *          "exchange_rate": "30.0"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listStockCurrency(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `stock_currencies`
  });
}

/**
 * POST /admin/stock_currencies.json
 *
 * Examples:
 *
 *      insales.createStockCurrency({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        stockcurrency: {
 *          "stock_currency": {
 *            "code": "KZT",
 *            "exchange_rate_percent": 10
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
 *        "id": 93,
 *        "is_default": false,
 *        "exchange_rate_use_cb": true,
 *        "exchange_rate_manual": null,
 *        "exchange_rate_percent": "10.0",
 *        "exchange_rate_round": true,
 *        "code": "KZT",
 *        "title": "Казахский тенге",
 *        "cb_rate": "0.21",
 *        "unit": "тг.",
 *        "exchange_rate": "0.231"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.stockcurrency Required, stock currency
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createStockCurrency(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `stock_currencies`,
    obj: options.stockcurrency
  });
}

/**
 * PUT /admin/stock_currencies/{stock_currency_id}.json
 *
 * Examples:
 *
 *      insales.editStockCurrency({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        currencyid: '1',
 *        stockcurrency: {
 *          "stock_currency": {
 *            "code": "UAH",
 *            "is_default": true,
 *            "exchange_rate_use_cb": false,
 *            "exchange_rate_manual": 40,
 *            "exchange_rate_percent": 0
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
 *        "is_default": true,
 *        "exchange_rate_use_cb": false,
 *        "exchange_rate_manual": "40.0",
 *        "exchange_rate_percent": "0.0",
 *        "exchange_rate_round": true,
 *        "code": "UAH",
 *        "title": "Украинская гривна",
 *        "cb_rate": "5.0",
 *        "unit": "грн.",
 *        "exchange_rate": "40.0"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.currencyid Required, stock currency id
 * @param {object} options.stockcurrency Required, stock currency
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editStockCurrency(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `stock_currencies/${options.currencyid}`,
    obj: options.stockcurrency
  });
}
