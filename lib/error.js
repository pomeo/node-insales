'use strict';

module.exports = function error(type, url, msg, response) {
  return {
    type,
    url,
    msg,
    response
  };
};
