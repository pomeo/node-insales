'use strict';
const error = require('./error');
const output = require('./output');

function request(r) {
  return new Promise((resolve, reject) => {
    r.once('timeout', (ms) => {
      reject(error('Timeout', r.url.href, 'timeout: ' + ms + 'ms'));
    }).once('error', (err, response) => {
      reject(error('Error', r.url.href, err, response));
    }).once('abort', () => {
      reject(error('Abort', r.url.href, null, null));
    }).once('fail', (data, response) => {
      reject(error('Fail', r.url.href, data, response));
    }).once('success', (data, response) => {
      resolve(output(data, response));
    });
  });
}

module.exports = request;
