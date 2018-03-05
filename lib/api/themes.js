import { get } from '../methods/get';

/**
 * GET /admin/themes.xml
 *
 * Examples:
 *
 *      insales.listThemes({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru'
 *      }).then(response => {
 *        console.info(response.data.themes);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'themes':
 *         { theme:
*             [ { 'created-at': '2016-05-12 20:12:08 +0300',
*                 description: '',
*                 'errors-text': '',
*                 id: '626874',
*                 'is-mobile': 'false',
*                 'is-published': 'false',
*                 title: 'Custom',
*                 'updated-at': '2016-06-17 07:59:26 +0300' },
*               { 'created-at': '2016-06-01 21:55:16 +0300',
*                 description: '',
*                 'errors-text': '',
*                 id: '634252',
*                 'is-mobile': 'false',
*                 'is-published': 'true',
*                 title: 'Custom2',
*                 'updated-at': '2016-07-14 06:19:55 +0300' }]}};
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listThemes(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `themes`
  });
}
