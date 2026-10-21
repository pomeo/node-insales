import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/collects.json
 *
 * Examples:
 *
 *      insales.listCollect({
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
 *          "collection_id": 1,
 *          "product_id": 1,
 *          "position": 1,
 *          "created_at": "2009-03-18T07:53:15.000+03:00"
 *        },
 *        {
 *          "id": 2,
 *          "collection_id": 1,
 *          "product_id": 2,
 *          "position": 2,
 *          "created_at": "2009-03-18T07:53:15.000+03:00"
 *        },
 *        {
 *          "id": 3,
 *          "collection_id": 3,
 *          "product_id": 1,
 *          "position": 3,
 *          "created_at": "2009-03-18T07:53:15.000+03:00"
 *        },
 *        {
 *          "id": 4,
 *          "collection_id": 8,
 *          "product_id": 1,
 *          "position": 1,
 *          "created_at": "2009-03-18T07:53:15.000+03:00"
 *        },
 *        {
 *          "id": 5,
 *          "collection_id": 8,
 *          "product_id": 2,
 *          "position": 2,
 *          "created_at": "2009-03-18T07:53:15.000+03:00"
 *        },
 *        {
 *          "id": 6,
 *          "collection_id": 8,
 *          "product_id": 3,
 *          "position": 3,
 *          "created_at": "2009-03-18T07:53:15.000+03:00"
 *        }
 *      ]
 *
 *      insales.listCollect({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1'
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
 *          "collection_id": 1,
 *          "product_id": 1,
 *          "position": 1,
 *          "created_at": "2009-03-18T07:53:15.000+03:00"
 *        },
 *        {
 *          "id": 3,
 *          "collection_id": 3,
 *          "product_id": 1,
 *          "position": 3,
 *          "created_at": "2009-03-18T07:53:15.000+03:00"
 *        },
 *        {
 *          "id": 4,
 *          "collection_id": 8,
 *          "product_id": 1,
 *          "position": 1,
 *          "created_at": "2009-03-18T07:53:15.000+03:00"
 *        }
 *      ]
 *
 *      insales.listCollect({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectionid: '1'
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
 *          "collection_id": 1,
 *          "product_id": 1,
 *          "position": 1,
 *          "created_at": "2009-03-18T07:53:15.000+03:00"
 *        },
 *        {
 *          "id": 2,
 *          "collection_id": 1,
 *          "product_id": 2,
 *          "position": 2,
 *          "created_at": "2009-03-18T07:53:15.000+03:00"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} [options.productid] Collections of this product
 * @param {number|string} [options.collectionid] Products of this collection
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listCollect(options, id) {
  const query = {};
  if (options.productid) {
    query.product_id = options.productid;
  }
  if (options.collectionid) {
    query.collection_id = options.collectionid;
  }
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `collects`,
    query
  });
}

/**
 * POST /admin/collects.json
 *
 * Examples:
 *
 *      insales.createCollect({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collect: {
 *          "collect": {
 *            "collection_id": 2,
 *            "product_id": 1
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
 *        "id": 10544,
 *        "collection_id": 2,
 *        "product_id": 1,
 *        "position": 1,
 *        "created_at": "2026-10-21T23:17:19.000+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.collect Required, collect
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createCollect(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `collects`,
    obj: options.collect
  });
}

/**
 * DELETE /admin/collects/{collect_id}.json
 *
 * Examples:
 *
 *      insales.removeCollect({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectid: '2'
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
 * @param {number|string} options.collectid Required, collect id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeCollect(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `collects/${options.collectid}`
  });
}

/**
 * PUT /admin/collects/{collect_id}.json
 *
 * Examples:
 *
 *      insales.editCollect({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectid: '2',
 *        collect: {
 *          "collect": {
 *            "position": 3
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
 *        "collection_id": 1,
 *        "product_id": 2,
 *        "position": 3,
 *        "created_at": "2009-03-18T07:53:15.000+03:00"
 *      }
 *
 *      insales.editCollect({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        collectid: '2',
 *        collect: {
 *          "collect": {
 *            "collection_id": 3
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
 *        "collection_id": 3,
 *        "product_id": 2,
 *        "position": 2,
 *        "created_at": "2009-03-18T07:53:15.000+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.collectid Required, collect id
 * @param {object} options.collect Required, collect
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editCollect(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `collects/${options.collectid}`,
    obj: options.collect
  });
}
