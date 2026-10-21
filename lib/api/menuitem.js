import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/menus/{menu_id}/items/{item_id}.json
 *
 * Examples:
 *
 *      insales.getMenuItem({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        menuid: '1',
 *        itemid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "position": 1,
 *        "title": "About",
 *        "url": "/about",
 *        "related_object_id": "Page_0"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.menuid Required, menu id
 * @param {number|string} options.itemid Required, menu item id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getMenuItem(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `menus/${options.menuid}/items/${options.itemid}`
  });
}

/**
 * GET /admin/menus/{menu_id}/items.json
 *
 * Examples:
 *
 *      insales.listMenuItem({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        menuid: '1'
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
 *          "position": 1,
 *          "title": "About",
 *          "url": "/about",
 *          "related_object_id": "Page_0"
 *        },
 *        {
 *          "id": 2,
 *          "position": 2,
 *          "title": "Доставка",
 *          "url": "/delivery",
 *          "related_object_id": "Page_0"
 *        },
 *        {
 *          "id": 3,
 *          "position": 3,
 *          "title": "Страница",
 *          "url": "/",
 *          "related_object_id": "Page_1"
 *        },
 *        {
 *          "id": 4,
 *          "position": 4,
 *          "title": "Категория",
 *          "url": "/collection/футболка",
 *          "related_object_id": "Collection_1"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.menuid Required, menu id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listMenuItem(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `menus/${options.menuid}/items`
  });
}

/**
 * POST /admin/menus/{menu_id}/items.json
 *
 * Examples:
 *
 *      insales.createMenuItem({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        menuid: '1',
 *        menuitem: {
 *          "menu_item": {
 *            "title": "new item",
 *            "related_object_id": "Page_1"
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
 *        "id": 732,
 *        "position": 5,
 *        "title": "new item",
 *        "url": "/",
 *        "related_object_id": "Page_1"
 *      }
 *
 *      insales.createMenuItem({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        menuid: '1',
 *        menuitem: {
 *          "menu_item": {
 *            "title": "new item",
 *            "related_object_id": "Collection_1"
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
 *        "id": 740,
 *        "position": 5,
 *        "title": "new item",
 *        "url": "/collection/футболка",
 *        "related_object_id": "Collection_1"
 *      }
 *
 *      insales.createMenuItem({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        menuid: '1',
 *        menuitem: {
 *          "menu_item": {
 *            "title": "new item",
 *            "related_object_id": "Blog_1"
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
 *        "id": 748,
 *        "position": 5,
 *        "title": "new item",
 *        "url": "/blog",
 *        "related_object_id": "Blog_1"
 *      }
 *
 *      insales.createMenuItem({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        menuid: '1',
 *        menuitem: {
 *          "menu_item": {
 *            "title": "new item",
 *            "url": "http://my-another-shop.com/"
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
 *        "id": 756,
 *        "position": 5,
 *        "title": "new item",
 *        "url": "http://my-another-shop.com/",
 *        "related_object_id": "Page_0"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.menuid Required, menu id
 * @param {object} options.menuitem Required, menu item
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createMenuItem(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `menus/${options.menuid}/items`,
    obj: options.menuitem
  });
}

/**
 * DELETE /admin/menus/{menu_id}/items/{item_id}.json
 *
 * Examples:
 *
 *      insales.removeMenuItem({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        menuid: '1',
 *        itemid: '1'
 *      }).then(output => {
 *        console.info(output.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      200
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.menuid Required, menu id
 * @param {number|string} options.itemid Required, menu item id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeMenuItem(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `menus/${options.menuid}/items/${options.itemid}`
  });
}

/**
 * PUT /admin/menus/{menu_id}/items/{item_id}.json
 *
 * Examples:
 *
 *      insales.editMenuItem({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        menuid: '1',
 *        itemid: '1',
 *        menuitem: {
 *          "menu_item": {
 *            "title": "last menu item",
 *            "position": 1000
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
 *        "id": 1,
 *        "position": 1000,
 *        "title": "last menu item",
 *        "url": "/about",
 *        "related_object_id": "Page_0"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.menuid Required, menu id
 * @param {number|string} options.itemid Required, menu item id
 * @param {object} options.menuitem Required, menu item
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editMenuItem(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `menus/${options.menuid}/items/${options.itemid}`,
    obj: options.menuitem
  });
}
