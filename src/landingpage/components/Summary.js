import React, {Component} from 'react';
import GitHubClient from '../../utils/GitHubClient';
import DonatelyClient from '../../utils/DonatelyClient';

export default class Summary extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.gitHubClient = new GitHubClient(); 
    this.donatelyClient = new DonatelyClient();
    this.state = {};    

    this.gitHubClient.issues().then(issues => {
      this.setState({
        issues: issues.length,
      });
    });

    this.gitHubClient.stars().then(stars => {
      this.setState({stars});
    });

    this.gitHubClient.totalCommits().then(commits => {
      this.setState({commits});
    });

    this.donatelyClient.totalDonations().then(donations => {
      this.setState({donations});
    });
   
  }

  render() {
    return (
      <section className="container-fluid" id="development-summary">
        <div className="col-sm-12 col-xs-12">
          <div className="col-sm-3 cols-xs-12 figures-block">
            <p><span>{this.state.issues}</span> / Open Issues</p>
          </div>
          <div className="col-sm-3 cols-xs-12 figures-block">
            <p><span>{this.state.stars}</span> / Stars on Github</p>
          </div>
          <div className="col-sm-3 cols-xs-12 figures-block">
            <p><span>{this.state.commits}</span> / Commits</p>
          </div>
          <div data-toggle="modal" data-target="#donately-modal" className="col-sm-3 cols-xs-12 figures-block donately-block">
            <p><span>${this.state.donations}</span> / Fund raised</p>
          </div>                              
        </div>
      </section>
    );
  }

}
