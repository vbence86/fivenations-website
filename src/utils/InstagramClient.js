import fetchJsonp from 'fetch-jspon';

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
    fetchJsonp(recentImagesAPICall)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log('parsed json', json);
      });    
  }

};

export default InstagramClient;
