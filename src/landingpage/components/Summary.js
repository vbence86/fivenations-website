/* globals $, window */
import React, {Component} from 'react';
import GitHubClient from '../../utils/GitHubClient';
import DonatelyClient from '../../utils/DonatelyClient';
import CountUp from 'react-countup';

const CONTAINER_ID = 'development-summary'; 

export default class Summary extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.gitHubClient = new GitHubClient(); 
    this.donatelyClient = new DonatelyClient();
    this.state = {};    

    this.gitHubClient.issues().then(issues => {
      this.issues = issues.length;
    });

    this.gitHubClient.stars().then(stars => {
      this.stars = stars;
    });

    this.gitHubClient.totalCommits().then(commits => {
      this.commits = commits;
    });

    this.donatelyClient.totalDonations().then(donations => {
      this.donations = donations;
    });
   
  }

  componentDidMount() {
    this.testIfSummaryIsInViewport();
  }

  testIfSummaryIsInViewport() {
    $(`#${CONTAINER_ID}`).inViewport( px => {
      if (px > 0) {
        this.setState({
          issues: this.issues,
          stars: this.stars,
          commits: this.commits,
          donations: this.donations + 132,
        });
      }
    });
  }

  render() {
    return (
      <section className="container-fluid" id={CONTAINER_ID}>
        <div className="col-sm-12 col-xs-12">
          <div className="col-sm-3 cols-xs-12 figures-block">
            <a href="https://github.com/vbence86/fivenations/issues" target="_blank">
              <p>
                <span className="fivenations_2developmentbody_icon01 sprite" />
              </p>
              <p>
                <CountUp start={0} end={this.state.issues} duration={3} /> / Open issues
              </p>
            </a>
          </div>
          <div className="col-sm-3 cols-xs-12 figures-block">
            <a href="https://github.com/vbence86/fivenations/stargazers" target="_blank">
              <p>
                <span className="fivenations_2developmentbody_icon02 sprite" />
              </p>
              <p>              
                <CountUp start={0} end={this.state.stars} duration={3} /> / Stars on Github
              </p>
            </a>
          </div>
          <div className="col-sm-3 cols-xs-12 figures-block">
            <a href="https://github.com/vbence86/fivenations/commits/master" target="_blank">
              <p>
                <span className="fivenations_2developmentbody_icon03 sprite" />
              </p>
              <p>
                <CountUp start={0} end={this.state.commits} duration={3} /> / Commits
              </p>
            </a>
          </div>
          <div data-toggle="modal" data-target="#donately-modal" className="col-sm-3 cols-xs-12 figures-block donately-block">
            <p>
              <span className="fivenations_2developmentbody_icon04 sprite" />
            </p>
            <p>
              <CountUp start={0} end={this.state.donations} duration={3} prefix="$" /> / Fund raised
            </p>
          </div>                              
        </div>
      </section>
    );
  }

}
