'use strict';
const get = require('../get');
const post = require('../post');

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
      api: `products/${self.productid}`
    }).then(resolve)
      .catch(reject);
  });
};
