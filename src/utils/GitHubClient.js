import Client from './Client';

const token = require('../../secrets.json').gitHubToken;
const serviceEndpoint = 'https://api.github.com';
const userName = 'vbence86';
const repo = 'fivenations';

const issuesAPICall = `${serviceEndpoint}/repos/${userName}/${repo}/issues`;
const milestonesAPICall = `${serviceEndpoint}/milestones/${userName}/${repo}/issues`;

class GitHubClient extends Client {

  static instance;

  constructor() {
    super();
    if (this.instance) return this.instance;

    this.instance = this;
  }

  issues() {
    return this.get(issuesAPICall);
  }

  milestones() {
    return this.get(milestonesAPICall);
  }

  getHeaders() {
    const headers = {
      Authorization: `token ${token}`,
    };
    return headers;
  }

};

export default GitHubClient;
