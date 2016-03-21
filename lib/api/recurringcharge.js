import { get } from '../methods/get';
import { post } from '../methods/post';
import { remove } from '../methods/remove';

export function getRecurring(options, id) {
  return new Promise((resolve, reject) => {
    get({
      id,
      token: options.token,
      url: options.url,
      api: `recurring_application_charge`
    }).then(resolve)
      .catch(reject);
  });
}

export function createRecurring(options, id) {
  const charge = {
    'recurring-application-charge': {
      'monthly': options.price
    }
  };

  return new Promise((resolve, reject) => {
    post({
      id,
      token: options.token,
      url: options.url,
      api: 'recurring_application_charge',
      obj: charge
    }).then(resolve)
      .catch(reject);
  });
}

export function removeRecurring(options, id) {
  return new Promise((resolve, reject) => {
    remove({
      id,
      token: options.token,
      url: options.url,
      api: `recurring_application_charge`
    }).then(resolve)
      .catch(reject);
  });
}
