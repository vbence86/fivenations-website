import fetchJsonp from 'fetch-jsonp';

const token = process.env.INSTAGRAM_OAUTH_TOKEN;
const serviceEndpoint = 'https://api.instagram.com/v1/users/self/media';

const recentImagesAPICall = `${serviceEndpoint}/recent/?access_token=${token}`;

class InstagramClient {

  static instance;

  constructor() {
    if (this.instance) return this.instance;

    this.instance = this;
  }

  recent() {
    return fetchJsonp(recentImagesAPICall).then(resp => resp.json());
  }

};

export default InstagramClient;
