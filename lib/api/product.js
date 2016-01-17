'use strict';
const get = require('../methods/get');
const post = require('../methods/post');

exports.get = function(self) {
  return new Promise((resolve, reject) => {
    get({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `products/${self.productid}`
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
      api: 'products',
      obj: self.product
    }).then(resolve)
      .catch(reject);
  });
};

exports.list = function(self) {
  const query = {};
  query.page = self.page ? self.page : 1;
  query.per_page = self.per_page ? self.per_page : 250;
  query.updated_since = self.updated_since ? self.updated_since : false;
  query.deleted = self.deleted ? self.deleted : false;

  return new Promise((resolve, reject) => {
    get({
      id: this.id,
      token: self.token,
      url: self.url,
      api: 'products',
      query: query
    }).then(resolve)
      .catch(reject);
  });
};
