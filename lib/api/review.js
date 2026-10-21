import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

/**
 * GET /admin/reviews/{review_id}.json
 *
 * Examples:
 *
 *      insales.getReview({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        reviewid: '1'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 1,
 *        "product_id": 1,
 *        "author": "Автор 1",
 *        "content": "Отличный продукт!",
 *        "email": "email1@example.com",
 *        "rating": 5,
 *        "manager_name": null,
 *        "published": true,
 *        "created_at": "2023-09-01T13:00:00.000+03:00",
 *        "updated_at": "2023-09-01T13:00:00.000+03:00",
 *        "manager_reply": "nil",
 *        "replied_at": null,
 *        "spam": false,
 *        "published_at": null,
 *        "replied_q": false,
 *        "title": "Cool t-shirt",
 *        "url": "/product/футболка",
 *        "first_image": {
 *          "id": null,
 *          "product_id": null,
 *          "external_id": null,
 *          "position": null,
 *          "created_at": null,
 *          "image_processing": null,
 *          "title": null,
 *          "url": "/images/no_image_thumb.jpg",
 *          "original_url": "/images/no_image_original.jpg",
 *          "medium_url": "/images/no_image_medium.jpg",
 *          "small_url": "/images/no_image_micro.jpg",
 *          "thumb_url": "/images/no_image_thumb.jpg",
 *          "compact_url": "/images/no_image_compact.jpg",
 *          "large_url": "/images/no_image_large.jpg",
 *          "filename": null,
 *          "has_bitmap_image": false,
 *          "image_content_type": null
 *        },
 *        "image": {
 *          "id": 1,
 *          "created_at": "2023-09-01T13:00:00.000+03:00",
 *          "original_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/image_1.jpg",
 *          "medium_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/medium_image_1.jpg",
 *          "small_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/micro_image_1.jpg",
 *          "thumb_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/thumb_image_1.jpg",
 *          "compact_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/compact_image_1.jpg",
 *          "large_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/large_image_1.jpg",
 *          "image_content_type": "image/jpeg"
 *        }
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.reviewid Required, review id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getReview(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `reviews/${options.reviewid}`
  });
}

/**
 * GET /admin/reviews.json
 *
 * Examples:
 *
 *      insales.listReview({
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
 *          "id": 10,
 *          "product_id": 2,
 *          "author": "Автор 10",
 *          "content": "Быстрая доставка, хороший сервис.",
 *          "email": "email10@example.com",
 *          "rating": 3,
 *          "manager_name": null,
 *          "published": false,
 *          "created_at": "2023-09-10T18:00:00.000+03:00",
 *          "updated_at": "2023-09-10T18:00:00.000+03:00",
 *          "manager_reply": "nil",
 *          "replied_at": null,
 *          "spam": false,
 *          "published_at": null,
 *          "replied_q": false,
 *          "title": "shirt",
 *          "url": "/product/shirt",
 *          "first_image": {
 *            "id": null,
 *            "product_id": null,
 *            "external_id": null,
 *            "position": null,
 *            "created_at": null,
 *            "image_processing": null,
 *            "title": null,
 *            "url": "/images/no_image_thumb.jpg",
 *            "original_url": "/images/no_image_original.jpg",
 *            "medium_url": "/images/no_image_medium.jpg",
 *            "small_url": "/images/no_image_micro.jpg",
 *            "thumb_url": "/images/no_image_thumb.jpg",
 *            "compact_url": "/images/no_image_compact.jpg",
 *            "large_url": "/images/no_image_large.jpg",
 *            "filename": null,
 *            "has_bitmap_image": false,
 *            "image_content_type": null
 *          }
 *        },
 *        {
 *          "id": 9,
 *          "product_id": 1,
 *          "author": "Автор 9",
 *          "content": "Отличный продукт, рекомендую!",
 *          "email": "email9@example.com",
 *          "rating": 5,
 *          "manager_name": null,
 *          "published": true,
 *          "created_at": "2023-09-09T12:00:00.000+03:00",
 *          "updated_at": "2023-09-09T12:00:00.000+03:00",
 *          "manager_reply": "Спасибо за ваш отзыв!",
 *          "replied_at": null,
 *          "spam": false,
 *          "published_at": null,
 *          "replied_q": false,
 *          "title": "Cool t-shirt",
 *          "url": "/product/футболка",
 *          "first_image": {
 *            "id": null,
 *            "product_id": null,
 *            "external_id": null,
 *            "position": null,
 *            "created_at": null,
 *            "image_processing": null,
 *            "title": null,
 *            "url": "/images/no_image_thumb.jpg",
 *            "original_url": "/images/no_image_original.jpg",
 *            "medium_url": "/images/no_image_medium.jpg",
 *            "small_url": "/images/no_image_micro.jpg",
 *            "thumb_url": "/images/no_image_thumb.jpg",
 *            "compact_url": "/images/no_image_compact.jpg",
 *            "large_url": "/images/no_image_large.jpg",
 *            "filename": null,
 *            "has_bitmap_image": false,
 *            "image_content_type": null
 *          }
 *        },
 *        {
 *          "id": 7,
 *          "product_id": 7,
 *          "author": "Автор 7",
 *          "content": "Понравился, всё работает.",
 *          "email": "email7@example.com",
 *          "rating": 5,
 *          "manager_name": null,
 *          "published": true,
 *          "created_at": "2023-09-07T13:30:00.000+03:00",
 *          "updated_at": "2023-09-07T13:30:00.000+03:00",
 *          "manager_reply": "Спасибо за ваш отзыв!",
 *          "replied_at": null,
 *          "spam": false,
 *          "published_at": null,
 *          "replied_q": false,
 *          "title": "fb_product",
 *          "url": "/product/fb_product",
 *          "first_image": {
 *            "id": null,
 *            "product_id": null,
 *            "external_id": null,
 *            "position": null,
 *            "created_at": null,
 *            "image_processing": null,
 *            "title": null,
 *            "url": "/images/no_image_thumb.jpg",
 *            "original_url": "/images/no_image_original.jpg",
 *            "medium_url": "/images/no_image_medium.jpg",
 *            "small_url": "/images/no_image_micro.jpg",
 *            "thumb_url": "/images/no_image_thumb.jpg",
 *            "compact_url": "/images/no_image_compact.jpg",
 *            "large_url": "/images/no_image_large.jpg",
 *            "filename": null,
 *            "has_bitmap_image": false,
 *            "image_content_type": null
 *          }
 *        },
 *        {
 *          "id": 6,
 *          "product_id": 6,
 *          "author": "Автор 6",
 *          "content": "Средний продукт, есть лучше.",
 *          "email": "email6@example.com",
 *          "rating": 3,
 *          "manager_name": null,
 *          "published": true,
 *          "created_at": "2023-09-06T11:00:00.000+03:00",
 *          "updated_at": "2023-09-06T11:00:00.000+03:00",
 *          "manager_reply": "Спасибо за ваш отзыв.",
 *          "replied_at": null,
 *          "spam": false,
 *          "published_at": null,
 *          "replied_q": false,
 *          "title": "pants",
 *          "url": "/product/pants",
 *          "first_image": {
 *            "id": null,
 *            "product_id": null,
 *            "external_id": null,
 *            "position": null,
 *            "created_at": null,
 *            "image_processing": null,
 *            "title": null,
 *            "url": "/images/no_image_thumb.jpg",
 *            "original_url": "/images/no_image_original.jpg",
 *            "medium_url": "/images/no_image_medium.jpg",
 *            "small_url": "/images/no_image_micro.jpg",
 *            "thumb_url": "/images/no_image_thumb.jpg",
 *            "compact_url": "/images/no_image_compact.jpg",
 *            "large_url": "/images/no_image_large.jpg",
 *            "filename": null,
 *            "has_bitmap_image": false,
 *            "image_content_type": null
 *          }
 *        },
 *        {
 *          "id": 5,
 *          "product_id": 5,
 *          "author": "Автор 5",
 *          "content": "Отличная цена-качество!",
 *          "email": "email5@example.com",
 *          "rating": 5,
 *          "manager_name": null,
 *          "published": true,
 *          "created_at": "2023-09-05T17:00:00.000+03:00",
 *          "updated_at": "2023-09-05T17:00:00.000+03:00",
 *          "manager_reply": "Рады, что вам понравилось!",
 *          "replied_at": null,
 *          "spam": false,
 *          "published_at": null,
 *          "replied_q": false,
 *          "title": "shirt & pants",
 *          "url": "/product/shirt_and_pants",
 *          "first_image": {
 *            "id": null,
 *            "product_id": null,
 *            "external_id": null,
 *            "position": null,
 *            "created_at": null,
 *            "image_processing": null,
 *            "title": null,
 *            "url": "/images/no_image_thumb.jpg",
 *            "original_url": "/images/no_image_original.jpg",
 *            "medium_url": "/images/no_image_medium.jpg",
 *            "small_url": "/images/no_image_micro.jpg",
 *            "thumb_url": "/images/no_image_thumb.jpg",
 *            "compact_url": "/images/no_image_compact.jpg",
 *            "large_url": "/images/no_image_large.jpg",
 *            "filename": null,
 *            "has_bitmap_image": false,
 *            "image_content_type": null
 *          }
 *        },
 *        {
 *          "id": 4,
 *          "product_id": 4,
 *          "author": "Автор 4",
 *          "content": "Продукт нормальный, но требует доработки.",
 *          "email": "email4@example.com",
 *          "rating": 4,
 *          "manager_name": null,
 *          "published": true,
 *          "created_at": "2023-09-04T12:00:00.000+03:00",
 *          "updated_at": "2023-09-04T12:00:00.000+03:00",
 *          "manager_reply": "Спасибо за ваш отзыв. Мы работаем над улучшениями.",
 *          "replied_at": null,
 *          "spam": false,
 *          "published_at": null,
 *          "replied_q": false,
 *          "title": "shirt & t-short",
 *          "url": "/product/shirt_and_tshort",
 *          "first_image": {
 *            "id": null,
 *            "product_id": null,
 *            "external_id": null,
 *            "position": null,
 *            "created_at": null,
 *            "image_processing": null,
 *            "title": null,
 *            "url": "/images/no_image_thumb.jpg",
 *            "original_url": "/images/no_image_original.jpg",
 *            "medium_url": "/images/no_image_medium.jpg",
 *            "small_url": "/images/no_image_micro.jpg",
 *            "thumb_url": "/images/no_image_thumb.jpg",
 *            "compact_url": "/images/no_image_compact.jpg",
 *            "large_url": "/images/no_image_large.jpg",
 *            "filename": null,
 *            "has_bitmap_image": false,
 *            "image_content_type": null
 *          }
 *        },
 *        {
 *          "id": 2,
 *          "product_id": 2,
 *          "author": "Автор 2",
 *          "content": "Хороший, но есть недостатки.",
 *          "email": "email2@example.com",
 *          "rating": 3,
 *          "manager_name": null,
 *          "published": true,
 *          "created_at": "2023-09-02T14:00:00.000+03:00",
 *          "updated_at": "2023-09-02T14:00:00.000+03:00",
 *          "manager_reply": "Мы учтем ваши замечания и постараемся улучшить продукт.",
 *          "replied_at": null,
 *          "spam": false,
 *          "published_at": null,
 *          "replied_q": false,
 *          "title": "shirt",
 *          "url": "/product/shirt",
 *          "first_image": {
 *            "id": null,
 *            "product_id": null,
 *            "external_id": null,
 *            "position": null,
 *            "created_at": null,
 *            "image_processing": null,
 *            "title": null,
 *            "url": "/images/no_image_thumb.jpg",
 *            "original_url": "/images/no_image_original.jpg",
 *            "medium_url": "/images/no_image_medium.jpg",
 *            "small_url": "/images/no_image_micro.jpg",
 *            "thumb_url": "/images/no_image_thumb.jpg",
 *            "compact_url": "/images/no_image_compact.jpg",
 *            "large_url": "/images/no_image_large.jpg",
 *            "filename": null,
 *            "has_bitmap_image": false,
 *            "image_content_type": null
 *          },
 *          "image": {
 *            "id": 2,
 *            "created_at": "2023-09-02T14:00:00.000+03:00",
 *            "original_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/2/2/image_2.jpg",
 *            "medium_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/2/2/medium_image_2.jpg",
 *            "small_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/2/2/micro_image_2.jpg",
 *            "thumb_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/2/2/thumb_image_2.jpg",
 *            "compact_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/2/2/compact_image_2.jpg",
 *            "large_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/2/2/large_image_2.jpg",
 *            "image_content_type": "image/jpeg"
 *          }
 *        },
 *        {
 *          "id": 1,
 *          "product_id": 1,
 *          "author": "Автор 1",
 *          "content": "Отличный продукт!",
 *          "email": "email1@example.com",
 *          "rating": 5,
 *          "manager_name": null,
 *          "published": true,
 *          "created_at": "2023-09-01T13:00:00.000+03:00",
 *          "updated_at": "2023-09-01T13:00:00.000+03:00",
 *          "manager_reply": "nil",
 *          "replied_at": null,
 *          "spam": false,
 *          "published_at": null,
 *          "replied_q": false,
 *          "title": "Cool t-shirt",
 *          "url": "/product/футболка",
 *          "first_image": {
 *            "id": null,
 *            "product_id": null,
 *            "external_id": null,
 *            "position": null,
 *            "created_at": null,
 *            "image_processing": null,
 *            "title": null,
 *            "url": "/images/no_image_thumb.jpg",
 *            "original_url": "/images/no_image_original.jpg",
 *            "medium_url": "/images/no_image_medium.jpg",
 *            "small_url": "/images/no_image_micro.jpg",
 *            "thumb_url": "/images/no_image_thumb.jpg",
 *            "compact_url": "/images/no_image_compact.jpg",
 *            "large_url": "/images/no_image_large.jpg",
 *            "filename": null,
 *            "has_bitmap_image": false,
 *            "image_content_type": null
 *          },
 *          "image": {
 *            "id": 1,
 *            "created_at": "2023-09-01T13:00:00.000+03:00",
 *            "original_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/image_1.jpg",
 *            "medium_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/medium_image_1.jpg",
 *            "small_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/micro_image_1.jpg",
 *            "thumb_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/thumb_image_1.jpg",
 *            "compact_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/compact_image_1.jpg",
 *            "large_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/large_image_1.jpg",
 *            "image_content_type": "image/jpeg"
 *          }
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listReview(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `reviews`
  });
}

/**
 * POST /admin/reviews.json
 *
 * Examples:
 *
 *      insales.createReview({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        review: {
 *          "review": {
 *            "product_id": 1,
 *            "author": "Bob",
 *            "content": "Nice product! I'd like to buy it!",
 *            "email": "bob@gmail.com",
 *            "published": true,
 *            "rating": 7
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
 *        "id": 33,
 *        "product_id": 1,
 *        "author": "Bob",
 *        "content": "Nice product! I'd like to buy it!",
 *        "email": "bob@gmail.com",
 *        "rating": 7,
 *        "manager_name": null,
 *        "published": true,
 *        "created_at": "2026-10-21T23:10:51.000+03:00",
 *        "updated_at": "2026-10-21T23:10:51.000+03:00",
 *        "manager_reply": null,
 *        "replied_at": null,
 *        "spam": false,
 *        "published_at": null,
 *        "replied_q": false,
 *        "title": "Cool t-shirt",
 *        "url": "/product/футболка",
 *        "first_image": {
 *          "id": null,
 *          "product_id": null,
 *          "external_id": null,
 *          "position": null,
 *          "created_at": null,
 *          "image_processing": null,
 *          "title": null,
 *          "url": "/images/no_image_thumb.jpg",
 *          "original_url": "/images/no_image_original.jpg",
 *          "medium_url": "/images/no_image_medium.jpg",
 *          "small_url": "/images/no_image_micro.jpg",
 *          "thumb_url": "/images/no_image_thumb.jpg",
 *          "compact_url": "/images/no_image_compact.jpg",
 *          "large_url": "/images/no_image_large.jpg",
 *          "filename": null,
 *          "has_bitmap_image": false,
 *          "image_content_type": null
 *        }
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.review Required, review
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createReview(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `reviews`,
    obj: options.review
  });
}

/**
 * DELETE /admin/reviews/{review_id}.json
 *
 * Examples:
 *
 *      insales.removeReview({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        reviewid: '1'
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
 * @param {number|string} options.reviewid Required, review id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeReview(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `reviews/${options.reviewid}`
  });
}

/**
 * PUT /admin/reviews/{review_id}.json
 *
 * Examples:
 *
 *      insales.editReview({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        reviewid: '1',
 *        review: {
 *          "review": {
 *            "content": "Sweet product!"
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
 *        "product_id": 1,
 *        "author": "Автор 1",
 *        "content": "Sweet product!",
 *        "email": "email1@example.com",
 *        "rating": 5,
 *        "manager_name": null,
 *        "published": true,
 *        "created_at": "2023-09-01T13:00:00.000+03:00",
 *        "updated_at": "2026-10-21T23:10:52.000+03:00",
 *        "manager_reply": "nil",
 *        "replied_at": null,
 *        "spam": false,
 *        "published_at": null,
 *        "replied_q": false,
 *        "title": "Cool t-shirt",
 *        "url": "/product/футболка",
 *        "first_image": {
 *          "id": null,
 *          "product_id": null,
 *          "external_id": null,
 *          "position": null,
 *          "created_at": null,
 *          "image_processing": null,
 *          "title": null,
 *          "url": "/images/no_image_thumb.jpg",
 *          "original_url": "/images/no_image_original.jpg",
 *          "medium_url": "/images/no_image_medium.jpg",
 *          "small_url": "/images/no_image_micro.jpg",
 *          "thumb_url": "/images/no_image_thumb.jpg",
 *          "compact_url": "/images/no_image_compact.jpg",
 *          "large_url": "/images/no_image_large.jpg",
 *          "filename": null,
 *          "has_bitmap_image": false,
 *          "image_content_type": null
 *        },
 *        "image": {
 *          "id": 1,
 *          "created_at": "2023-09-01T13:00:00.000+03:00",
 *          "original_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/image_1.jpg",
 *          "medium_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/medium_image_1.jpg",
 *          "small_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/micro_image_1.jpg",
 *          "thumb_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/thumb_image_1.jpg",
 *          "compact_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/compact_image_1.jpg",
 *          "large_url": "http://minio.insales.io:9000/insales-test-sber/images/reviews/1/1/1/large_image_1.jpg",
 *          "image_content_type": "image/jpeg"
 *        }
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.reviewid Required, review id
 * @param {object} options.review Required, review
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editReview(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `reviews/${options.reviewid}`,
    obj: options.review
  });
}
