import React, {Component} from 'react';

export default class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').contactUs;
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

  render() {
    const year = 1900 + (new Date()).getYear();
    return (
      <section className="container-fluid sdm-bg" id="contact-us">
        <div className="row">
          <div className="overlay"></div>
          <div className="col-sm-12 text-center text-capitalize">
            <h3>{this.state.header}</h3>
            <h4>{this.state.subtitle}</h4>
            <hr />
          </div>
        </div>
        <div className="row">
          <section className="col-sm-10 col-sm-offset-1">
            <div className="text-center row">
              <div className="col-sm-12">
                {this.renderSocialIcons()}
                <p className="text-center margin-top-30">
                 &copy Copyright {year} <a href="#">Webellion Ltd. </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}
