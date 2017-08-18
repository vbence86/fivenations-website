import React, {Component} from 'react';
import GitHubClient from '../../utils/GitHubClient';

export default class Summary extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.gitHubClient = new GitHubClient(); 
    this.state = {};    
  }

  componentDidUpdate(prevProps, prevState) {
    this.gitHubClient.issues().then(issues => {
      this.setState({
        issuesNumber: issues.length,
      });
    });

    this.gitHubClient.commits().then(commits => {
      this.setState({
        commitsNumber: commits.length,
      });
    });    
  }

  render() {
    return (
      <section className="container-fluid" id="development-summary">
        <div className="col-sm-12 col-xs-12">
          <div className="col-sm-3 cols-xs-12">
            <div className="figures-block">
              <p><span>{this.state.issuesNumber}</span> / Open Issues</p>
            </div>
          </div>
          <div className="col-sm-3 cols-xs-12">
            <div className="figures-block">
              <p><span>{this.state.commitsNumber}</span> / Plays</p>
            </div>
          </div>
          <div className="col-sm-3 cols-xs-12">
            <div className="figures-block">
              <p><span>132</span> / Plays</p>
            </div>
          </div>
          <div className="col-sm-3 cols-xs-12">
            <div className="figures-block">
              <p><span>132</span> / Plays</p>
            </div>
          </div>                              
        </div>
      </section>
    );
  }

}
