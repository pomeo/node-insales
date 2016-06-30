import { post } from '../methods/post';

/**
 * POST /admin/themes/#{theme_id}/assets.xml
 *
 * Examples:
 *
 *      insales.uploadAsset({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        theme: '643879',
 *        asset: {
 *           'name': 'logo.png',
 *           'src': 'http://www.insales.ru/assets/images/content/logo.png',
 *           'type': 'Asset::Media'
 *           }
 *        }
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { asset:
 *         { id: '60374631',
 *           'theme-id': '643879',
 *           type: 'Asset::Media',
 *           name: 'logo.png',
 *           'content-type': 'image/jpeg',
 *           'file-size': '71373',
 *           'human-readable-name': 'logo.png',
 *             asset_url: '/assets/1/4903/643879/v_1467231594/logo.png?1467234697' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} id Required, app id
 * @param {object} options.asset Required, asset property
 * @returns {Promise}
 */
export function uploadAsset(options, id) {
  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: `themes/${options.theme}/assets`,
      obj: {
        'asset': options.asset
      }
    }).then(resolve)
      .catch(reject);
  });
}
