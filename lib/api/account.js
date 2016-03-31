import { get } from '../methods/get';

/**
 * GET /admin/account.xml
 *
 * Examples:
 *
 *      insales.getAccount({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { account:
 *         { blocked: 'false',
 *           city: 'Москва',
 *           'contact-phone': '',
 *           country: 'RU',
 *           'enable-cart-discounts': 'true',
 *           'enable-client-discounts': 'false',
 *           'enable-group-discounts': 'true',
 *           'enable-order-discounts': 'false',
 *           'hide-items-out-of-stock': 'false',
 *           id: '12345',
 *           'notification-email': '',
 *           organization: '',
 *           'sms-notification-phone': '',
 *           state: 'г Москва',
 *           subdomain: 'shop-test',
 *           email: 'mail@mail.ru',
 *           icq: '',
 *           phone: '+71234567890',
 *           title: 'Название магазина',
 *           'minimum-items-price': '',
 *           'stock-currency-exchange-rate': '1.0',
 *           'client-cookies-whitelist': '',
 *           'main-host': 'shop-test.myinsales.ru',
 *           'next-order-number': '1040',
 *           'time-zone': 'Moscow',
 *           owner:
 *            { 'created-at': '2011-11-11 11:11:11 +0400',
 *              email: 'mail@mail.ru',
 *              id: '12345',
 *               name: 'Имя' } } }
 * @param {Object} options Required, options.token - access token for shop. options.url - shop url
 * @param {String} id Required, app id
 * @returns {Promise}
 */
export function getAccount(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `account`
    }).then(resolve)
      .catch(reject);
  });
}
