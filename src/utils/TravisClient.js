import Client from './Client';

const serviceEndpoint = 'https://api.travis-ci.org';
const userName = 'vbence86';
const repo = 'fivenations';

const buildsAPICall = `${serviceEndpoint}/repos/${userName}/${repo}/builds`;

class TravisClient extends Client {

  static instance;

  constructor() {
    super();
    if (this.instance) return this.instance;

    this.instance = this;
  }

  builds() {
    return this.get(buildsAPICall);
  }

  getHeaders() {
    return {};
  }

};

export default TravisClient;
