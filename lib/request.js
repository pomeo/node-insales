import { error } from './error';
import { output } from './output';

/**
 * Events of Restler
 *
 * @param {Object} r Required, request-promise
 * @returns {Promise}
 */
export function request(r) {
  return new Promise((resolve, reject) => {
    r.then((response) => {
      resolve(output(response));
    }).catch((err) => {
      reject(error(err));
    });
  });
}
