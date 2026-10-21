import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/fields/{field_id}.json
 *
 * Examples:
 *
 *      insales.getField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: '23'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 23,
 *        "destiny": 2,
 *        "position": 6,
 *        "office_title": "Селект",
 *        "for_buyer": true,
 *        "obligatory": false,
 *        "active": false,
 *        "system_name": null,
 *        "created_at": "2010-10-12T13:31:09.692+04:00",
 *        "updated_at": "2010-10-12T13:31:09.692+04:00",
 *        "show_in_result": true,
 *        "show_in_checkout": true,
 *        "is_indexed": null,
 *        "hide_in_backoffice": null,
 *        "handle": null,
 *        "placeholder": null,
 *        "title": "Селект",
 *        "example": null,
 *        "type": "Field::Select",
 *        "field_options": [
 *          {
 *            "id": 1,
 *            "position": 1,
 *            "value": "Передан"
 *          },
 *          {
 *            "id": 2,
 *            "position": 2,
 *            "value": "Не передан"
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.fieldid Required, field id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getField(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `fields/${options.fieldid}`
  });
}

/**
 * GET /admin/fields.json
 *
 * Examples:
 *
 *      insales.listField({
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
 *          "id": 1,
 *          "destiny": 1,
 *          "position": 0,
 *          "office_title": "Страна",
 *          "for_buyer": true,
 *          "obligatory": false,
 *          "active": false,
 *          "system_name": "country",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::Country"
 *        },
 *        {
 *          "id": 11,
 *          "destiny": 2,
 *          "position": 1,
 *          "office_title": "Имя",
 *          "for_buyer": true,
 *          "obligatory": true,
 *          "active": true,
 *          "system_name": "name",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::ObligatoryTextField"
 *        },
 *        {
 *          "id": 2,
 *          "destiny": 1,
 *          "position": 1,
 *          "office_title": "Регион",
 *          "for_buyer": true,
 *          "obligatory": false,
 *          "active": false,
 *          "system_name": "state",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::SystemTextField"
 *        },
 *        {
 *          "id": 12,
 *          "destiny": 2,
 *          "position": 2,
 *          "office_title": "Телефон",
 *          "for_buyer": true,
 *          "obligatory": true,
 *          "active": true,
 *          "system_name": "phone",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::Phone"
 *        },
 *        {
 *          "id": 3,
 *          "destiny": 1,
 *          "position": 2,
 *          "office_title": "Город",
 *          "for_buyer": true,
 *          "obligatory": false,
 *          "active": false,
 *          "system_name": "city",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::SystemTextField"
 *        },
 *        {
 *          "id": 4,
 *          "destiny": 1,
 *          "position": 3,
 *          "office_title": "Адрес",
 *          "for_buyer": true,
 *          "obligatory": false,
 *          "active": true,
 *          "system_name": "address",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::SystemTextArea"
 *        },
 *        {
 *          "id": 13,
 *          "destiny": 2,
 *          "position": 3,
 *          "office_title": "E-mail",
 *          "for_buyer": true,
 *          "obligatory": true,
 *          "active": true,
 *          "system_name": "email",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::SystemTextField"
 *        },
 *        {
 *          "id": 14,
 *          "destiny": 2,
 *          "position": 4,
 *          "office_title": "Подтверждение e-mail",
 *          "for_buyer": true,
 *          "obligatory": true,
 *          "active": false,
 *          "system_name": "email_confirmation",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::SystemTextField"
 *        },
 *        {
 *          "id": 5,
 *          "destiny": 1,
 *          "position": 4,
 *          "office_title": "Почтовый индекс",
 *          "for_buyer": true,
 *          "obligatory": false,
 *          "active": false,
 *          "system_name": "zip",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::SystemTextField"
 *        },
 *        {
 *          "id": 21,
 *          "destiny": 2,
 *          "position": 4,
 *          "office_title": "Фамилия",
 *          "for_buyer": true,
 *          "obligatory": false,
 *          "active": false,
 *          "system_name": "surname",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::SystemTextField"
 *        },
 *        {
 *          "id": 22,
 *          "destiny": 2,
 *          "position": 5,
 *          "office_title": "Отчество",
 *          "for_buyer": true,
 *          "obligatory": false,
 *          "active": false,
 *          "system_name": "middlename",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::SystemTextField"
 *        },
 *        {
 *          "id": 23,
 *          "destiny": 2,
 *          "position": 6,
 *          "office_title": "Селект",
 *          "for_buyer": true,
 *          "obligatory": false,
 *          "active": false,
 *          "system_name": null,
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": "Селект",
 *          "example": null,
 *          "type": "Field::Select",
 *          "field_options": [
 *            {
 *              "id": 1,
 *              "position": 1,
 *              "value": "Передан"
 *            },
 *            {
 *              "id": 2,
 *              "position": 2,
 *              "value": "Не передан"
 *            }
 *          ]
 *        },
 *        {
 *          "id": 172,
 *          "destiny": 2,
 *          "position": 18,
 *          "office_title": "Согласие на обработку персональных данных",
 *          "for_buyer": true,
 *          "obligatory": true,
 *          "active": false,
 *          "system_name": "consent_to_personal_data",
 *          "created_at": "2026-10-19T22:28:42.676+03:00",
 *          "updated_at": "2026-10-19T22:28:42.676+03:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::SystemCheckbox"
 *        },
 *        {
 *          "id": 106,
 *          "destiny": 1,
 *          "position": 19,
 *          "office_title": "Улица",
 *          "for_buyer": true,
 *          "obligatory": false,
 *          "active": false,
 *          "system_name": "street",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::SystemTextField"
 *        },
 *        {
 *          "id": 107,
 *          "destiny": 1,
 *          "position": 20,
 *          "office_title": "Дом",
 *          "for_buyer": true,
 *          "obligatory": false,
 *          "active": false,
 *          "system_name": "house",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::SystemTextField"
 *        },
 *        {
 *          "id": 108,
 *          "destiny": 1,
 *          "position": 21,
 *          "office_title": "Квартира",
 *          "for_buyer": true,
 *          "obligatory": false,
 *          "active": false,
 *          "system_name": "flat",
 *          "created_at": "2010-10-12T13:31:09.692+04:00",
 *          "updated_at": "2010-10-12T13:31:09.692+04:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": null,
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::SystemTextField"
 *        },
 *        {
 *          "id": 174,
 *          "destiny": 3,
 *          "position": 22,
 *          "office_title": "АКС айди отгрузки",
 *          "for_buyer": true,
 *          "obligatory": true,
 *          "active": false,
 *          "system_name": null,
 *          "created_at": "2026-10-19T22:28:42.676+03:00",
 *          "updated_at": "2026-10-19T22:28:42.676+03:00",
 *          "show_in_result": true,
 *          "show_in_checkout": true,
 *          "is_indexed": null,
 *          "hide_in_backoffice": null,
 *          "handle": "aks_shipment_id",
 *          "placeholder": null,
 *          "title": null,
 *          "example": null,
 *          "type": "Field::TextField"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listField(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `fields`
  });
}

/**
 * POST /admin/fields.json
 *
 * Examples:
 *
 *      insales.createField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        field: {
 *          "field": {
 *            "type": "Field::TextField",
 *            "office_title": "title_for_text_field",
 *            "destiny": 1,
 *            "handle": "my_awesome_field_1",
 *            "title": "title_for_text_field",
 *            "active": false,
 *            "for_buyer": false,
 *            "show_in_result": false,
 *            "show_in_checkout": false,
 *            "is_indexed": true,
 *            "hide_in_backoffice": true
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
 *        "id": 1232,
 *        "destiny": 1,
 *        "position": 22,
 *        "office_title": "title_for_text_field",
 *        "for_buyer": false,
 *        "obligatory": false,
 *        "active": false,
 *        "system_name": null,
 *        "created_at": "2026-10-21T23:29:39.882+03:00",
 *        "updated_at": "2026-10-21T23:29:39.882+03:00",
 *        "show_in_result": false,
 *        "show_in_checkout": false,
 *        "is_indexed": true,
 *        "hide_in_backoffice": true,
 *        "handle": "my_awesome_field_1",
 *        "placeholder": null,
 *        "title": "title_for_text_field",
 *        "example": null,
 *        "type": "Field::TextField"
 *      }
 *
 *      insales.createField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        field: {
 *          "field": {
 *            "type": "Field::Select",
 *            "office_title": "title_for_select_field",
 *            "destiny": 1,
 *            "handle": "my_select_field_1",
 *            "title": "title_for_select_field",
 *            "active": false,
 *            "for_buyer": false,
 *            "show_in_result": false,
 *            "show_in_checkout": false,
 *            "is_indexed": true,
 *            "hide_in_backoffice": true,
 *            "field_options_attributes": [
 *              {
 *                "value": 1
 *              },
 *              {
 *                "value": 2
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
 *        "id": 1248,
 *        "destiny": 1,
 *        "position": 22,
 *        "office_title": "title_for_select_field",
 *        "for_buyer": false,
 *        "obligatory": false,
 *        "active": false,
 *        "system_name": null,
 *        "created_at": "2026-10-21T23:29:41.631+03:00",
 *        "updated_at": "2026-10-21T23:29:41.631+03:00",
 *        "show_in_result": false,
 *        "show_in_checkout": false,
 *        "is_indexed": true,
 *        "hide_in_backoffice": true,
 *        "handle": "my_select_field_1",
 *        "placeholder": null,
 *        "title": "title_for_select_field",
 *        "example": null,
 *        "type": "Field::Select",
 *        "field_options": [
 *          {
 *            "id": 42,
 *            "position": 1,
 *            "value": "1"
 *          },
 *          {
 *            "id": 50,
 *            "position": 2,
 *            "value": "2"
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.field Required, field
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createField(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `fields`,
    obj: options.field
  });
}

/**
 * DELETE /admin/fields/{field_id}.json
 *
 * Examples:
 *
 *      insales.removeField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: '23'
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
 * @param {number|string} options.fieldid Required, field id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeField(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `fields/${options.fieldid}`
  });
}

/**
 * PUT /admin/fields/{non_select_field_id}.json
 *
 * Examples:
 *
 *      insales.editField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: '2',
 *        field: {
 *          "field": {
 *            "office_title": "state_code",
 *            "title": "State code",
 *            "active": true,
 *            "for_buyer": true,
 *            "obligatory": true,
 *            "show_in_result": true,
 *            "show_in_checkout": true,
 *            "position": 1,
 *            "handle": "my_awesome_field_2",
 *            "is_indexed": true,
 *            "hide_in_backoffice": true
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
 *        "id": 2,
 *        "destiny": 1,
 *        "position": 1,
 *        "office_title": "state_code",
 *        "for_buyer": true,
 *        "obligatory": true,
 *        "active": true,
 *        "system_name": "state",
 *        "created_at": "2010-10-12T13:31:09.692+04:00",
 *        "updated_at": "2026-10-21T23:29:40.198+03:00",
 *        "show_in_result": true,
 *        "show_in_checkout": true,
 *        "is_indexed": true,
 *        "hide_in_backoffice": true,
 *        "handle": "my_awesome_field_2",
 *        "placeholder": null,
 *        "title": "State code",
 *        "example": null,
 *        "type": "Field::SystemTextField"
 *      }
 *
 *      insales.editField({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fieldid: '23',
 *        field: {
 *          "field": {
 *            "office_title": "state_code",
 *            "title": "State code",
 *            "active": true,
 *            "for_buyer": true,
 *            "obligatory": true,
 *            "show_in_result": true,
 *            "show_in_checkout": true,
 *            "position": 2,
 *            "handle": "my_awesome_field_10",
 *            "is_indexed": true,
 *            "hide_in_backoffice": true,
 *            "field_options_attributes": [
 *              {
 *                "value": 10
 *              },
 *              {
 *                "id": 1,
 *                "value": 20
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
 *        "id": 23,
 *        "destiny": 2,
 *        "position": 2,
 *        "office_title": "state_code",
 *        "for_buyer": true,
 *        "obligatory": true,
 *        "active": true,
 *        "system_name": null,
 *        "created_at": "2010-10-12T13:31:09.692+04:00",
 *        "updated_at": "2026-10-21T23:29:41.317+03:00",
 *        "show_in_result": true,
 *        "show_in_checkout": true,
 *        "is_indexed": true,
 *        "hide_in_backoffice": true,
 *        "handle": "my_awesome_field_10",
 *        "placeholder": null,
 *        "title": "State code",
 *        "example": null,
 *        "type": "Field::Select",
 *        "field_options": [
 *          {
 *            "id": 1,
 *            "position": 1,
 *            "value": "20"
 *          },
 *          {
 *            "id": 2,
 *            "position": 2,
 *            "value": "Не передан"
 *          },
 *          {
 *            "id": 18,
 *            "position": 3,
 *            "value": "10"
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.fieldid Required, field id
 * @param {object} options.field Required, field
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editField(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `fields/${options.fieldid}`,
    obj: options.field
  });
}
