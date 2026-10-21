import { get } from '../methods/get';
import { post } from '../methods/post';
import { put } from '../methods/put';
import { patch } from '../methods/patch';
import { remove } from '../methods/remove';

/**
 * GET /admin/recurring_application_charge.xml
 *
 * Examples:
 *
 *      insales.getRecurring({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru'
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'recurring-application-charge':
 *        { blocked: 'false',
 *          'created-at': '2011-11-11T11:11:11+03:00',
 *          id: '12345',
 *          monthly: '1000.0',
 *          'paid-till': '2011-11-21',
 *          'trial-expired-at': '2011-12-11',
 *          'updated-at': '2011-11-11T11:11:11+03:00' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getRecurring(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `recurring_application_charge`
  });
}

/**
 * POST /admin/recurring_application_charge.xml
 *
 * Examples:
 *
 *      insales.createRecurring({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        price: 1000
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'recurring-application-charge':
 *        { blocked: 'false',
 *          'created-at': '2011-11-11T11:11:11+03:00',
 *          id: '12345',
 *          monthly: '1000.0',
 *          'paid-till': '2011-11-21',
 *          'trial-expired-at': '2011-12-11',
 *          'updated-at': '2011-11-11T11:11:11+03:00' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {string|number} options.price Required, price
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createRecurring(options, id) {
  const charge = {
    'recurring-application-charge': {
      monthly: options.price
    }
  };

  return post({
    id,
    token: options.token,
    url: options.url,
    api: 'recurring_application_charge',
    obj: charge
  });
}

/**
 * PUT /admin/recurring_application_charge.xml
 *
 * Examples:
 *
 *      insales.changeRecurring({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        price: 1010
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      200
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {string|number} options.price Required, price
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function changeRecurring(options, id) {
  const charge = {
    'recurring-application-charge': {
      monthly: options.price
    }
  };

  return put({
    id,
    token: options.token,
    url: options.url,
    api: `recurring_application_charge`,
    obj: charge
  });
}

/**
 * DELETE /admin/recurring_application_charge.xml
 *
 * Examples:
 *
 *      insales.changeRecurring({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru'
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      200
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeRecurring(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `recurring_application_charge`
  });
}

/**
 * PATCH /admin/recurring_application_charge/add_free_days.json
 *
 * Examples:
 *
 *      insales.addRecurringFreeDays({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        recurring: {
 *          "recurring_application_charge": {
 *            "days_count": 21
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
 *        "monthly": "400.0",
 *        "trial_expired_at": "2026-11-19",
 *        "created_at": "2026-10-21T23:32:54.469+03:00",
 *        "updated_at": "2026-10-21T23:32:54.681+03:00",
 *        "paid_till": "2026-11-19",
 *        "blocked": false
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.recurring Required, recurring application charge
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function addRecurringFreeDays(options, id) {
  return patch({
    id,
    token: options.token,
    url: options.url,
    api: `recurring_application_charge/add_free_days`,
    obj: options.recurring
  });
}
