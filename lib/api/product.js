import { get } from '../methods/get';
import { post } from '../methods/post';

export function getProduct(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `products/${options.productid}`
    }).then(resolve)
      .catch(reject);
  });
}

export function createProduct(options, id) {
  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: 'products',
      obj: options.product
    }).then(resolve)
      .catch(reject);
  });
}

export function listProduct(options, id) {
  const query = {};
  query.page = options.page ? options.page : 1;
  query.per_page = options.per_page ? options.per_page : 100;
  if ((options.updated_since) && (options.updated_since !== false)) {
    query.updated_since = options.updated_since;
  }
  if (options.deleted === true) {
    query.deleted = true;
  }

  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: 'products',
      query
    }).then(resolve)
      .catch(reject);
  });
}
