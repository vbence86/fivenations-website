import React, {Component} from 'react';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage');
  }

  renderMenu() {
    return this.state.headerNavigation.map( (v, i) => (
      <li role="presentation" key={i}><a href={v.href}>{v.label}</a></li>
    ));
  }

  renderSocialIcons() {
    const icons = this.state.socialProviders.map( (v, i) => (
      <li key={i}><a href={v.url} className={`icon-${v.socialProviderId}`}>{v.label}</a></li>
    ));
    return (
      <ul className="social-networks spin-icon">
        {icons}
      </ul>
    );
  }

  render() {
    return (
        <header className="container-fluid sdm-bg" id="home">
          <div className="row">
            <div className="overlay" />
            <ul className="nav nav-pills menu-center margin-top-30 scroll-nav">
              <li role="presentation" className="active"><a href="#home"><i className="fa fa-home">{this.state.pageTitle}</i></a></li>
              {this.renderMenu()}
            </ul>
            <img src="images/profile.jpg" className="margin-top-76 img-circle center-block profile_picture" alt="profile" />
            <h1 className="text-capitalize text-center">Jeanetter benson</h1>
            <h3 className="text-capitalize text-center">UX/UI designer</h3>
            <hr/>
            <div className="text-center margin-bottom-135">
              {this.renderSocialIcons()}
            </div>
          </div>
        </header>
    );
  }

}
