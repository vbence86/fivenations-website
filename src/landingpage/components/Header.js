import React, {Component} from 'react';
import {Parallax, Background} from 'react-parallax';
import {ParallaxScroller, Parallax as ParallaxComponent} from 'react-scroll-parallax';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage');
    ParallaxScroller.init();
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
      <div>
        <Parallax strength={300} className="container-fluid sdm-bg" id="home">
          <Background blur={{min:0, max:15}}>
            <img src="http://www.fillmurray.com/400/300"/>
          </Background>
          <div className="row">
            <div className="overlay" />
            <ul className="nav nav-pills menu-center margin-top-30 scroll-nav">
              <li role="presentation" className="active"><a href="#home"><i className="fa fa-home">{this.state.pageTitle}</i></a></li>
              {this.renderMenu()}
            </ul>
            <ParallaxComponent 
                offsetYMin={-100}
                offsetYMax={100}>
              <img src="images/profile.jpg" className="margin-top-76 img-circle center-block profile_picture" alt="profile" />
            </ParallaxComponent>
            <h1 className="text-capitalize text-center">Jeanetter benson</h1>
            <h3 className="text-capitalize text-center">UX/UI designer</h3>
            <hr/>
            <div className="text-center margin-bottom-135">
              {this.renderSocialIcons()}
            </div>
          </div>
        </Parallax>
      </div>
    );
  }

}
