import Client from './Client';

const token = process.env.GITHUB_OAUTH_TOKEN;
const serviceEndpoint = 'https://api.github.com';
const userName = 'vbence86';
const repo = 'fivenations';

const issuesAPICall = `${serviceEndpoint}/repos/${userName}/${repo}/issues`;
const milestonesAPICall = `${serviceEndpoint}/repos/${userName}/${repo}/milestones`;
const activitiesAPICall = `${serviceEndpoint}/repos/${userName}/${repo}/events`;
const commitsAPICall = `${serviceEndpoint}/repos/${userName}/${repo}/commits`;
const reposAPICall = `${serviceEndpoint}/users/${userName}/repos`;
const contributorsAPICall = `${serviceEndpoint}/repos/${userName}/${repo}/stats/contributors`;
const releasesAPICall = `${serviceEndpoint}/repos/${userName}/${repo}/releases`;

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

  commits() {
    return this.get(commitsAPICall);
  } 

  activities() {
    return this.get(activitiesAPICall);
  }

  totalCommits() {
    return this.get(contributorsAPICall)
      .then(contributors => {
        return contributors.reduce((sum, contributor) => contributor.total + sum, 0);
      });
  }

  stars() {
    return this.get(reposAPICall)
      .then(repos => {
        if (!repos) return;
        const fivenations = repos.filter(repo => repo.name === 'fivenations');
        return fivenations.shift().stargazers_count || 0;
      });
  }

  latestRelease() {
    return this.get(releasesAPICall).then(releases => releases.shift());
  }

  getHeaders() {
    const headers = {
      Authorization: `token ${token}`,
    };
    return headers;
  }

};

export default GitHubClient;
