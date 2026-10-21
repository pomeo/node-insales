import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/blogs/{blog_id}/articles/{article_id}.json
 *
 * Examples:
 *
 *      insales.getArticle({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        blogid: '1',
 *        articleid: '2'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 2,
 *        "created_at": "2026-10-20T12:13:53.000+03:00",
 *        "updated_at": "2026-10-21T23:05:52.000+03:00",
 *        "published_at": "2017-03-01T07:53:15.000+03:00",
 *        "pinned": false,
 *        "custom_template": null,
 *        "title": "Второая Статья",
 *        "author": "Ivan",
 *        "permalink": "statya-2",
 *        "html_title": null,
 *        "meta_keywords": null,
 *        "meta_description": null,
 *        "image": {
 *          "id": 1,
 *          "created_at": "2026-10-19T22:28:42.000+03:00",
 *          "original_url": "http://minio.insales.io:9000/insales-test-sber/images/articles/1/1/1/article_image_1.jpg"
 *        },
 *        "tags": [
 *          {
 *            "title": "test"
 *          },
 *          {
 *            "title": "test2"
 *          }
 *        ],
 *        "related_products": [
 *          {
 *            "category_id": 1,
 *            "created_at": "2026-10-21T14:10:26.000+03:00",
 *            "updated_at": "2015-07-27T17:05:35.000+03:00",
 *            "is_hidden": false,
 *            "account_id": 1,
 *            "title_translations": [
 *              "Cool t-shirt"
 *            ],
 *            "available": false,
 *            "archived": false,
 *            "key": null,
 *            "price_min_cached": "10.0",
 *            "price_max_cached": "10.0",
 *            "price_min_available_cached": null,
 *            "price_max_available_cached": null,
 *            "canonical_url_collection_id": 1,
 *            "collections_id": [
 *              1,
 *              3,
 *              8
 *            ],
 *            "characteristics_id": [
 *              7,
 *              9,
 *              12,
 *              13
 *            ],
 *            "custom_layout": null,
 *            "custom_template": null,
 *            "old_price_min_cached": null,
 *            "old_price_max_cached": null,
 *            "old_price_min_available_cached": null,
 *            "old_price_max_available_cached": null,
 *            "permalink": "футболка",
 *            "unit": "pce",
 *            "deleted": false,
 *            "cost_price_min_cached": null,
 *            "cost_price_max_cached": null,
 *            "stock_currency_id": 1,
 *            "sort_weight": null,
 *            "bundle": null,
 *            "ignore_discounts": null,
 *            "vat": -1,
 *            "dimensions": "10x20x30",
 *            "fiscal_product_type": 1,
 *            "popularity": null,
 *            "available_at_warehouses": [],
 *            "auto_assign_bundle_price": null,
 *            "demo": null,
 *            "sales_channels_id": null,
 *            "demo_thematic": null,
 *            "reviews_average_rating_cached": null,
 *            "reviews_count_cached": null,
 *            "merge_product_id": null,
 *            "merge_group_product_id": null,
 *            "merge_group_hidden": null,
 *            "no_delivery": false,
 *            "id": 1,
 *            "main_image_id": null,
 *            "is_adult": false,
 *            "title": "Cool t-shirt"
 *          }
 *        ],
 *        "notice": "Второй анонс",
 *        "content": "Привет"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.blogid Required, blog id
 * @param {number|string} options.articleid Required, article id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getArticle(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `blogs/${options.blogid}/articles/${options.articleid}`
  });
}

/**
 * GET /admin/blogs/{blog_id}/articles.json
 *
 * Examples:
 *
 *      insales.listArticle({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        blogid: '1'
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
 *          "created_at": "2026-10-20T12:13:53.000+03:00",
 *          "updated_at": "2026-10-21T23:05:50.000+03:00",
 *          "published_at": "2017-03-01T07:53:15.000+03:00",
 *          "pinned": false,
 *          "custom_template": null,
 *          "title": "Второая Статья",
 *          "author": "Ivan",
 *          "permalink": "statya-2",
 *          "html_title": null,
 *          "meta_keywords": null,
 *          "meta_description": null,
 *          "image": {
 *            "id": 1,
 *            "created_at": "2026-10-19T22:28:42.000+03:00",
 *            "original_url": "http://minio.insales.io:9000/insales-test-sber/images/articles/1/1/1/article_image_1.jpg"
 *          },
 *          "tags": [
 *            {
 *              "title": "test"
 *            },
 *            {
 *              "title": "test2"
 *            }
 *          ],
 *          "related_products": [
 *            {
 *              "category_id": 1,
 *              "created_at": "2026-10-21T14:10:26.000+03:00",
 *              "updated_at": "2015-07-27T17:05:35.000+03:00",
 *              "is_hidden": false,
 *              "account_id": 1,
 *              "title_translations": [
 *                "Cool t-shirt"
 *              ],
 *              "available": false,
 *              "archived": false,
 *              "key": null,
 *              "price_min_cached": "10.0",
 *              "price_max_cached": "10.0",
 *              "price_min_available_cached": null,
 *              "price_max_available_cached": null,
 *              "canonical_url_collection_id": 1,
 *              "collections_id": [
 *                1,
 *                3,
 *                8
 *              ],
 *              "characteristics_id": [
 *                7,
 *                9,
 *                12,
 *                13
 *              ],
 *              "custom_layout": null,
 *              "custom_template": null,
 *              "old_price_min_cached": null,
 *              "old_price_max_cached": null,
 *              "old_price_min_available_cached": null,
 *              "old_price_max_available_cached": null,
 *              "permalink": "футболка",
 *              "unit": "pce",
 *              "deleted": false,
 *              "cost_price_min_cached": null,
 *              "cost_price_max_cached": null,
 *              "stock_currency_id": 1,
 *              "sort_weight": null,
 *              "bundle": null,
 *              "ignore_discounts": null,
 *              "vat": -1,
 *              "dimensions": "10x20x30",
 *              "fiscal_product_type": 1,
 *              "popularity": null,
 *              "available_at_warehouses": [],
 *              "auto_assign_bundle_price": null,
 *              "demo": null,
 *              "sales_channels_id": null,
 *              "demo_thematic": null,
 *              "reviews_average_rating_cached": null,
 *              "reviews_count_cached": null,
 *              "merge_product_id": null,
 *              "merge_group_product_id": null,
 *              "merge_group_hidden": null,
 *              "no_delivery": false,
 *              "id": 1,
 *              "main_image_id": null,
 *              "is_adult": false,
 *              "title": "Cool t-shirt"
 *            }
 *          ],
 *          "notice": "Второй анонс",
 *          "content": "Привет"
 *        },
 *        {
 *          "id": 1,
 *          "created_at": "2026-10-20T12:13:53.000+03:00",
 *          "updated_at": "2026-10-20T12:13:53.000+03:00",
 *          "published_at": "2009-03-18T07:53:15.000+03:00",
 *          "pinned": false,
 *          "custom_template": null,
 *          "title": "Статья",
 *          "author": "Ivan",
 *          "permalink": "statya",
 *          "html_title": null,
 *          "meta_keywords": null,
 *          "meta_description": null,
 *          "tags": [],
 *          "related_products": [],
 *          "notice": "Первый анонс",
 *          "content": "Первая статья"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.blogid Required, blog id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listArticle(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `blogs/${options.blogid}/articles`
  });
}

/**
 * POST /admin/blogs/{blog_id}/articles.json
 *
 * Examples:
 *
 *      insales.createArticle({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        blogid: '1',
 *        article: {
 *          "article": {
 *            "title": "new article",
 *            "content": "<p>content of my article<p>",
 *            "notice": "some notice",
 *            "published_at": "2014-09-09",
 *            "author": "My Name is panda",
 *            "permalink": "first_article",
 *            "html_title": "HTML TAG TITLE",
 *            "meta_keywords": "new cool products",
 *            "meta_description": "It's a article about our new products",
 *            "image_attributes": {
 *              "src": "https://abc.myinsales.ru/images/no_image_compact.jpg"
 *            },
 *            "related_products_attributes": [
 *              {
 *                "product_id": 1
 *              }
 *            ],
 *            "all_tags": [
 *              "test3",
 *              "test4"
 *            ],
 *            "pinned": true
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
 *        "id": 332,
 *        "created_at": "2026-10-21T23:05:53.000+03:00",
 *        "updated_at": "2026-10-21T23:05:53.000+03:00",
 *        "published_at": "2014-09-09T00:00:00.000+04:00",
 *        "pinned": true,
 *        "custom_template": null,
 *        "title": "new article",
 *        "author": "My Name is panda",
 *        "permalink": "first_article",
 *        "html_title": "HTML TAG TITLE",
 *        "meta_keywords": "new cool products",
 *        "meta_description": "It's a article about our new products",
 *        "image": {
 *          "id": 17,
 *          "created_at": "2026-10-21T23:05:53.000+03:00",
 *          "original_url": "/images/loading.gif"
 *        },
 *        "tags": [
 *          {
 *            "title": "test3"
 *          },
 *          {
 *            "title": "test4"
 *          }
 *        ],
 *        "related_products": [
 *          {
 *            "category_id": 1,
 *            "created_at": "2026-10-21T14:10:26.000+03:00",
 *            "updated_at": "2015-07-27T17:05:35.000+03:00",
 *            "is_hidden": false,
 *            "account_id": 1,
 *            "title_translations": [
 *              "Cool t-shirt"
 *            ],
 *            "available": false,
 *            "archived": false,
 *            "key": null,
 *            "price_min_cached": "10.0",
 *            "price_max_cached": "10.0",
 *            "price_min_available_cached": null,
 *            "price_max_available_cached": null,
 *            "canonical_url_collection_id": 1,
 *            "collections_id": [
 *              1,
 *              3,
 *              8
 *            ],
 *            "characteristics_id": [
 *              7,
 *              9,
 *              12,
 *              13
 *            ],
 *            "custom_layout": null,
 *            "custom_template": null,
 *            "old_price_min_cached": null,
 *            "old_price_max_cached": null,
 *            "old_price_min_available_cached": null,
 *            "old_price_max_available_cached": null,
 *            "permalink": "футболка",
 *            "unit": "pce",
 *            "deleted": false,
 *            "cost_price_min_cached": null,
 *            "cost_price_max_cached": null,
 *            "stock_currency_id": 1,
 *            "sort_weight": null,
 *            "bundle": null,
 *            "ignore_discounts": null,
 *            "vat": -1,
 *            "dimensions": "10x20x30",
 *            "fiscal_product_type": 1,
 *            "popularity": null,
 *            "available_at_warehouses": [],
 *            "auto_assign_bundle_price": null,
 *            "demo": null,
 *            "sales_channels_id": null,
 *            "demo_thematic": null,
 *            "reviews_average_rating_cached": null,
 *            "reviews_count_cached": null,
 *            "merge_product_id": null,
 *            "merge_group_product_id": null,
 *            "merge_group_hidden": null,
 *            "no_delivery": false,
 *            "id": 1,
 *            "main_image_id": null,
 *            "is_adult": false,
 *            "title": "Cool t-shirt"
 *          }
 *        ],
 *        "notice": "some notice",
 *        "content": "<p>content of my article<p>"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.blogid Required, blog id
 * @param {object} options.article Required, article
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createArticle(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `blogs/${options.blogid}/articles`,
    obj: options.article
  });
}

/**
 * DELETE /admin/blogs/{blog_id}/articles/{article_id}.json
 *
 * Examples:
 *
 *      insales.removeArticle({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        blogid: '1',
 *        articleid: '2'
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
 * @param {number|string} options.blogid Required, blog id
 * @param {number|string} options.articleid Required, article id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeArticle(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `blogs/${options.blogid}/articles/${options.articleid}`
  });
}

/**
 * PUT /admin/blogs/{blog_id}/articles/{article_id}.json
 *
 * Examples:
 *
 *      insales.editArticle({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        blogid: '1',
 *        articleid: '2',
 *        article: {
 *          "article": {
 *            "title": "new title",
 *            "image_attributes": {
 *              "src": "https://abc.myinsales.ru/images/no_image_compact.jpg"
 *            },
 *            "all_tags": [
 *              "test",
 *              "test3"
 *            ],
 *            "pinned": true
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
 *        "created_at": "2026-10-20T12:13:53.000+03:00",
 *        "updated_at": "2026-10-21T23:05:55.000+03:00",
 *        "published_at": "2017-03-01T07:53:15.000+03:00",
 *        "pinned": true,
 *        "custom_template": null,
 *        "title": "new title",
 *        "author": "Ivan",
 *        "permalink": "statya-2",
 *        "html_title": null,
 *        "meta_keywords": null,
 *        "meta_description": null,
 *        "image": {
 *          "id": 33,
 *          "created_at": "2026-10-21T23:05:55.000+03:00",
 *          "original_url": "/images/loading.gif"
 *        },
 *        "tags": [
 *          {
 *            "title": "test"
 *          },
 *          {
 *            "title": "test3"
 *          }
 *        ],
 *        "related_products": [
 *          {
 *            "category_id": 1,
 *            "created_at": "2026-10-21T14:10:26.000+03:00",
 *            "updated_at": "2015-07-27T17:05:35.000+03:00",
 *            "is_hidden": false,
 *            "account_id": 1,
 *            "title_translations": [
 *              "Cool t-shirt"
 *            ],
 *            "available": false,
 *            "archived": false,
 *            "key": null,
 *            "price_min_cached": "10.0",
 *            "price_max_cached": "10.0",
 *            "price_min_available_cached": null,
 *            "price_max_available_cached": null,
 *            "canonical_url_collection_id": 1,
 *            "collections_id": [
 *              1,
 *              3,
 *              8
 *            ],
 *            "characteristics_id": [
 *              7,
 *              9,
 *              12,
 *              13
 *            ],
 *            "custom_layout": null,
 *            "custom_template": null,
 *            "old_price_min_cached": null,
 *            "old_price_max_cached": null,
 *            "old_price_min_available_cached": null,
 *            "old_price_max_available_cached": null,
 *            "permalink": "футболка",
 *            "unit": "pce",
 *            "deleted": false,
 *            "cost_price_min_cached": null,
 *            "cost_price_max_cached": null,
 *            "stock_currency_id": 1,
 *            "sort_weight": null,
 *            "bundle": null,
 *            "ignore_discounts": null,
 *            "vat": -1,
 *            "dimensions": "10x20x30",
 *            "fiscal_product_type": 1,
 *            "popularity": null,
 *            "available_at_warehouses": [],
 *            "auto_assign_bundle_price": null,
 *            "demo": null,
 *            "sales_channels_id": null,
 *            "demo_thematic": null,
 *            "reviews_average_rating_cached": null,
 *            "reviews_count_cached": null,
 *            "merge_product_id": null,
 *            "merge_group_product_id": null,
 *            "merge_group_hidden": null,
 *            "no_delivery": false,
 *            "id": 1,
 *            "main_image_id": null,
 *            "is_adult": false,
 *            "title": "Cool t-shirt"
 *          }
 *        ],
 *        "notice": "Второй анонс",
 *        "content": "Привет"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.blogid Required, blog id
 * @param {number|string} options.articleid Required, article id
 * @param {object} options.article Required, article
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editArticle(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `blogs/${options.blogid}/articles/${options.articleid}`,
    obj: options.article
  });
}
