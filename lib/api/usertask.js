import { get } from '../methods/get';
import { post } from '../methods/post';
import { put } from '../methods/put';
import { remove } from '../methods/remove';

/**
 * GET /admin/user_tasks/{user_task_id}.json
 *
 * Examples:
 *
 *      insales.getUserTask({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        taskid: '4'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 4,
 *        "complete": null,
 *        "order_id": null,
 *        "assignee_id": 1,
 *        "title": "dispatch order N1",
 *        "description": "You should dispatch the order N1 till noon",
 *        "created_at": "2026-10-21T23:32:39.095+03:00",
 *        "updated_at": "2026-10-21T23:32:39.095+03:00",
 *        "deadline_at": "2021-01-01T00:00:00.000+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.taskid Required, user task id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function getUserTask(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `user_tasks/${options.taskid}`
  });
}

/**
 * GET /admin/user_tasks.json
 *
 * Examples:
 *
 *      insales.listUserTask({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      [
 *        {
 *          "id": 2,
 *          "complete": null,
 *          "order_id": null,
 *          "assignee_id": 1,
 *          "title": "dispatch order N1",
 *          "description": "You should dispatch the order N1 till noon",
 *          "created_at": "2026-10-21T23:32:38.782+03:00",
 *          "updated_at": "2026-10-21T23:32:38.782+03:00",
 *          "deadline_at": "2021-01-01T00:00:00.000+03:00"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listUserTask(options, id) {
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `user_tasks`
  });
}

/**
 * POST /admin/user_tasks.json
 *
 * Examples:
 *
 *      insales.createUserTask({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        usertask: {
 *          "user_task": {
 *            "title": "dispatch order N2",
 *            "description": "You should dispatch the order N2",
 *            "assignee_id": 1,
 *            "deadline_at": "2021-01-01",
 *            "order_id": 1
 *          }
 *        }
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 8,
 *        "complete": null,
 *        "order_id": 1,
 *        "assignee_id": 1,
 *        "title": "dispatch order N2",
 *        "description": "You should dispatch the order N2",
 *        "created_at": "2026-10-21T23:32:39.644+03:00",
 *        "updated_at": "2026-10-21T23:32:39.644+03:00",
 *        "deadline_at": "2021-01-01T00:00:00.000+03:00",
 *        "order": {
 *          "id": 1,
 *          "number": 1001
 *        }
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.usertask Required, user task
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function createUserTask(options, id) {
  return post({
    id,
    token: options.token,
    url: options.url,
    api: `user_tasks`,
    obj: options.usertask
  });
}

/**
 * DELETE /admin/user_tasks/{user_task_id}.json
 *
 * Examples:
 *
 *      insales.removeUserTask({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        taskid: '12'
 *      }).then(output => {
 *        console.info(output.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      200
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.taskid Required, user task id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function removeUserTask(options, id) {
  return remove({
    id,
    token: options.token,
    url: options.url,
    api: `user_tasks/${options.taskid}`
  });
}

/**
 * PUT /admin/user_tasks/{user_task_id}.json
 *
 * Examples:
 *
 *      insales.editUserTask({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        taskid: '10',
 *        usertask: {
 *          "user_task": {
 *            "title": "new title",
 *            "description": "new description",
 *            "complete": true
 *          }
 *        }
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 10,
 *        "complete": true,
 *        "order_id": null,
 *        "assignee_id": 1,
 *        "title": "new title",
 *        "description": "new description",
 *        "created_at": "2026-10-21T23:32:39.874+03:00",
 *        "updated_at": "2026-10-21T23:32:39.972+03:00",
 *        "deadline_at": "2021-01-01T00:00:00.000+03:00"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.taskid Required, user task id
 * @param {object} options.usertask Required, user task
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function editUserTask(options, id) {
  return put({
    id,
    token: options.token,
    url: options.url,
    api: `user_tasks/${options.taskid}`,
    obj: options.usertask
  });
}
