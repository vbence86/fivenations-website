/* global ga, $ */
import React, {Component} from 'react';

function trackOpenGame() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'Game',
    eventAction: 'click',
    eventLabel: 'Open',
  });
}

function trackOpenDonation() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'Donation modal',
    eventAction: 'click',
    eventLabel: 'Open',
  });      
}

function trackCloseDonation() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'Donation modal',
    eventAction: 'click',
    eventLabel: 'Close',
  });
}

function trackSubmitDonation() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'Donation modal',
    eventAction: 'click',
    eventLabel: 'Submit',
  });
}    

function trackOpenVideo() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'Video',
    eventAction: 'click',
    eventLabel: 'Open',
  });
}

export { 
  trackOpenVideo, 
  trackSubmitDonation, 
  trackOpenDonation, 
  trackCloseDonation, 
  trackOpenGame, 
};

export default class GoogleAnalytics extends Component {

  static propTypes = {
    account: React.PropTypes.string.isRequired,
    history: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    const content = this.contentProvider.get('landingPage');

    this.setState({
      account: content.gaAccount, 
    });

  }

  componentDidMount() {
    window.ga = window.ga || (() => { (ga.q = ga.q || []).push(arguments); }); ga.l = +new Date();
    const account = this.state.account;
    const scriptSrc = '//google-analytics.com/analytics.js';
    $.getScript(scriptSrc, () => {
      // Track Route changes
      ga('create', account, 'auto');
      ga('send', 'pageview');
      if (this.props.history) {
        this.props.history.listen((newLocation) => {
          ga('send', 'pageview', newLocation.pathname);
        });
      }
    });
  }

  render() {
    return <div key='google-analytics' />;
  }
}
