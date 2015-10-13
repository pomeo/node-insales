'use strict';
const request = require('./request');
const rest = require('restler');
const opt = {
  headers: {
    'Content-Type': 'application/xml'
  },
  xml2js: {
    trim: false,
    explicitArray: false,
    ignoreAttrs: true
  },
  timeout: 5000
};

function get(id, token, url, api) {
  let g = rest.get('http://' + id + ':' + token + '@' + url +
                     '/admin/' + api + '.xml', opt);
  return new Promise((resolve, reject) => {
    request(g)
      .then(resolve)
      .catch(reject);
  });
}

module.exports = get;
