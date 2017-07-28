import React, {Component} from 'react';
import Script from 'react-load-script';

export default class CTABox extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').ctaBox;
  }

  renderDonateButton() {
    const attributes = {
      'data-donately-id': 'act_98266ac2436c',
      'data-stripe-publishable-key': 'pk_live_bcmLnFkEbTDuhsJ4p3WEonxp', 
      'data-donately-amount': '1',
      'data-donately-presets': '5,10,20,50,100', 
      'data-donately-currency': 'true', 
    };
    return (
      <Script url="https://cdn.donately.com/dntly-core/1.4/core.min.js" 
        attributes={attributes}/>
    );
  }

  render() {
    return (
      <section className="container" id="support-us">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>{this.state.header}</h3>
            <h4><i className="fa fa-thumbs-up fa-2x"></i>{this.state.subtitle}</h4>

            <nav className="cl-effect-2">
              {this.renderDonateButton()}
            </nav>
          </div>
        </div>
      </section>
    );
  }
}
