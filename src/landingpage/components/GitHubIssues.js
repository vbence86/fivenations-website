import React, {Component} from 'react';
import GitHubClient from '../../utils/GitHubClient';
import ReactMarkdown from 'react-markdown';

export default class GitHubIssues extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.gitHubClient = new GitHubClient();
    this.gitHubClient.issues().then(issues => {
      this.setState({issues});
    });
  }

  renderIssues() {
    if (!this.state.issues) return null;
    return this.state.issues
      .filter(v => v.state === 'open')
      .map((v, i) => this.renderIssue(v, i));
  }

  renderIssue(issue, idx) {
    const issueUrl = `https://github.com/vbence86/fivenations/issues/${issue.number}`;
    return (
      <div className="issueItem" key={idx}>
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

  renderMilestone(issue) {
    if (!issue || !issue.milestone) return null;
    return (
      <i className="fa fa-ship"> {issue.milestone.title}</i>
    );
  }

  renderLabels(issue) {
    if (!issue || !issue.labels) return null;
    return issue.labels.map((v, i) => (
      <span key={i} style={{backgroundColor: `#${v.color}`, marginLeft: 5, padding: 2, fontSize: '0.75em'}}>{v.name}</span>
    ));
  }

  render() {
    return (
      <div className="developmentDetailsContainer" id="github-issues-container">
        <div className="col-xs-4 col-md-4 viewport-animation">
          <img height={175} width={200} src={require('../../../public/images/github.jpg')} alt="github" />
        </div>
        <div className="col-xs-8 col-md-8 textContainer">
          <h2 className="viewport-animation">{this.props.title}</h2>
          <h4 className="viewport-animation">{this.props.subtitle}</h4>
          <p className="viewport-animation">
            <ReactMarkdown source={this.props.text} />
          </p>
        </div>
        <div className="viewport-animation col-xs-8 col-md-8 pull-right issuesContainer">
          {this.renderIssues()}
        </div>
      </div>
    );
  }

}
