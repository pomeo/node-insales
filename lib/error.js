'use strict';

function error(type, url, msg, response) {
  return {
    type,
    url,
    msg,
    response
  };
}

module.exports = error;
