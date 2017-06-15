import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

class AboutUsSection extends Component {

  render() {
    return (
      <div className="col-md-5 col-sm-4 col-xs-12">
        <h3><i className="fa fa-user"></i>{this.props.header}</h3>
        <div className="block">
          <ReactMarkdown source={this.props.content} />
        </div>
      </div>
    );
  }

}

class TeamMembersSection extends Component {

  render() {
    return (
      <div className="col-md-3 col-sm-4 col-xs-6">
        <h3><i className="fa fa-building"></i>{this.props.content.header}</h3>
        {this.renderTeamMembers()}
      </div>
    );
  }

  renderTeamMembers() {
    return this.props.content.teamMembers.map( (v, i) => {
      const twitter = v.twitter && v.twitter.split('/').pop();
      return (
        <div className="block" key={i}>
          <h4>{v.name}</h4>
          <ul className="icon-list">
            <li><i className="fa fa-tag"></i> {v.title}</li>
            <li><i className="fa fa-google"></i><a href="mailto:{v.email}"> {v.email}</a></li>
            <li><i className="fa fa-twitter"></i><a href="{v.twitter}"> {twitter}</a></li>
          </ul>
        </div>
      );
    });
  }

}

class OpenPoisitionsSection extends Component {

  render() {
    return (
      <div className="col-md-4 col-sm-4 col-xs-6">
        <h3><i className="fa fa-graduation-cap"></i>{this.props.content.header}</h3>
        {this.renderOpenPositions()}
      </div>
    );
  }

  renderOpenPositions() {
    return this.props.content.positions.map( (v, i) => (
      <div className="block" key={i}>
        <h4>{v.title}</h4>
        <ul className="icon-list">
          <li><i className="fa fa-user-circle"></i> {v.description}</li>
        </ul>
      </div>
    ));
  }

}

export default class AboutUs extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').aboutUs;
  }

  render() {
    return (
      <section className="container" id="about-us">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-sm-12">
            <div className="row">
              <AboutUsSection header={this.state.aboutUsHeader} content={this.state.aboutUsContent} />
              <TeamMembersSection content={this.state.teamMembers} />
              <OpenPoisitionsSection content={this.state.openPositions} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
