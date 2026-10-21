import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';

/**
 * GET /admin/redirects/{redirect_id}.json
 *
 * Examples:
 *
 *      insales.getRedirect({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        redirectid: '8'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 8,
 *        "old_url": "/so_old_url",
 *        "new_url": "/like_new_url",
 *        "created_at": "2026-10-21T23:06:06.268+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.redirectid Required, redirect id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getRedirect(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `redirects/${options.redirectid}`
  });
}

/**
 * GET /admin/redirects.json
 *
 * Examples:
 *
 *      insales.listRedirect({
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
 *          "id": 6,
 *          "old_url": "/so_old_url",
 *          "new_url": "/like_new_url",
 *          "created_at": "2026-10-21T23:06:05.851+03:00"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listRedirect(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `redirects`
  });
}

/**
 * POST /admin/redirects.json
 *
 * Examples:
 *
 *      insales.createRedirect({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        redirect: {
 *          "redirect": {
 *            "old_url": "/old_url",
 *            "new_url": "/new_url"
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
 *        "id": 12,
 *        "old_url": "/old_url",
 *        "new_url": "/new_url",
 *        "created_at": "2026-10-21T23:06:06.823+03:00"
 *      }
 *
 *      insales.createRedirect({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        redirect: {
 *          "redirect": {
 *            "old_url": "/like_new_url",
 *            "new_url": "/so_new_url",
 *            "remove_redirect_chains": 1
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
 *        "id": 16,
 *        "old_url": "/like_new_url",
 *        "new_url": "/so_new_url",
 *        "created_at": "2026-10-21T23:06:07.317+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.redirect Required, redirect
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createRedirect(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `redirects`,
    obj: options.redirect
  });
}

/**
 * DELETE /admin/redirects/{redirect_id}.json
 *
 * Examples:
 *
 *      insales.removeRedirect({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        redirectid: '18'
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
 * @param {number|string} options.redirectid Required, redirect id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeRedirect(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `redirects/${options.redirectid}`
  });
}
