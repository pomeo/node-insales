'use strict';
const get = require('../methods/get');

exports.get = function(self) {
  return new Promise((resolve, reject) => {
    get({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `collections/${self.collectionid}`
    }).then(resolve)
      .catch(reject);
  });
};

exports.list = function(self) {
  return new Promise((resolve, reject) => {
    get({
      id: this.id,
      token: self.token,
      url: self.url,
      api: 'collections'
    }).then(resolve)
      .catch(reject);
  });
};
