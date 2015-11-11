'use strict';
const request = require('../request');
const rest = require('restler');
const opt = require('../options');

module.exports = function get(self) {
  if (self.query) opt.query = self.query;

  const g = rest.get(`http://${self.id}:${self.token}@${self.url}/admin/${self.api}.xml`, opt);
  return new Promise((resolve, reject) => {
    request(g)
      .then(resolve)
      .catch(reject);
  });
};
