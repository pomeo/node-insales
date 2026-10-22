import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/clients/{client_id}.json
 *
 * Examples:
 *
 *      insales.getClient({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        clientid: '5'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 5,
 *        "email": "john@smith.com",
 *        "name": "John Smith",
 *        "phone": "+7(926)111-11-11",
 *        "created_at": "2009-04-30T04:37:32.000+04:00",
 *        "updated_at": "2026-10-21T23:29:32.000+03:00",
 *        "comment": null,
 *        "registered": true,
 *        "subscribe": true,
 *        "client_group_id": null,
 *        "bonus_points": 1000,
 *        "type": "Client::Individual",
 *        "correspondent_account": null,
 *        "settlement_account": null,
 *        "consent_to_personal_data": null,
 *        "o_auth_provider": null,
 *        "messenger_subscription": null,
 *        "external_id": null,
 *        "external_service": null,
 *        "contact_name": "John Smith",
 *        "surname": null,
 *        "middlename": null,
 *        "progressive_discount": null,
 *        "group_discount": null,
 *        "ip_addr": "",
 *        "fields_values": [
 *          {
 *            "id": 827,
 *            "value": "old value",
 *            "created_at": "2026-10-21T23:29:32.876+03:00",
 *            "updated_at": "2026-10-21T23:29:32.876+03:00",
 *            "field_id": 1136,
 *            "type": "Текст",
 *            "name": "special",
 *            "handle": null
 *          }
 *        ],
 *        "default_address": null,
 *        "client_tags": [],
 *        "full_name": "John Smith"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.clientid Required, client id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getClient(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `clients/${options.clientid}`
  });
}

/**
 * GET /admin/clients.json
 *
 * Examples:
 *
 *      insales.listClient({
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
 *          "id": 2,
 *          "email": "some-one@yandex.ru",
 *          "name": "Mortimer Hant",
 *          "phone": "+79162128506",
 *          "created_at": "2009-03-30T04:37:32.000+04:00",
 *          "updated_at": "2009-03-31T12:20:34.000+04:00",
 *          "comment": null,
 *          "registered": false,
 *          "subscribe": true,
 *          "client_group_id": null,
 *          "bonus_points": 0,
 *          "type": "Client::Individual",
 *          "correspondent_account": null,
 *          "settlement_account": null,
 *          "consent_to_personal_data": null,
 *          "o_auth_provider": null,
 *          "messenger_subscription": null,
 *          "external_id": null,
 *          "external_service": null,
 *          "contact_name": "Mortimer Hant",
 *          "surname": null,
 *          "middlename": null,
 *          "progressive_discount": null,
 *          "group_discount": null,
 *          "ip_addr": "",
 *          "fields_values": [],
 *          "default_address": null,
 *          "client_tags": [],
 *          "full_name": "Mortimer Hant"
 *        },
 *        {
 *          "id": 3,
 *          "email": "some-one2@yandex.ru",
 *          "name": "Just Man",
 *          "phone": "+7(926)111-22-33",
 *          "created_at": "2009-04-30T04:37:32.000+04:00",
 *          "updated_at": "2009-04-30T12:20:34.000+04:00",
 *          "comment": null,
 *          "registered": false,
 *          "subscribe": true,
 *          "client_group_id": 1,
 *          "bonus_points": 0,
 *          "type": "Client::Individual",
 *          "correspondent_account": null,
 *          "settlement_account": null,
 *          "consent_to_personal_data": null,
 *          "o_auth_provider": null,
 *          "messenger_subscription": null,
 *          "external_id": null,
 *          "external_service": null,
 *          "contact_name": "Just Man",
 *          "surname": null,
 *          "middlename": null,
 *          "progressive_discount": "25.0",
 *          "group_discount": "25.0",
 *          "ip_addr": "",
 *          "fields_values": [],
 *          "default_address": null,
 *          "client_tags": [],
 *          "full_name": "Just Man"
 *        },
 *        {
 *          "id": 5,
 *          "email": "john@smith.com",
 *          "name": "John Smith",
 *          "phone": "+7(926)111-11-11",
 *          "created_at": "2009-04-30T04:37:32.000+04:00",
 *          "updated_at": "2026-10-21T23:29:32.000+03:00",
 *          "comment": null,
 *          "registered": true,
 *          "subscribe": true,
 *          "client_group_id": null,
 *          "bonus_points": 1000,
 *          "type": "Client::Individual",
 *          "correspondent_account": null,
 *          "settlement_account": null,
 *          "consent_to_personal_data": null,
 *          "o_auth_provider": null,
 *          "messenger_subscription": null,
 *          "external_id": null,
 *          "external_service": null,
 *          "contact_name": "John Smith",
 *          "surname": null,
 *          "middlename": null,
 *          "progressive_discount": null,
 *          "group_discount": null,
 *          "ip_addr": "",
 *          "fields_values": [
 *            {
 *              "id": 811,
 *              "value": "old value",
 *              "created_at": "2026-10-21T23:29:32.199+03:00",
 *              "updated_at": "2026-10-21T23:29:32.199+03:00",
 *              "field_id": 1120,
 *              "type": "Текст",
 *              "name": "special",
 *              "handle": null
 *            }
 *          ],
 *          "default_address": null,
 *          "client_tags": [],
 *          "full_name": "John Smith"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {string} [options.updated_since] Clients updated since
 * @param {number|string} [options.from_id] Clients starting from this id
 * @param {number|string} [options.per_page] Clients per page
 * @param {string} [options.q] Search by name, surname, middlename, phone or email
 * @param {string} [options.phone] Exact phone
 * @param {string} [options.email] Exact email
 * @param {string} [options.registered] Registration status: yes or no
 * @param {string} [options.subscribe] Subscription permission: yes or no
 * @param {string|string[]} [options.rfm_group] RFM group or array of groups
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listClient(options, id) {
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
  if (options.q) {
    query.q = options.q;
  }
  if (options.phone) {
    query.phone = options.phone;
  }
  if (options.email) {
    query.email = options.email;
  }
  if (options.registered) {
    query.registered = options.registered;
  }
  if (options.subscribe) {
    query.subscribe = options.subscribe;
  }
  if (options.rfm_group) {
    query.rfm_group = options.rfm_group;
  }
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `clients`,
    query
  });
}

/**
 * POST /admin/clients.json
 *
 * Examples:
 *
 *      insales.createClient({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        client: {
 *          "client": {
 *            "name": "Ivan",
 *            "surname": "Ivanov",
 *            "middlename": "Ivanovich",
 *            "registered": true,
 *            "email": "test@example.com",
 *            "password": "123456",
 *            "phone": "+71111111111",
 *            "type": "Client::Individual",
 *            "fields_values_attributes": [
 *              {
 *                "field_id": 1152,
 *                "value": "text"
 *              }
 *            ]
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
 *        "id": 225,
 *        "email": "test@example.com",
 *        "name": "Ivan",
 *        "phone": "+71111111111",
 *        "created_at": "2026-10-21T23:29:33.000+03:00",
 *        "updated_at": "2026-10-21T23:29:33.000+03:00",
 *        "comment": null,
 *        "registered": true,
 *        "subscribe": true,
 *        "client_group_id": 1,
 *        "bonus_points": 0,
 *        "type": "Client::Individual",
 *        "correspondent_account": null,
 *        "settlement_account": null,
 *        "consent_to_personal_data": true,
 *        "o_auth_provider": null,
 *        "messenger_subscription": null,
 *        "external_id": null,
 *        "external_service": null,
 *        "contact_name": "Ivan",
 *        "surname": "Ivanov",
 *        "middlename": "Ivanovich",
 *        "progressive_discount": "25.0",
 *        "group_discount": "25.0",
 *        "ip_addr": "",
 *        "fields_values": [
 *          {
 *            "id": 859,
 *            "value": "text",
 *            "created_at": "2026-10-21T23:29:33.913+03:00",
 *            "updated_at": "2026-10-21T23:29:33.913+03:00",
 *            "field_id": 1152,
 *            "type": "Текст",
 *            "name": "special",
 *            "handle": null
 *          }
 *        ],
 *        "default_address": null,
 *        "client_tags": [],
 *        "full_name": "Ivanov Ivan Ivanovich"
 *      }
 *
 *      insales.createClient({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        client: {
 *          "client": {
 *            "name": "OOO 'Company'",
 *            "type": "Client::Juridical",
 *            "juridical_address": "123456, Moscow, Novaya st., 1, 222",
 *            "inn": 1234567890,
 *            "kpp": 123456789,
 *            "bik": 123456789,
 *            "fields_values_attributes": [
 *              {
 *                "field_id": 1184,
 *                "value": "text_value"
 *              }
 *            ]
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
 *        "id": 241,
 *        "email": null,
 *        "name": "OOO 'Company'",
 *        "phone": null,
 *        "created_at": "2026-10-21T23:29:34.000+03:00",
 *        "updated_at": "2026-10-21T23:29:34.000+03:00",
 *        "comment": null,
 *        "registered": false,
 *        "subscribe": true,
 *        "client_group_id": null,
 *        "bonus_points": 0,
 *        "type": "Client::Juridical",
 *        "correspondent_account": null,
 *        "settlement_account": null,
 *        "consent_to_personal_data": true,
 *        "o_auth_provider": null,
 *        "messenger_subscription": null,
 *        "external_id": null,
 *        "external_service": null,
 *        "contact_name": null,
 *        "juridical_address": "123456, Moscow, Novaya st., 1, 222",
 *        "inn": "1234567890",
 *        "kpp": "123456789",
 *        "ogrn": null,
 *        "okpo": null,
 *        "bik": "123456789",
 *        "bank_name": null,
 *        "progressive_discount": null,
 *        "group_discount": null,
 *        "ip_addr": "",
 *        "fields_values": [
 *          {
 *            "id": 891,
 *            "value": "text_value",
 *            "created_at": "2026-10-21T23:29:34.582+03:00",
 *            "updated_at": "2026-10-21T23:29:34.582+03:00",
 *            "field_id": 1184,
 *            "type": "Текст",
 *            "name": "field_juridical",
 *            "handle": null
 *          }
 *        ],
 *        "default_address": null,
 *        "client_tags": [],
 *        "full_name": "OOO 'Company'"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.client Required, client
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createClient(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `clients`,
    obj: options.client
  });
}

/**
 * DELETE /admin/clients/{client_id}.json
 *
 * Examples:
 *
 *      insales.removeClient({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        clientid: '5'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      ok
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.clientid Required, client id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeClient(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `clients/${options.clientid}`
  });
}

/**
 * PUT /admin/clients/{client_id}.json
 *
 * Examples:
 *
 *      insales.editClient({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        clientid: '5',
 *        client: {
 *          "client": {
 *            "phone": "+7(911)111-11-11",
 *            "subscribe": false,
 *            "client_group_id": 2,
 *            "fields_values_attributes": [
 *              {
 *                "field_id": 1200,
 *                "value": "new value"
 *              }
 *            ]
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
 *        "id": 5,
 *        "email": "john@smith.com",
 *        "name": "John Smith",
 *        "phone": "+79111111111",
 *        "created_at": "2009-04-30T04:37:32.000+04:00",
 *        "updated_at": "2026-10-21T23:29:35.000+03:00",
 *        "comment": null,
 *        "registered": true,
 *        "subscribe": false,
 *        "client_group_id": 2,
 *        "bonus_points": 1000,
 *        "type": "Client::Individual",
 *        "correspondent_account": null,
 *        "settlement_account": null,
 *        "consent_to_personal_data": null,
 *        "o_auth_provider": null,
 *        "messenger_subscription": null,
 *        "external_id": null,
 *        "external_service": null,
 *        "contact_name": "John Smith",
 *        "surname": null,
 *        "middlename": null,
 *        "progressive_discount": null,
 *        "group_discount": null,
 *        "ip_addr": "",
 *        "fields_values": [
 *          {
 *            "id": 907,
 *            "value": "new value",
 *            "created_at": "2026-10-21T23:29:35.063+03:00",
 *            "updated_at": "2026-10-21T23:29:35.217+03:00",
 *            "field_id": 1200,
 *            "type": "Текст",
 *            "name": "special",
 *            "handle": null
 *          }
 *        ],
 *        "default_address": null,
 *        "client_tags": [],
 *        "full_name": "John Smith"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.clientid Required, client id
 * @param {object} options.client Required, client
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editClient(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `clients/${options.clientid}`,
    obj: options.client
  });
}
