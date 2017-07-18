import Client from './Client';

const token = process.env.INSTAGRAM_OAUTH_TOKEN;
const serviceEndpoint = 'https://api.instagram.com/v1/users/self/media';

const recentImagesAPICall = `${serviceEndpoint}/recent/?access_token=${token}`;

class InstagramClient extends Client {

  static instance;

  constructor() {
    super();
    if (this.instance) return this.instance;

    this.instance = this;
  }

  recent() {
    return this.get(recentImagesAPICall);
  }

};

export default InstagramClient;
