import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';

export function getFile(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `files/${options.fileid}`
    }).then(resolve)
      .catch(reject);
  });
}

export function createFile(options, id) {
  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: 'files',
      obj: options.file
    }).then(resolve)
      .catch(reject);
  });
}

export function removeFile(options, id) {
  return new Promise((resolve, reject) => {
    remove({
      id,
      token: options.token,
      url: options.url,
      api: `files/${options.fileid}`
    }).then(resolve)
      .catch(reject);
  });
}

export function uploadFile(options, id) {
  const query = {};
  query.page = options.page ? options.page : 1;
  query.per_page = options.per_page ? options.per_page : 250;

  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: 'files',
      query
    }).then(resolve)
      .catch(reject);
  });
}
