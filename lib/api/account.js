import { get } from '../methods/get';

export function getAccount(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `account`
    }).then(resolve)
      .catch(reject);
  });
}
