import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/accessories/{accessory_id}.json
 *
 * Examples:
 *
 *      insales.getAccessory({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        accessoryid: '44'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 44,
 *        "account_id": 1,
 *        "name_translations": [
 *          "Интеллектуальный Резиновый Нож"
 *        ],
 *        "min_count": 4,
 *        "max_count": 6,
 *        "created_at": "2026-10-21T23:15:57.058+03:00",
 *        "updated_at": "2026-10-21T23:15:57.058+03:00",
 *        "back_office_name": "Интеллектуальный Пластиковый Часы",
 *        "permalink": "eum_perferendis",
 *        "name": "Интеллектуальный Резиновый Нож"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.accessoryid Required, accessory id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getAccessory(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `accessories/${options.accessoryid}`
  });
}

/**
 * GET /admin/accessories.json
 *
 * Examples:
 *
 *      insales.listAccessory({
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
 *          "id": 25,
 *          "account_id": 1,
 *          "name_translations": [
 *            "Опция 0"
 *          ],
 *          "min_count": 1,
 *          "max_count": 8,
 *          "created_at": "2026-10-21T23:15:56.455+03:00",
 *          "updated_at": "2026-10-21T23:15:56.455+03:00",
 *          "back_office_name": "Удовлетворительный Бронзовый Стол",
 *          "permalink": "ut_nesciunt",
 *          "name": "Опция 0"
 *        },
 *        {
 *          "id": 26,
 *          "account_id": 1,
 *          "name_translations": [
 *            "Опция 1"
 *          ],
 *          "min_count": 4,
 *          "max_count": 4,
 *          "created_at": "2026-10-21T23:15:56.476+03:00",
 *          "updated_at": "2026-10-21T23:15:56.476+03:00",
 *          "back_office_name": "Лоснящийся Пластиковый Бутылка",
 *          "permalink": "sit_modi",
 *          "name": "Опция 1"
 *        },
 *        {
 *          "id": 27,
 *          "account_id": 1,
 *          "name_translations": [
 *            "Опция 2"
 *          ],
 *          "min_count": 4,
 *          "max_count": 9,
 *          "created_at": "2026-10-21T23:15:56.495+03:00",
 *          "updated_at": "2026-10-21T23:15:56.495+03:00",
 *          "back_office_name": "Потрясающий Стальной Свитер",
 *          "permalink": "quisquam_saepe",
 *          "name": "Опция 2"
 *        },
 *        {
 *          "id": 28,
 *          "account_id": 1,
 *          "name_translations": [
 *            "Опция 0"
 *          ],
 *          "min_count": 2,
 *          "max_count": 3,
 *          "created_at": "2026-10-21T23:15:56.510+03:00",
 *          "updated_at": "2026-10-21T23:15:56.510+03:00",
 *          "back_office_name": "Аэродинамический Льняной Лампа",
 *          "permalink": "beatae_autem",
 *          "name": "Опция 0"
 *        },
 *        {
 *          "id": 29,
 *          "account_id": 1,
 *          "name_translations": [
 *            "Опция 1"
 *          ],
 *          "min_count": 2,
 *          "max_count": 9,
 *          "created_at": "2026-10-21T23:15:56.524+03:00",
 *          "updated_at": "2026-10-21T23:15:56.524+03:00",
 *          "back_office_name": "Удовлетворительный Деревянный Сумка",
 *          "permalink": "consequatur_atque",
 *          "name": "Опция 1"
 *        },
 *        {
 *          "id": 30,
 *          "account_id": 1,
 *          "name_translations": [
 *            "Опция 2"
 *          ],
 *          "min_count": 2,
 *          "max_count": 7,
 *          "created_at": "2026-10-21T23:15:56.541+03:00",
 *          "updated_at": "2026-10-21T23:15:56.541+03:00",
 *          "back_office_name": "Интеллектуальный Алюминиевый Лампа",
 *          "permalink": "pariatur_ducimus",
 *          "name": "Опция 2"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listAccessory(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `accessories`
  });
}

/**
 * POST /admin/accessories.json
 *
 * Examples:
 *
 *      insales.createAccessory({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        accessory: {
 *          "accessory": {
 *            "name": "Опция 1",
 *            "max_count": 7,
 *            "min_count": 3,
 *            "permalink": "opcia-1"
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
 *        "id": 58,
 *        "account_id": 1,
 *        "name_translations": [
 *          "Опция 1"
 *        ],
 *        "min_count": 3,
 *        "max_count": 7,
 *        "created_at": "2026-10-21T23:15:57.629+03:00",
 *        "updated_at": "2026-10-21T23:15:57.629+03:00",
 *        "back_office_name": "Опция 1",
 *        "permalink": "opcia-1",
 *        "name": "Опция 1"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.accessory Required, accessory
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createAccessory(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `accessories`,
    obj: options.accessory
  });
}

/**
 * DELETE /admin/accessories/{accessory_id}.json
 *
 * Examples:
 *
 *      insales.removeAccessory({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        accessoryid: '86'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 86,
 *        "account_id": 1,
 *        "name_translations": [
 *          "Тяжёлый Шелковый Бутылка"
 *        ],
 *        "min_count": 2,
 *        "max_count": 7,
 *        "created_at": "2026-10-21T23:15:58.561+03:00",
 *        "updated_at": "2026-10-21T23:15:58.561+03:00",
 *        "back_office_name": "Великолепный Железный Стол",
 *        "permalink": "consequatur_laboriosam",
 *        "name": "Тяжёлый Шелковый Бутылка"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.accessoryid Required, accessory id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeAccessory(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `accessories/${options.accessoryid}`
  });
}

/**
 * PUT /admin/accessories/{accessory_id}.json
 *
 * Examples:
 *
 *      insales.editAccessory({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        accessoryid: '72',
 *        accessory: {
 *          "accessory": {
 *            "name": "Опция 1",
 *            "max_count": 9,
 *            "min_count": 4,
 *            "permalink": "opcia-1"
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
 *        "account_id": 1,
 *        "name": "Опция 1",
 *        "min_count": 4,
 *        "max_count": 9,
 *        "permalink": "opcia-1",
 *        "id": 72,
 *        "back_office_name": "Огромный Алюминиевый Компьютер",
 *        "name_translations": [
 *          "Опция 1"
 *        ],
 *        "created_at": "2026-10-21T23:15:58.027+03:00",
 *        "updated_at": "2026-10-21T23:15:58.141+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.accessoryid Required, accessory id
 * @param {object} options.accessory Required, accessory
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editAccessory(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `accessories/${options.accessoryid}`,
    obj: options.accessory
  });
}
