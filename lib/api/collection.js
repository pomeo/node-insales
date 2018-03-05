import { get } from '../methods/get';

/**
 * GET /admin/collections/{id}.xml
 *
 * Examples:
 *
 *      insales.getCollection({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectionid: '11111'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { collection:
 *        { 'created-at': '2011-11-11 11:11:11 +0300',
 *          id: '1234567',
 *          'is-hidden': 'true',
 *          'parent-id': '22222',
 *          position: '1',
 *          recursive: '',
 *          'updated-at': '2011-11-11 11:11:11 +0300',
 *          title: 'Name 1',
 *          description: '',
 *          'html-title': '',
 *          'meta-description': '',
 *          'meta-keywords': '',
 *          permalink: 'name1',
 *          url: '/collection/name1',
 *          'seo-description': '' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.collectionid. Required, collection id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getCollection(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `collections/${options.collectionid}`
  });
}

/**
 * GET /admin/collections.xml
 *
 * Examples:
 *
 *      insales.listCollection({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'collections':
 *         { 'collection':
 *            [{ 'created-at': '2011-11-11 11:11:11 +0300',
 *              id: '1234567',
 *              'is-hidden': 'true',
 *              'parent-id': '11111',
 *              position: '1',
 *              recursive: '',
 *              'updated-at': '2011-11-11 11:11:11 +0300',
 *              title: 'Name 1',
 *              description: '',
 *              'html-title': '',
 *              'meta-description': '',
 *              'meta-keywords': '',
 *              permalink: 'name1',
 *              url: '/collection/name1',
 *              'seo-description': '' },
 *             {'created-at': '2011-11-11 11:11:11 +0300',
 *               id: '12345678',
 *               'is-hidden': 'true',
 *               'parent-id': '11111',
 *               position: '2',
 *               recursive: '',
 *               'updated-at': '2011-11-11 11:11:11 +0300',
 *               title: 'Name 2',
 *               description: '',
 *               'html-title': '',
 *               'meta-description': '',
 *               'meta-keywords': '',
 *               permalink: 'name2',
 *               url: '/collection/name2',
 *               'seo-description': ''}]}}
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listCollection(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: 'collections'
  });
}
