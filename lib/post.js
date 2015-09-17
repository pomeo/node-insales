'use strict';
const request = require('./request');
const rest = require('restler');
const Js2Xml = require('js2xml').Js2Xml;
const opt = require('./options');

module.exports = function post(id, token, url, api) {
  let js2xml = new Js2Xml('product', opt);
  console.log(js2xml.toString());
  // let p = rest.post('http://' + id + ':' + token + '@' + url +
  //                    '/admin/' + api + '.xml', opt);
  // return new Promise((resolve, reject) => {
  //   request(p)
  //     .then(resolve)
  //     .catch(reject);
  // });
};
