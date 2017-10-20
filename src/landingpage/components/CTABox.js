import React, {Component} from 'react';
import {trackOpenDonation} from './GoogleAnalytics';

const donatelyURL = 'https://cdn.donately.com/dntly-core/1.4/core.min.js';

export default class CTABox extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').ctaBox;

    this.onDonate = this.onDonate.bind(this);
  }

  createDonatelyScript() {
    const attributes = {
      'data-donately-id': 'act_98266ac2436c',
      'data-stripe-publishable-key': 'pk_live_bcmLnFkEbTDuhsJ4p3WEonxp', 
      'data-donately-amount': '1',
      'data-donately-presets': '5,10,20,50,100', 
      'data-donately-currency': 'true',
      src: donatelyURL,
      async: true,
      defer: true,
    };
    const script = document.createElement('script');
    Object.keys(attributes).forEach(key => {
      script.setAttribute(key, attributes[key]);
    });
    return script;
  }

  componentDidMount() {
    const parent = document.querySelector('#donately-container');
    if (parent) {
      parent.appendChild(this.createDonatelyScript());
    }
  }

  onDonate() {
    trackOpenDonation();
  }

  render() {
    return (
      <section className="container-fluid bg-dark" id="support-us">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3 className="highlighted viewport-animation animated fadeInUp">
              <span className="fivenations_3game_backgroundglow sprite" />
              <span>{this.state.header}</span>
            </h3>
            <h4 className="viewport-animation animated fadeInUp"><i className="fa fa-thumbs-up fa-2x"></i> {this.state.subtitle}</h4>
            <a onClick={this.onDonate} data-toggle="modal" data-target="#donately-modal" className="fivenations_4supportus_btn_donate_base sprite viewport-animation animated fadeInUp" />
            <div className="modal fade" id="donately-modal" tabIndex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{this.state.header}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body" id="donately-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
