import React, {Component} from 'react';
import TravisBuilds from './TravisBuilds';
import GitHubIssues from './GitHubIssues';
import GitHubActivities from './GitHubActivities';
import InstagramPictures from './InstagramPictures';

export default class ContentMenu extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').imageMenuSection;
  }

  render() {
    return (
      <section className="container position-relative" id="development">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 position-absolute">
            <div className="row">
              <TravisBuilds />
              <GitHubIssues />
              <GitHubActivities />
              <InstagramPictures />
            </div>
          </div>
        </div>
      </section>
    );
  }

}
