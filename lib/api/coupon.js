import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';
import { put } from '../methods/put';

export function getCoupon(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `discount_codes/${options.couponid}`
    }).then(resolve)
      .catch(reject);
  });
}

export function listCoupon(options, id) {
  const query = {};
  query.page = options.page ? options.page : 1;
  query.per_page = options.per_page ? options.per_page : 250;
  if ((options.updated_since) && (options.updated_since !== false)) {
    options.updated_since = options.updated_since;
  }
  if (options.deleted === true) {
    query.deleted = true;
  }

  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `discount_codes`,
      query
    }).then(resolve)
      .catch(reject);
  });
}

export function createCoupon(options, id) {
  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: `discount_codes`,
      obj: options.coupon
    }).then(resolve)
      .catch(reject);
  });
}

export function removeCoupon(options, id) {
  return new Promise((resolve, reject) => {
    remove({
      id,
      token: options.token,
      url: options.url,
      api: `discount_codes/${options.couponid}`
    }).then(resolve)
      .catch(reject);
  });
}

export function editCoupon(options, id) {
  return new Promise((resolve, reject) => {
    put({
      id,
      token: options.token,
      url: options.url,
      api: `discount_codes/${options.couponid}`,
      obj: options.coupon
    }).then(resolve)
      .catch(reject);
  });
}
