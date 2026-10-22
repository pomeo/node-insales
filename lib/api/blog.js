import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/blogs/{blog_id}.json
 *
 * Examples:
 *
 *      insales.getBlog({
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
 *      {
 *        "id": 1,
 *        "commentable": "no",
 *        "notify_about_comment": true,
 *        "captcha_enabled": false,
 *        "disallow_links_in_comments": false,
 *        "custom_template": null,
 *        "handle": null,
 *        "title": "Блог",
 *        "html_title": null,
 *        "meta_keywords": null,
 *        "meta_description": null,
 *        "tags": [
 *          {
 *            "title": "test"
 *          },
 *          {
 *            "title": "test2"
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.blogid Required, blog id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getBlog(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `blogs/${options.blogid}`
  });
}

/**
 * GET /admin/blogs.json
 *
 * Examples:
 *
 *      insales.listBlog({
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
 *          "commentable": "no",
 *          "notify_about_comment": true,
 *          "captcha_enabled": false,
 *          "disallow_links_in_comments": false,
 *          "custom_template": null,
 *          "handle": null,
 *          "title": "Блог",
 *          "html_title": null,
 *          "meta_keywords": null,
 *          "meta_description": null,
 *          "tags": [
 *            {
 *              "title": "test"
 *            },
 *            {
 *              "title": "test2"
 *            }
 *          ]
 *        },
 *        {
 *          "id": 2,
 *          "commentable": "no",
 *          "notify_about_comment": true,
 *          "captcha_enabled": false,
 *          "disallow_links_in_comments": false,
 *          "custom_template": null,
 *          "handle": "second_blog",
 *          "title": "Second blog",
 *          "html_title": null,
 *          "meta_keywords": null,
 *          "meta_description": null,
 *          "tags": []
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listBlog(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `blogs`
  });
}

/**
 * POST /admin/blogs.json
 *
 * Examples:
 *
 *      insales.createBlog({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        blog: {
 *          "blog": {
 *            "title": "SuperBlog",
 *            "html_title": "HTML TAG TITLE",
 *            "meta_keywords": "new cool products",
 *            "meta_description": "It's a blog about our new products"
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
 *        "id": 283,
 *        "commentable": "no",
 *        "notify_about_comment": true,
 *        "captcha_enabled": false,
 *        "disallow_links_in_comments": false,
 *        "custom_template": null,
 *        "handle": "superblog",
 *        "title": "SuperBlog",
 *        "html_title": "HTML TAG TITLE",
 *        "meta_keywords": "new cool products",
 *        "meta_description": "It's a blog about our new products",
 *        "tags": []
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.blog Required, blog
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createBlog(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `blogs`,
    obj: options.blog
  });
}

/**
 * DELETE /admin/blogs/{blog_id}.json
 *
 * Examples:
 *
 *      insales.removeBlog({
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
 *      {
 *        "status": "ok"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.blogid Required, blog id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeBlog(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `blogs/${options.blogid}`
  });
}

/**
 * PUT /admin/blogs/{blog_id}.json
 *
 * Examples:
 *
 *      insales.editBlog({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        blogid: '1',
 *        blog: {
 *          "blog": {
 *            "title": "WowBlog",
 *            "notify_about_comment": false,
 *            "captcha_enabled": true,
 *            "disallow_links_in_comments": true,
 *            "commentable": "yes"
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
 *        "commentable": "yes",
 *        "notify_about_comment": false,
 *        "captcha_enabled": true,
 *        "disallow_links_in_comments": true,
 *        "custom_template": null,
 *        "handle": "wowblog",
 *        "title": "WowBlog",
 *        "html_title": null,
 *        "meta_keywords": null,
 *        "meta_description": null,
 *        "tags": [
 *          {
 *            "title": "test"
 *          },
 *          {
 *            "title": "test2"
 *          }
 *        ]
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.blogid Required, blog id
 * @param {object} options.blog Required, blog
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editBlog(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `blogs/${options.blogid}`,
    obj: options.blog
  });
}
