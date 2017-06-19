import React, {Component} from 'react';

export default class CTABox extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').ctaBox;
  }

  renderDonateButton() {
    return (
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="KN7SL36TVKS9N" />
        <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
        <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
      </form>
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
