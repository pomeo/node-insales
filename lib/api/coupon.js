import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/discount_codes/{id}.xml
 *
 * Examples:
 *
 *      insales.getCoupon({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        couponid: '1076619'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'discount-code':
 *         { 'act-once': 'false',
 *           'act-once-for-client': 'false',
 *           code: 'WWWWWW',
 *           'created-at': '2011-11-11T11:11:11+03:00',
 *           description: '',
 *           disabled: 'false',
 *           discount: '10.0',
 *           'expired-at': '2011-11-11',
 *           id: '1111111',
 *           'min-price': '0.0',
 *           'type-id': '1',
 *           'updated-at': '2011-11-11T11:11:11+03:00',
 *           worked: 'true',
 *           'discount-collections': '' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.id Required, coupon id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getCoupon(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `discount_codes/${options.couponid}`
    }).then(resolve)
      .catch(reject);
  });
}

/**
 * GET /admin/discount_codes.xml
 *
 * Examples:
 *
 *      insales.listCoupon({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'discount-codes':
 *         { 'discount-code':
 *            [{ 'act-once': 'false',
 *              'act-once-for-client': 'false',
 *              code: 'WWWWWW',
 *              'created-at': '2011-11-11T11:11:11+03:00',
 *              description: '',
 *              disabled: 'false',
 *              discount: '10.0',
 *              'expired-at': '2011-11-11',
 *              id: '1111111',
 *              'min-price': '0.0',
 *              'type-id': '1',
 *              'updated-at': '2011-11-11T11:11:11+03:00',
 *              worked: 'true',
 *              'discount-collections': '' },
 *            { 'act-once': 'false',
 *              'act-once-for-client': 'false',
 *              code: 'WWWWWY',
 *              'created-at': '2011-11-11T11:11:11+03:00',
 *              description: '',
 *              disabled: 'false',
 *              discount: '10.0',
 *              'expired-at': '2011-11-11',
 *              id: '1111112',
 *              'min-price': '0.0',
 *              'type-id': '1',
 *              'updated-at': '2011-11-11T11:11:11+03:00',
 *              worked: 'true',
 *              'discount-collections': '' }]}}
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} [options.page=1] Page
 * @param {number|string} [options.per_page=250] Coupons per page
 * @param {string} [options.updated_since] Coupons updated since. Format YYYY-MM-DD
 * @param {boolean} [options.deleted] Deleted coupons
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listCoupon(options, id) {
  const query = {};
  query.page = options.page ? options.page : 1;
  query.per_page = options.per_page ? options.per_page : 250;
  if ((options.updated_since) && (options.updated_since !== false)) {
    options.updated_since = options.updated_since;
  }
  if (options.deleted === true) {
    query.deleted = true;
  }

  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `discount_codes`,
      query
    }).then(resolve)
      .catch(reject);
  });
}

export function createCoupon(options, id) {
  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: `discount_codes`,
      obj: options.coupon
    }).then(resolve)
      .catch(reject);
  });
}

export function removeCoupon(options, id) {
  return new Promise((resolve, reject) => {
    remove({
      id,
      token: options.token,
      url: options.url,
      api: `discount_codes/${options.couponid}`
    }).then(resolve)
      .catch(reject);
  });
}

export function editCoupon(options, id) {
  return new Promise((resolve, reject) => {
    put({
      id,
      token: options.token,
      url: options.url,
      api: `discount_codes/${options.couponid}`,
      obj: options.coupon
    }).then(resolve)
      .catch(reject);
  });
}
