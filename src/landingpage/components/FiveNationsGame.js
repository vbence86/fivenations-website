/* globals $, jQuery, window */
import React, {Component} from 'react';

const gameContainerId = 'fivenations-game';
const s3BundleUrl = 'https://s3.amazonaws.com/fivenations/fivenations.0.30.0.js';

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

        game.map.new({
          width: 128,
          height: 128,
        });

        game.eventEmitter.synced.players.add({
          user: true,
          team: 1,
          authorised: true,
        });

        game.eventEmitter.synced.players.add({
          team: 2,
        });

        for (var i = 100; i >= 0; i -= 1) {
          var id = [
            'hurricane',
            'orca',
            'halestrom',
            'invader',
            'intruder',
            'gathering',
            'crow',
            'avenger',
            'devastator',
            'gloom',
          ][i % 10];
          game.eventEmitter.synced.entities.add({
            id: id,
            team: Math.random() > 0.5 ? 1 : 2,
            x: 0 + Math.random() * 6000,
            y: 0 + Math.random() * 6000,
          });
        }

      });

    $(document.body).addClass('fivenationsLoaded');

  }

  startGame() {
    this.scrollUp();
    if (!this.app || this.gameHasStarted) return;
    this.app.start();
    this.gameHasStarted = true;
    $(document.body).addClass('fivenationsStarted');
  }

  scrollUp() {
    if ($(window).scrollTop() <= 100) return;
    jQuery('html, body').animate({
      scrollTop: $(`#${gameContainerId}`).offset().top + 300,
    }, 250);
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
