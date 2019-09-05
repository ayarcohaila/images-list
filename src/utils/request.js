import queryString from 'qs';

/**
 * API request module
 *
 * @param {*} endpoint
 * @param {string} [method='GET']
 * @param {*} [data={}]
 * @returns
 */
async function request(endpoint, method = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    let qs = '';
    let body;

    if (['GET', 'DELETE'].indexOf(method) > -1) {
      qs = `?${queryString.stringify(data, { arrayFormat: 'bracket' })}`;
    } else {
      body = JSON.stringify(data);
    }

    const requestUrl = `${baseUrl}${endpoint}${qs}`;
    const options = {
      method,
      headers: {},
      body,
    };

    fetch(requestUrl, options)
      .then(result => {
        if (result.status >= 200 && result.status < 300) {
          return resolve(result.json());
        }
        return result.json().then(reject);
      })
      .catch(err => reject(err));
  });
}

export default request;
