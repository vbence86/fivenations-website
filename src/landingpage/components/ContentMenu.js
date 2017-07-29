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
            <h2 className="text-center">{this.state.title}</h2>
            <div className="row">
              <TravisBuilds {...this.state.imageMenuItems[0]}/>
              <InstagramPictures {...this.state.imageMenuItems[1]}/>              
              <GitHubIssues {...this.state.imageMenuItems[2]}/>
              <GitHubActivities {...this.state.imageMenuItems[3]}/>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
