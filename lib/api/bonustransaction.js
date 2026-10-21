import { get } from '../methods/get';
import { post } from '../methods/post';

/**
 * GET /admin/bonus_system_transactions/{bst_id}.json
 *
 * Examples:
 *
 *      insales.getBonusTransaction({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        transactionid: '89'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 89,
 *        "bonus_points": 100,
 *        "client_id": 2,
 *        "bonus_system_id": 1,
 *        "initiator_type": "Order",
 *        "initiator_id": 1,
 *        "description": "test",
 *        "status": "charged",
 *        "created_at": "2026-10-21T23:29:38.422+03:00",
 *        "updated_at": "2026-10-21T23:29:38.422+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.transactionid Required, bonus transaction id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getBonusTransaction(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `bonus_system_transactions/${options.transactionid}`
  });
}

/**
 * GET /admin/bonus_system_transactions.json
 *
 * Examples:
 *
 *      insales.listBonusTransaction({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        updated_since: '2009-01-04 14:44:43 +0300'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      [
 *        {
 *          "id": 1,
 *          "bonus_points": 100,
 *          "client_id": 7,
 *          "bonus_system_id": 1,
 *          "initiator_type": "User",
 *          "initiator_id": 1,
 *          "description": "Бонус за регистрацию",
 *          "status": "charged",
 *          "created_at": "2011-03-18T10:53:14.000+03:00",
 *          "updated_at": "2011-03-18T10:53:15.000+03:00"
 *        },
 *        {
 *          "id": 25,
 *          "bonus_points": 100,
 *          "client_id": 2,
 *          "bonus_system_id": 1,
 *          "initiator_type": "Order",
 *          "initiator_id": 1,
 *          "description": "test",
 *          "status": "charged",
 *          "created_at": "2026-10-21T23:29:37.776+03:00",
 *          "updated_at": "2026-10-21T23:29:37.776+03:00"
 *        },
 *        {
 *          "id": 33,
 *          "bonus_points": 100,
 *          "client_id": 2,
 *          "bonus_system_id": 1,
 *          "initiator_type": "User",
 *          "initiator_id": 1,
 *          "description": "test",
 *          "status": "charged",
 *          "created_at": "2026-10-21T23:29:37.789+03:00",
 *          "updated_at": "2026-10-21T23:29:37.789+03:00"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {string} [options.updated_since] Transactions updated since
 * @param {number|string} [options.from_id] Transactions starting from this id
 * @param {number|string} [options.per_page] Transactions per page
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listBonusTransaction(options, id) {
  const query = {};
  if (options.updated_since) {
    query.updated_since = options.updated_since;
  }
  if (options.from_id) {
    query.from_id = options.from_id;
  }
  if (options.per_page) {
    query.per_page = options.per_page;
  }
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `bonus_system_transactions`,
    query
  });
}

/**
 * GET /admin/clients/{client_id}/bonus_system_transactions.json
 *
 * Examples:
 *
 *      insales.listClientBonusTransaction({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        clientid: '2'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      [
 *        {
 *          "id": 57,
 *          "bonus_points": 100,
 *          "client_id": 2,
 *          "bonus_system_id": 1,
 *          "initiator_type": "Order",
 *          "initiator_id": 1,
 *          "description": "test",
 *          "status": "charged",
 *          "created_at": "2026-10-21T23:29:38.117+03:00",
 *          "updated_at": "2026-10-21T23:29:38.117+03:00"
 *        },
 *        {
 *          "id": 65,
 *          "bonus_points": 100,
 *          "client_id": 2,
 *          "bonus_system_id": 1,
 *          "initiator_type": "User",
 *          "initiator_id": 1,
 *          "description": "test",
 *          "status": "charged",
 *          "created_at": "2026-10-21T23:29:38.130+03:00",
 *          "updated_at": "2026-10-21T23:29:38.130+03:00"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.clientid Required, client id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listClientBonusTransaction(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `clients/${options.clientid}/bonus_system_transactions`
  });
}

/**
 * POST /admin/clients/{client_id}/bonus_system_transactions.json
 *
 * Examples:
 *
 *      insales.createBonusTransaction({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        clientid: '2',
 *        bonustransaction: {
 *          "bonus_system_transaction": {
 *            "bonus_points": 100,
 *            "description": "compliment"
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
 *        "id": 145,
 *        "bonus_points": 100,
 *        "client_id": 2,
 *        "bonus_system_id": 1,
 *        "initiator_type": "ApplicationPassword",
 *        "initiator_id": 1,
 *        "description": "compliment",
 *        "status": "charged",
 *        "created_at": "2026-10-21T23:29:38.930+03:00",
 *        "updated_at": "2026-10-21T23:29:38.939+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.clientid Required, client id
 * @param {object} options.bonustransaction Required, bonus transaction
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createBonusTransaction(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `clients/${options.clientid}/bonus_system_transactions`,
    obj: options.bonustransaction
  });
}
