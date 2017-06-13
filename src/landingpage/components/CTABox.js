import React, {Component} from 'react';

export default class CTABox extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').ctaBox;
  }

  render() {
    return (
      <section className="container" id="hire_me">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>{this.state.header}</h3>
            <h4><i className="fa fa-thumbs-up fa-2x"></i>{this.state.subtitle}</h4>

            <nav className="cl-effect-2">
              <a href="#contact_me"><span data-hover={this.state.buttonLabel}>{this.state.buttonLabel}</span></a>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}
