'use strict';
const get = require('../methods/get');
const post = require('../methods/post');
const remove = require('../methods/remove');

exports.get = function(self) {
  return new Promise((resolve, reject) => {
    get({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `files/${self.fileid}`
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
      api: 'files',
      obj: self.file
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
      api: `files/${self.fileid}`
    }).then(resolve)
      .catch(reject);
  });
};

exports.list = function(self) {
  let query = {};
  (self.page) ? query.page = self.page : query.page = 1;
  (self.per_page) ? query.per_page = self.per_page : query.per_page = 250;

  return new Promise((resolve, reject) => {
    get({
      id: this.id,
      token: self.token,
      url: self.url,
      api: 'files',
      query: query
    }).then(resolve)
      .catch(reject);
  });
};
