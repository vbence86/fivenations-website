/* global module, Promise, require */

// Polyfill for Fetch API
// https://github.com/matthew-andrews/isomorphic-fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');

/**
 * returns a JSON string from the given object
 * @param  {object} req Object to be stringified
 * @return {Promise} Genuine Promise instance
 */
function getBody(req) {
  return JSON.stringify(req);
}

/**
 * returns a resolved or rejected promise as per the response status
 * @param  {Response} resp native Response object coming from the Fetch API
 * @return {Promise} Promise object representing the result of the operation
 */
function status(resp) {
  if (resp.ok) {
    return resp;
  } else {
    return new Promise((resolve, reject) => {
      return jsonify(resp).then(json => {
        reject(json);
      });
    });
  }
}

/**
 * Parses the response in order to create a Javascript object from it
 * @param  {Response} resp native Response object coming from the Fetch API
 * @return {Promise} Promise object representing the result of the operation]
 */
function jsonify(resp){
  if (!resp || !resp.json) return null;
  return resp.json();
}

/**
 * Unified error function to handle unexpected behaviour and return a promise
 * @param  {object} err Exception object
 * @return {Promise} Rejected promise after the error is handled
 */
function error(err){
  return Promise.reject(err);
}


/**
 * Client object that represent a connection to the given abel endpoint
 * @param {string} serviceURL URL to the service endpoint
 */
export default class Client {

  constructor() {
    this.defaults = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  /**
   * Sends a post request to the specified endpoint
   * @param  {string} service url
   * @param  {object} params  Data to send to the service
   * @return {Promise} Promise for the resolution of the operation
   */
  post(url, params) {
    if (!url) throw new Error('Invalid service endpoint!');

    const init = {
      method: 'POST',
      headers: this.getHeaders(),
      cache: 'default',
      body: getBody(params),
      credentials: 'same-origin',
    };
    return fetch( new Request(url, init) )
      .then(status)
      .then(jsonify)
      .catch(error);
  }

  /**
   * Sends a get request to the specified endpoint
   * @param  {string} service url
   * @param  {object} params  Data to send to the service
   * @return {Promise} Promise for the resolution of the operation
   */
  get(url, params) {
    if (!url) throw new Error('Invalid service endpoint!');

    const init = {
      method: 'GET',
      headers: this.getHeaders(),
      cache: 'default',
      body: getBody(params),
      credentials: 'same-origin',
    };
    return fetch( new Request(url, init) )
      .then(status)
      .then(jsonify)
      .catch(error);
  }

  /**
   * returns headers to be used to issue a valid request
   * @return {Headers} instance of native Headers prototype
   */
  getHeaders() {
    let headers = new Headers(this.defaults.headers);
    return headers;
  }


}
