import React, {Component} from 'react';
import GitHubClient from '../../utils/GitHubClient';
import ReactMarkdown from 'react-markdown';

export default class GitHubRelease extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.gitHubClient = new GitHubClient();
    this.gitHubClient.latestRelease().then(release => {
      this.setState({release});
    });
  }

  renderRelease() {
    if (!this.state.release) return null;
    return (
      <div>
        <div className="versionContainer">
          <a href="https://github.com/vbence86/fivenations/releases" target="_blank">current stable release {this.state.release.tag_name}</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="developmentDetailsContainer" id="github-issues-container">
        <div className="col-xs-12 col-md-4">
          <img height={175} width={200} src="images/github.jpg" alt="github" />
        </div>
        <div className="col-xs-12 col-md-8 textContainer">
          <h2 className="viewport-animation">{this.props.title}</h2>
          <h4 className="viewport-animation">{this.props.subtitle}</h4>
          <ReactMarkdown source={this.props.text} />
        </div>
        <div className="col-xs-12 col-md-8 pull-right issuesContainer">
          {this.renderRelease()}
        </div>
      </div>
    );
  }

}
