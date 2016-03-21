import { get } from '../methods/get';
import { post } from '../methods/post';

export function getCharge(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `application_charges/${options.chargeid}`
    }).then(resolve)
      .catch(reject);
  });
}

export function createCharge(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `application_charges`
    }).then(resolve)
      .catch(reject);
  });
}

export function removeCharge(options, id) {
  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: 'application_charges',
      obj: options.charge
    }).then(resolve)
      .catch(reject);
  });
}

export function listCharge(options, id) {
  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: `application_charges/${options.chargeid}/decline`
    }).then(resolve)
      .catch(reject);
  });
}
