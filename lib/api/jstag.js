import { post } from '../methods/post';

/**
 * POST /admin/js_tags.xml
 *
 * Examples:
 *
 *      insales.getCoupon({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        jstag: {
 *          'js-tag': {
 *            'type': 'JsTag::TextTag',
 *            'content': 'http://link'
 *          }
 *        }
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'file-tag':
 *        { 'account-id': '12345',
 *          'application-password-id': '12345',
 *          content: 'http://link',
 *          'created-at': '2011-11-11 11:11:11 +0300',
 *          id: '12345',
 *          name: '',
 *          'updated-at': '2011-11-11 11:11:11 +0300' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.jstag Required, jstag
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createJsTag(options, id) {
  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: 'js_tags',
      obj: options.jstag
    }).then(resolve)
      .catch(reject);
  });
}
