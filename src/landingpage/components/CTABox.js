import React, {Component} from 'react';

const donatelyURL = 'https://cdn.donately.com/dntly-core/1.4/core.min.js';

export default class CTABox extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').ctaBox;
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

  render() {
    return (
      <section className="container-fluid bg-light" id="support-us">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>{this.state.header}</h3>
            <h4><i className="fa fa-thumbs-up fa-2x"></i> {this.state.subtitle}</h4>
            <button data-toggle="modal" data-target="#donately-modal" className="btn btn-orange">{this.state.buttonLabel}</button>
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
