import { get } from '../methods/get';
import { post } from '../methods/post';
import { put } from '../methods/put';
import { remove } from '../methods/remove';

/**
 * GET /admin/o_auth_apps/{o_auth_app_id}.json
 *
 * Examples:
 *
 *      insales.getOAuthApp({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        oauthappid: '4'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "client_id": "953",
 *        "client_secret": "NdsaPd",
 *        "provider": "new_provider",
 *        "issuer": "/.well-known/openid-configuration",
 *        "id": 4,
 *        "enabled": true
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.oauthappid Required, oauth app id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getOAuthApp(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `o_auth_apps/${options.oauthappid}`
  });
}

/**
 * GET /admin/o_auth_apps.json
 *
 * Examples:
 *
 *      insales.listOAuthApp({
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
 *          "client_id": "953",
 *          "client_secret": "NdsaPd",
 *          "provider": "new_provider",
 *          "issuer": "/.well-known/openid-configuration",
 *          "id": 2,
 *          "enabled": true
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listOAuthApp(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `o_auth_apps`
  });
}

/**
 * POST /admin/o_auth_apps.json
 *
 * Examples:
 *
 *      insales.createOAuthApp({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        oauthapp: {
 *          "o_auth_app": {
 *            "provider_handle": "provider name",
 *            "client_id": "10332",
 *            "client_secret": "NdsaPd",
 *            "issuer": "/.well-known/openid-configuration"
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
 *        "client_id": "10332",
 *        "client_secret": "NdsaPd",
 *        "provider": "provider name",
 *        "issuer": "/.well-known/openid-configuration",
 *        "id": 8,
 *        "enabled": true
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.oauthapp Required, oauth app
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createOAuthApp(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `o_auth_apps`,
    obj: options.oauthapp
  });
}

/**
 * DELETE /admin/o_auth_apps/{o_auth_app_id}.json
 *
 * Examples:
 *
 *      insales.removeOAuthApp({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        oauthappid: '12'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "status": "ok"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.oauthappid Required, oauth app id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeOAuthApp(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `o_auth_apps/${options.oauthappid}`
  });
}

/**
 * PUT /admin/o_auth_apps/{o_auth_app_id}.json
 *
 * Examples:
 *
 *      insales.editOAuthApp({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        oauthappid: '10',
 *        oauthapp: {
 *          "o_auth_app": {
 *            "provider_handle": "new name provider"
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
 *        "client_id": "953",
 *        "client_secret": "NdsaPd",
 *        "provider": "new name provider",
 *        "issuer": "/.well-known/openid-configuration",
 *        "id": 10,
 *        "enabled": true
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.oauthappid Required, oauth app id
 * @param {object} options.oauthapp Required, oauth app
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editOAuthApp(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `o_auth_apps/${options.oauthappid}`,
    obj: options.oauthapp
  });
}
