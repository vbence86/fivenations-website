import React, {Component} from 'react';
import HeroVideo from './HeroVideo';
import FiveNationsGame from './FiveNationsGame';

const heroVideo = {
  poster: '/images/first-frame-hero.jpg',
  source: {
    url: '/media/test.mp4',
    type: 'video/mp4',
  },
};

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;

    const content = this.contentProvider.get('landingPage');
    const isGameOpen = false;
    this.state = {
      ...content,
      isGameOpen,
    };

    this.onOpenGame = this.onOpenGame.bind(this);
  }

  renderMenu() {
    return this.state.headerNavigation.map( (v, i) => (
      <li role="presentation" key={i}><a href={v.href}>{v.label}</a></li>
    ));
  }

  renderSocialIcons() {
    const icons = this.state.socialProviders.map( (v, i) => (
      <li key={i}><a href={v.url} target="_blank" className={`icon-${v.socialProviderId}`}>{v.label}</a></li>
    ));
    return (
      <ul className="social-networks">
        {icons}
      </ul>
    );
  }

  onOpenGame() {
    this.setState({
      isGameOpen: true,
    });
  }

  render() {

    return (
      <HeroVideo {...heroVideo}>
        <div id="home" className="container-fluid">
          <div className="row">
            <ul className="nav nav-pills menu-center margin-top-30 scroll-nav scroll-down">
              <li role="presentation" className="active"><a href="#home"><i className="fa fa-home" />{this.state.pageTitle}</a></li>
              {this.renderMenu()}
            </ul>
            <div id="main-cta-container" className="col-sm-12 text-center">
              <h1 className="animated fadeInUp">{this.state.header}</h1>
              <h4 className="animated fadeInUp delay-250">{this.state.subHeader}</h4>
              <a onClick={this.onOpenGame} data-action="play-game" href="#play-fivenations" className="btn btn-orange"><i className="fa fa-play-circle"/> {this.state.ctaButton}</a>
            </div>
            <FiveNationsGame isOpen={this.state.isGameOpen}/>
            <hr/>
            <div className="text-center margin-bottom-135 animated bounceInUp delay-500">
              {this.renderSocialIcons()}
            </div>
            <div id="secondary-cta-container" className="col-sm-12 text-center">
              <h2 className="viewport-animation animated fadeInUp delay-250">{this.state.secondHeader}</h2>
              <h4 className="viewport-animation animated fadeInUp delay-500">{this.state.secondSubHeader}</h4>
              <a data-toggle="modal" data-target="#donately-modal" className="btn btn-orange">{this.state.secondCtaButton}</a>
            </div>
          </div>
          <a onClick={this.onOpenGame} id="side-cta" data-action="play-game" href="#play-fivenations" className="btn btn-orange"><i className="fa fa-play-circle"/> {this.state.ctaButton}</a>
        </div>
      </HeroVideo>
    );

  }

}
