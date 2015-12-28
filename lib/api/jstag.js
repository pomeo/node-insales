'use strict';
const post = require('../methods/post');

exports.create = function(self) {
  return new Promise((resolve, reject) => {
    post({
      id: this.id,
      token: self.token,
      url: self.url,
      api: 'js_tags',
      obj: self.jstag,
    }).then(resolve)
      .catch(reject);
  });
};
