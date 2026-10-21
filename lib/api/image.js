import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/products/{product_id}/images/{image_id}.json
 *
 * Examples:
 *
 *      insales.getImage({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        imageid: '4355'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 4355,
 *        "product_id": 1,
 *        "external_id": null,
 *        "position": 1,
 *        "created_at": "2026-10-21T23:12:42.000+03:00",
 *        "image_processing": true,
 *        "title": null,
 *        "url": "/images/loading.gif",
 *        "original_url": "/images/loading.gif",
 *        "medium_url": "/images/loading.gif",
 *        "small_url": "/images/loading.gif",
 *        "thumb_url": "/images/loading.gif",
 *        "compact_url": "/images/loading.gif",
 *        "large_url": "/images/loading.gif",
 *        "filename": "image.jpg",
 *        "has_bitmap_image": false,
 *        "image_content_type": "image/jpeg"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {number|string} options.imageid Required, image id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getImage(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/images/${options.imageid}`
  });
}

/**
 * GET /admin/products/{product_id}/images.json
 *
 * Examples:
 *
 *      insales.listImage({
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
 *      []
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listImage(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/images`
  });
}

/**
 * POST /admin/products/{product_id}/images.json
 *
 * Examples:
 *
 *      insales.createImage({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        image: {
 *          "image": {
 *            "src": "https://abc.myinsales.ru/images/no_image_compact.jpg"
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
 *        "id": 4371,
 *        "product_id": 1,
 *        "external_id": null,
 *        "position": 1,
 *        "created_at": "2026-10-21T23:12:43.000+03:00",
 *        "image_processing": true,
 *        "title": null,
 *        "url": "/images/loading.gif",
 *        "original_url": "/images/loading.gif",
 *        "medium_url": "/images/loading.gif",
 *        "small_url": "/images/loading.gif",
 *        "thumb_url": "/images/loading.gif",
 *        "compact_url": "/images/loading.gif",
 *        "large_url": "/images/loading.gif",
 *        "filename": "no_image_compact.jpg",
 *        "has_bitmap_image": false,
 *        "image_content_type": "image/jpeg"
 *      }
 *
 *      insales.createImage({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        image: {
 *          "image": {
 *            "attachment": "/9j/4AAQSkZJRgABAQEASABIAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4w\nICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAG\nBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAs\nICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgo\nKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AA\nEQgAWQBkAwEiAAIRAQMRAf/EAB0AAAEEAwEBAAAAAAAAAAAAAAgABQYHAQME\nAgn/xABEEAABAwMBBAYHBgIHCQAAAAABAgMEAAURBgcSITEIE0FRYYEUIjJx\nkbHSIzd1lKGzFRg1QkNSYqLwJSYzY3KCksLT/8QAGQEAAgMBAAAAAAAAAAAA\nAAAAAAEDBAUC/8QAIxEAAgICAgIBBQAAAAAAAAAAAAECEQMEEjEhQVEFEyIz\ngf/aAAwDAQACEQMRAD8AKmlVT7Q9oF4sGqV223NxFthpC0hxoqUSQSeO8O6o\ncvbbd23ktO/w5LiuASWFDP8AmrlzivDY+LqwiaVDwNtl5KlpDUTeQMqHobvA\nfGtLm3G9IRvlFvCOPFUZwf8AtS+7D5EEbSoYv5g7qpwIaNqUonAHo7nP/wAq\n4pHSQujDq2nFWhLiCUqSqO5kEdntV1YBVUqEtfSXvGfVVZvy7n1VpV0mL7n1\nTZfyzn1UwC6pUIKukzqDs/gv5Zz661npM6j7DZfyrn10AGFSoOVdJnU39X+C\n/lXPrr2OkjqlxIDD1jW6R/wxDdz8SrFABh0qZ9IXB67aTs1xlhAkS4bL7m4M\nJ3lIBOB2DJpUAUNt3usew67NzmRm5LLbbSeqcGQSUKA4VV8rag2JoQxY7e2w\nocFdWARU86UPUpvxVKSpbG/F6xCTglPrZwe/FVDb1Q4Vyc9HjIQyyvAku4cc\nHHhugjdB8s+NUtnHjk7mrJY5JKPFPwXBZro07aWp98YMVCsKaQ4d31f76u4d\n3fXq/SrdfYhTYoMVx5KSClZwV45lIJ9Y+GKi1usV01pdWFMOmW2jGX3DlpA7\nCByJ9/Luq2bZpyBpiE21bCHZ6R68pwZDiu0b3+h4VhuEMfn38fBS2c1A26g0\n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\nPbx1i8+dO7ER5A9ZQpxpUxGkNKA5ilW6lQB//9k=\n",
 *            "filename": "image.jpg"
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
 *        "id": 4387,
 *        "product_id": 1,
 *        "external_id": null,
 *        "position": 1,
 *        "created_at": "2026-10-21T23:12:43.000+03:00",
 *        "image_processing": true,
 *        "title": null,
 *        "url": "/images/loading.gif",
 *        "original_url": "/images/loading.gif",
 *        "medium_url": "/images/loading.gif",
 *        "small_url": "/images/loading.gif",
 *        "thumb_url": "/images/loading.gif",
 *        "compact_url": "/images/loading.gif",
 *        "large_url": "/images/loading.gif",
 *        "filename": "image.jpg",
 *        "has_bitmap_image": false,
 *        "image_content_type": "image/jpeg"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {object} options.image Required, image
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createImage(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/images`,
    obj: options.image
  });
}

/**
 * DELETE /admin/products/{product_id}/images/{image_id}.json
 *
 * Examples:
 *
 *      insales.removeImage({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        imageid: '4419'
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
 * @param {number|string} options.productid Required, product id
 * @param {number|string} options.imageid Required, image id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeImage(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/images/${options.imageid}`
  });
}

/**
 * PUT /admin/products/{product_id}/images/{image_id}.json
 *
 * Examples:
 *
 *      insales.editImage({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '1',
 *        imageid: '4403',
 *        image: {
 *          "image": {
 *            "position": 5,
 *            "title": "myimage"
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
 *        "id": 4403,
 *        "product_id": 1,
 *        "external_id": null,
 *        "position": 5,
 *        "created_at": "2026-10-21T23:12:44.000+03:00",
 *        "image_processing": true,
 *        "title": "myimage",
 *        "url": "/images/loading.gif",
 *        "original_url": "/images/loading.gif",
 *        "medium_url": "/images/loading.gif",
 *        "small_url": "/images/loading.gif",
 *        "thumb_url": "/images/loading.gif",
 *        "compact_url": "/images/loading.gif",
 *        "large_url": "/images/loading.gif",
 *        "filename": "image.jpg",
 *        "has_bitmap_image": false,
 *        "image_content_type": "image/jpeg"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {number|string} options.imageid Required, image id
 * @param {object} options.image Required, image
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editImage(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `products/${options.productid}/images/${options.imageid}`,
    obj: options.image
  });
}
