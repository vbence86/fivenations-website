import React, {Component} from 'react';
import HeroVideo from './HeroVideo';
import FiveNationsGame from './FiveNationsGame';
import {trackOpenGame, trackOpenDonation} from './GoogleAnalytics';

const heroVideo = {
  poster: '/images/first-frame-hero.jpg',
  source: {
    url: '/media/webpage_low.m4v',
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

    this.state.headerNavigation.unshift({
      href: '#home',
      label: 'Home',
    });

    this.onOpenGame = this.onOpenGame.bind(this);
  }

  renderMenu() {
    return this.state.headerNavigation.map( (v, i) => (
      <li role="presentation" key={i}>
        <a href={v.href}>
          <span className="fivenations_0header_menu_highlight sprite" />
          <span>{v.label}</span>
        </a>
      </li>
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
    this.setState({isGameOpen: true});
    trackOpenGame();
  }

  render() {

    return (
      <HeroVideo {...heroVideo}>
        <div id="home" className="container-fluid">
          <div className="row">
            <a href="#home"><span id="logo-small" className="fivenations_0header_logo_2color sprite" /></a>          
            <ul className="nav nav-pills menu-center margin-top-30 scroll-nav scroll-down bg-separator bg-menu">
              {this.renderMenu()}
            </ul>
            <div id="main-cta-container" className="col-sm-12 text-center">
              <p><span className="fivenations_1videobody_logo sprite"/></p>
              <h4 className="animated fadeInUp delay-250">{this.state.subHeader}</h4>
              <a onClick={this.onOpenGame} data-toggle="modal" data-target="#play-game-modal" data-action="play-game" href="#play-fivenations" className="fivenations_1videobody_btn_play_base sprite" />
            </div>
            <hr/>
            <div className="text-center margin-bottom-135 animated bounceInUp delay-500">
              {this.renderSocialIcons()}
            </div>
            <div id="secondary-cta-container" className="col-sm-12 text-center">
              <h2 className="viewport-animation animated fadeIn">{this.state.secondHeader}</h2>
              <h4 className="viewport-animation animated fadeIn delay-250">{this.state.secondSubHeader}</h4>
              <a onClick={trackOpenDonation} data-toggle="modal" data-target="#donately-modal" className="fivenations_4supportus_btn_donate_base sprite viewport-animation animated fadeIn delay-500" />
            </div>
          </div>
          <a onClick={this.onOpenGame} id="side-cta" data-toggle="modal" data-target="#play-game-modal" data-action="play-game" href="#play-fivenations" className="fivenations_floating_btn_base sprite" />
        </div>

        <div className="modal fade" id="play-game-modal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <FiveNationsGame isOpen={this.state.isGameOpen}/>
              </div>
            </div>
          </div>
        </div>                    
      </HeroVideo>
    );

  }

}
