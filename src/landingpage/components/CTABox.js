import React, {Component} from 'react';

export default class CTABox extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
  }

  render() {
    return (
      <section className="container" id="hire_me">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>Need Any Help?</h3>
            <h4><i className="fa fa-thumbs-up fa-2x"></i> I am available for freelance hire</h4>

            <nav className="cl-effect-2">
              <a href="#contact_me"><span data-hover="Hire Me">Hire Me</span></a>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}
