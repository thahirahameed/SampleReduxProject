import {kApiUrlEndpoint} from '../config/WebServices';

class ApiHelper {
  async get(url, data) {
    const completeUrl = kApiUrlEndpoint + url;

    const response = await fetch(completeUrl, data).then(x => x.json());

    return new Promise((resolve, reject) => {
      this.handlepromise(resolve, reject, response);
    });
  }

  async post(url, data, headers = {}) {
    const completeUrl = kApiUrlEndpoint + url;
    const response = await fetch(completeUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    }).then(x => x.json());

    return new Promise((resolve, reject) => {
      this.handlepromise(resolve, reject, response);
    });
  }

  handlepromise = (resolve, reject, response) => {
    if (response.error) {
      if (response.error.code === 'LOGIN_FAILED') {
        reject('any string error');
      } else if (response.error.code === 'NETWORK_ISSUE') {
        reject('any string error');
      } else {
        resolve(response);
      }
    }
  };
}

export default new ApiHelper();
