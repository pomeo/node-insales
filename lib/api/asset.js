import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';

/**
 * POST /admin/themes/#{theme_id}/assets.xml
 *
 * Examples:
 *
 *      insales.uploadAsset({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
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
 * @param {object} options.file Required, url to file
 * @param {object} owner
 * @param {string} owner.url Required, shop url
 * @param {Number|String} owner.theme Required, theme id
 * @param {Number|String} owner.id Required, app id
 * @param {object} options.asset Required, asset property
 * @returns {Promise}
 */
export function uploadAsset(options, owner) {
  return new Promise((resolve, reject) => {
    post({
      id: owner.id,
      token: options.token,
      url: owner.url || options.url,
      api: 'themes/'+owner.theme+'/assets',
      obj: {
        'asset': options.asset
      }
    }).then(resolve)
      .catch(reject);
  });
}
