import React, {Component} from 'react';
import Summary from './Summary';
import TravisBuilds from './TravisBuilds';
import GitHubIssues from './GitHubIssues';
import InstagramPictures from './InstagramPictures';

export default class ContentMenu extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').imageMenuSection;
  }

  render() {
    return (
      <section className="container-fluid bg-light" id="development">
        <div className="col-sm-10 col-sm-offset-1 col-xs-12 headerContainer">
          <h2 className="viewport-animation animated bounceInLeft">{this.state.title}</h2>
          <h4 className="viewport-animation animated bounceInLeft delay-250">{this.state.subtitle}</h4>
          <p className="viewport-animation animated bounceInLeft delay-500">{this.state.description}</p>
        </div>
        <Summary contentProvider={this.contentProvider} />
        <div className="col-sm-10 col-sm-offset-1 developmentContainer">
          <TravisBuilds {...this.state.imageMenuItems[0]}/>
          <InstagramPictures {...this.state.imageMenuItems[1]}/>              
          <GitHubIssues {...this.state.imageMenuItems[2]}/>
        </div>
      </section>
    );
  }

}
