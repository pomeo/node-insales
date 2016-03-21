import { get } from '../methods/get';

export function getCollection(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `collections/${options.collectionid}`
    }).then(resolve)
      .catch(reject);
  });
}

export function listCollection(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: 'collections'
    }).then(resolve)
      .catch(reject);
  });
}
