import { post } from '../methods/post';

export function createJsTag(options, id) {
  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: 'js_tags',
      obj: options.jstag
    }).then(resolve)
      .catch(reject);
  });
}
