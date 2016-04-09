import { get } from '../methods/get';
import { post } from '../methods/post';

/**
 * GET /admin/application_charges/{id}.xml
 *
 * Examples:
 *
 *      insales.getCharge({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        chargeid: '12345'
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'application-charge':
 *        { 'created-at': '2011-11-11T11:11:11+03:00',
 *          id: '1234',
 *          name: 'Купи слона',
 *          price: '180.0',
 *          'return-url': 'http://application.my/check_payment_url/%id_in_my_application',
 *          status: 'pending',
 *          test: '',
 *          'updated-at': '2011-11-11T11:11:11+03:00',
 *          'confirmation-url': 'http://shop-test.myinsales.ru/admin/invoices/123456' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.chargeid Required, charge id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getCharge(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `application_charges/${options.chargeid}`
    }).then(resolve)
      .catch(reject);
  });
}

/**
 * POST /admin/application_charges.xml
 *
 * Examples:
 *
 *      insales.createCharge({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        charge: {
 *           'application-charge': {
 *             'name': 'Купи слона',
 *             'price': '180.0',
 *             'return-url': 'http://application.my/check_payment_url/%id_in_my_application'
 *           }
 *        }
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'application-charge':
 *        { 'created-at': '2011-11-11T11:11:11+03:00',
 *          id: '1234',
 *          name: 'Купи слона',
 *          price: '180.0',
 *          'return-url': 'http://application.my/check_payment_url/%id_in_my_application',
 *          status: 'pending',
 *          test: '',
 *          'updated-at': '2011-11-11T11:11:11+03:00',
 *          'confirmation-url': 'http://shop-test.myinsales.ru/admin/invoices/123456' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.charge Required, charge info
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createCharge(options, id) {
  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: `application_charges`,
      obj: options.charge
    }).then(resolve)
      .catch(reject);
  });
}

/**
 * GET /admin/application_charges.xml
 *
 * Examples:
 *
 *      insales.listCharge({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru'
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'application-charges':
 *        { 'application-charge':
 *           { 'created-at': '2011-11-11T11:11:11+03:00',
 *             id: '1234',
 *             name: 'Купи слона',
 *             price: '180.0',
 *             'return-url': 'http://application.my/check_payment_url/%id_in_my_application',
 *             status: 'pending',
 *             test: '',
 *             'updated-at': '2011-11-11T11:11:11+03:00',
 *             'confirmation-url': 'http://shop-test.myinsales.ru/admin/invoices/123456' } } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listCharge(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: 'application_charges'
    }).then(resolve)
      .catch(reject);
  });
}

/**
 * POST /admin/application_charges/{id}/decline.xml
 *
 * Examples:
 *
 *      insales.declineCharge({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        chargeid: '12345'
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'application-charge':
 *        { 'created-at': '2011-11-11T11:11:11+03:00',
 *          id: '1234',
 *          name: 'Купи слона',
 *          price: '180.0',
 *          'return-url': 'http://application.my/check_payment_url/%id_in_my_application',
 *          status: 'declined',
 *          test: '',
 *          'updated-at': '2011-11-11T11:11:11+03:00',
 *          'confirmation-url': 'http://shop-test.myinsales.ru/admin/invoices/123456' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.chargeid Required, charge id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function declineCharge(options, id) {
  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: `application_charges/${options.chargeid}/decline`
    }).then(resolve)
      .catch(reject);
  });
}
