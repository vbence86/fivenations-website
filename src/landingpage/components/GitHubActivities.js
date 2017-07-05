import React, {Component} from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import TM from 'fusioncharts/themes/fusioncharts.theme.ocean';
import GitHubClient from '../../utils/GitHubClient';

// Load the charts module pass FusionCharts as dependency
charts(FusionCharts);

export default class GitHubActivities extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.gitHubClient = new GitHubClient();
    this.gitHubClient.activities().then(activities => {
      this.setState({activities});
      console.log(activities);
    });
  }

  renderIssues() {
    if (!this.state.activities) return null;
    return this.state.activities
      .filter(v => v.state === 'open')
      .map((v, i) => this.renderIssue(v, i));
  }

  renderIssue(issue, idx) {
    const issueUrl = `https://github.com/vbence86/fivenations/activities/${issue.number}`;
    return (
      <div className="activityItem" key={idx}>
        <div className="row" key={idx}>
          <div className="col-xs-9 col-md-9">
            <span className="issueTitle"><a href={issueUrl} target="_blank">{issue.title}</a></span>
            {this.renderLabels(issue)}
          </div>
          <div className="col-xs-3 col-md-3 text-right">
            {this.getAvatarImageFromIssue(issue)}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <p>#{issue.number} updated at {new Date(issue.updated_at).toLocaleString()} {this.renderMilestone(issue)}</p>
          </div>
        </div>
      </div>
    );
  }

  getAvatarImageFromIssue(issue) {
    if (!issue || !issue.assignee) return null;
    return (
      <img src={issue.assignee.avatar_url} alt="creator avatar" width="20" height="20" />
    );
  }

  renderChart() {
  	return <ReactFC {...this.state.activitiesJSON} />;
  }

  render() {
    return (
      <div id="github-activities-container">
        <div className="col-xs-4 col-md-4">
          <img height={175} width={200} src={require('../../../public/images/github.jpg')} alt="github" />
        </div>
        <div className="col-xs-8 col-md-8 activitiesContainer">
          {this.renderIssues()}
        </div>
      </div>
    );
  }

}
