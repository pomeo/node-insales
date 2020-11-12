import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/themes/#{theme_id}/widget_types.xml
 *
 * Examples:
 *
 *      insales.listWidgetTypes({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        theme: '643879'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      [{
             'type': 'BlockListWidgetType',
             'handle': 'widget_type_2',
             'name': 'WidgetType 2',
             'snippet_content': 'New text'
             'widget_category_handle': 'drugie',
             'page_kinds': ['all'],
             'widget_list_kinds': ['content'],
             'block_template_handle': 'system-title-and-content'
 *        }]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listWidgetTypes(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `themes/${options.theme}/widget_types`
  });
}

/**
 * GET /admin/themes/#{theme_id}/widget_types/#{id}.xml
 *
 * Examples:
 *
 *      insales.getWidgetType({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        theme: '643879',
 *        widgetId: '60423000'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
           'type': 'BlockListWidgetType',
           'handle': 'widget_type_2',
           'name': 'WidgetType 2',
           'snippet_content': 'New text'
           'widget_category_handle': 'drugie',
           'page_kinds': ['all'],
           'widget_list_kinds': ['content'],
           'block_template_handle': 'system-title-and-content'
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} options.widgetId Required, widget id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getWidgetType(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `themes/${options.theme}/widget_types/${options.widgetId}`
  });
}

/**
 * PUT /admin/themes/#{theme_id}/widget_types/#{id}.xml
 *
 * Examples:
 *
 *      insales.editWidgetType({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        theme: '643879',
 *        widgetId: '60423000',
 *        data: {
 *          'snippet_content': 'New text'
 *        }
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
             'type': 'BlockListWidgetType',
             'handle': 'widget_type_2',
             'name': 'WidgetType 2',
             'snippet_content': 'New text'
             'widget_category_handle': 'drugie',
             'page_kinds': ['all'],
             'widget_list_kinds': ['content'],
             'block_template_handle': 'system-title-and-content'
 *        }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Object} options.data Required, widget content
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} options.widgetId Required, widget id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editWidgetType(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `themes/${options.theme}/widget_types/${options.widgetId}`,
    data: options.data
  });
}

/**
 * POST /admin/themes/#{theme_id}/widget_types.xml
 *
 * Examples:
 *
 *      insales.uploadWidgetType({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        theme: '643879',
 *        data: {
             'type': 'BlockListWidgetType',
             'handle': 'widget_type_2',
             'name': 'WidgetType 2',
             'widget_category_handle': 'drugie',
             'page_kinds': ['all'],
             'widget_list_kinds': ['content'],
             'block_template_handle': 'system-title-and-content'
 *        }
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *        {
             'type': 'BlockListWidgetType',
             'handle': 'widget_type_2',
             'name': 'WidgetType 2',
             'widget_category_handle': 'drugie',
             'page_kinds': ['all'],
             'widget_list_kinds': ['content'],
             'block_template_handle': 'system-title-and-content'
 *        }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} id Required, app id
 * @param {object} options.data Required, widget property
 * @returns {Promise}
 */

export function uploadWidgetType(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `themes/${options.theme}/widget_types`,
    obj: options.data
  });
}

/**
 * DELETE /admin/themes/#{theme_id}/widget_types/#{id}.xml
 *
 * Examples:
 *
 *      insales.removeWidgetType({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        theme: '643879',
 *        widgetId: '60423000'
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      200
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} options.widgetId Required, widget id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeWidgetType(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `themes/${options.theme}/widget_types/${options.widgetId}`
  });
}
