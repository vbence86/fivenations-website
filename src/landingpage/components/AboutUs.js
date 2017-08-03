import React, {Component} from 'react';

class AboutUsSection extends Component {

  render() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12 text-center aboutUsHeader">
        <h3>{this.props.header}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }

}

class TeamMembersSection extends Component {

  render() {
    return (
      <div className="col-md-6 col-sm-6 col-xs-6 col-xs-offset-3 col-md-offset-3 col-sm-offset-3 text-center teamMembers">
        {this.renderTeamMembers()}
      </div>
    );
  }

  renderTeamMembers() {
    return this.props.content.teamMembers.map( (v, i) => {
      return (
        <div className="col-md-5 col-sm-5 col-xs-5 teamMember" key={i}>
          <a href={v.twitter}>
            <img src={v.avatar.file.url} alt={v.name}/>
            <p>{v.name}</p>
          </a>
        </div>
      );
    });
  }

}

class FooterSection extends Component {

  render() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12 text-center aboutUsFooter">
        <p>{this.props.text}</p>
        <a href="http://www.webellionlimited.com" target="_blank">
          <img alt="webellion" src={require('../../../public/images/webellion.png')} />
        </a>
      </div>    
    );
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
      <section className="container-fluid bg-light" id="about-us">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-sm-12">
            <AboutUsSection header={this.state.aboutUsHeader} content={this.state.aboutUsContent} />
            <TeamMembersSection content={this.state.teamMembers} />
            <FooterSection text={this.state.footer} />
          </div>
        </div>
      </section>
    );
  }
}
