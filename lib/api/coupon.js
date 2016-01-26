'use strict';
const get = require('../methods/get');
const post = require('../methods/post');
const remove = require('../methods/remove');
const put = require('../methods/put');

exports.get = function(self) {
  return new Promise((resolve, reject) => {
    get({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `discount_codes/${self.couponid}`
    }).then(resolve)
      .catch(reject);
  });
};

exports.list = function(self) {
  const query = {};
  query.page = self.page ? self.page : 1;
  query.per_page = self.per_page ? self.per_page : 250;
  if ((self.updated_since) && (self.updated_since !== false)) {
    query.updated_since = self.updated_since;
  }
  if (self.deleted === true) {
    query.deleted = true;
  }

  return new Promise((resolve, reject) => {
    get({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `discount_codes`,
      query: query
    }).then(resolve)
      .catch(reject);
  });
};

exports.create = function(self) {
  return new Promise((resolve, reject) => {
    post({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `discount_codes`,
      obj: self.coupon
    }).then(resolve)
      .catch(reject);
  });
};

exports.remove = function(self) {
  return new Promise((resolve, reject) => {
    remove({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `discount_codes/${self.couponid}`
    }).then(resolve)
      .catch(reject);
  });
};

exports.edit = function(self) {
  return new Promise((resolve, reject) => {
    put({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `discount_codes/${self.couponid}`,
      obj: self.coupon
    }).then(resolve)
      .catch(reject);
  });
};
