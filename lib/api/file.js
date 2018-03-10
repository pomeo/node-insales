import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';

/**
 * GET /admin/files.xml
 *
 * Examples:
 *
 *      insales.listFile({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'files':
 *         { 'file':
 *            [{ 'created-at': '2011-11-11T11:11:11+03:00',
 *              id: '11111',
 *              'absolute-url': 'http://static2.insales.ru/files/1/6050/194466/original/1.gif' },
 *             { 'created-at': '2011-11-11T11:11:11+03:00',
 *              id: '11112',
 *              'absolute-url': 'http://static2.insales.ru/files/1/6050/194466/original/1.gif' }]}}
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} [options.page=1] Page
 * @param {number|string} [options.per_page=250] Files per page
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listFile(options, id) {
  const query = {};
  query.page = options.page ? options.page : 1;
  query.per_page = options.per_page ? options.per_page : 250;

  return get({
    id,
    token: options.token,
    url: options.url,
    api: `files`,
    query
  });
}

/**
 * DELETE /admin/files/{id}.xml
 *
 * Examples:
 *
 *      insales.removeFile({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        fileid: '12345'
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
 * @param {number|string} options.fileid Required, file id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeFile(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `files/${options.fileid}`
  });
}

/**
 * POST /admin/files.xml
 *
 * Examples:
 *
 *      insales.uploadFile({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        files: {
 *           'file': {
 *             'src': 'http://url'
 *           }
 *        }
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { file:
 *        { 'created-at': '2011-11-11T11:11:11+03:00',
 *          id: '111111',
 *          'absolute-url': 'http://static-internal.insales.ru' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.file Required, url to file
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function uploadFile(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: 'files',
    obj: options.files
  });
}
