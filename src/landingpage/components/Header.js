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
      <ul className="social-networks">
        {icons}
      </ul>
    );
  }

  render() {

    return (
      <div>
        <Parallax strength={300} className="container-fluid sdm-bg" id="home">
          <Background blur={{min:0, max:15}}>
            <img alt="background" src="/images/background.jpg"/>
          </Background>
          <div className="row">
            <ul className="nav nav-pills menu-center margin-top-30 scroll-nav">
              <li role="presentation" className="active"><a href="#home"><i className="fa fa-home" />{this.state.pageTitle}</a></li>
              {this.renderMenu()}
            </ul>
            <div id="main-cta-container" className="col-sm-12 text-center">
              <h2>{this.state.header}</h2>
              <h4>{this.state.subHeader}</h4>
              <a id="main-cta" href="#play-fivenations" className="btn btn-orange"><i className="fa fa-play-circle"/> {this.state.ctaButton}</a>
            </div>
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
