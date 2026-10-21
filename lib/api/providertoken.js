import { post } from '../methods/post';

/**
 * POST /admin/dialogs/provider_tokens.json
 *
 * Examples:
 *
 *      insales.createProviderToken({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        providertoken: {
 *          "messenger_type": "sms"
 *        }
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "api_token": "SOME_API_TOKEN",
 *        "webhook_token": "SOME_WEBHOOK_TOKEN"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.providertoken Required, provider token
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createProviderToken(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `dialogs/provider_tokens`,
    obj: options.providertoken
  });
}
