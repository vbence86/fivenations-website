/* globals $, jQuery, window */
import React, {Component} from 'react';
import {demoScenario} from './FiveNationsGameScript';

const gameContainerId = 'fivenations-game';
const s3BundleUrl = 'https://s3.amazonaws.com/fivenations/fivenations.0.35.0.js';

const getScript = src => {
  return new Promise((resolve, reject) => {
    const tag = document.createElement('script');
    tag.async = true;
    tag.defer = true;
    tag.src = src;
    tag.onload = resolve;
    tag.onerror = reject;
    document.body.appendChild(tag);
  });
};

export default class FiveNationsGame extends Component {

  constructor(props) {
    super(props);
    this.gameHasStarted = false;
  }

  componentWillMount() {
    if (this.app) return;
    getScript(s3BundleUrl).then(this.initialiseGame.bind(this));
  }

  initialiseGame() {
    this.app = new window.FiveNations({
      canvasElmId: gameContainerId,
    });

    window.FiveNations.Scriptbox
      .getInstance()
      .add('default', game => {
        demoScenario(game);
      });

    $(document.body).addClass('fivenationsLoaded');

  }

  startGame() {
    if (!this.app || this.gameHasStarted) return;
    this.app.start();
    this.gameHasStarted = true;
    $(document.body).addClass('fivenationsStarted');
  }

  render() {
    if (this.props.isOpen) {
      this.startGame();
    }
    return (
      <div id={gameContainerId} className={this.props.isOpen ? 'open' : ''} />
    );
  }

}
