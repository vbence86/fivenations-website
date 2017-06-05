import React, {Component} from 'react';

export default class ContactUs extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
  }

  render() {
    return (
      <section className="container-fluid sdm-bg" id="contact_me">
        <div className="row">
          <div className="overlay"></div>
          <div className="col-sm-12 text-center text-capitalize">
            <h3>want to discuss a project?</h3>
            <h4>just drop a message below and I will get in touch!</h4>
            <hr />
          </div>
        </div>
        <div className="row">
          <section className="col-sm-10 col-sm-offset-1">
            <div className="row text-center">
              <div className="col-sm-4 col-xs-12">
                <div className="block">
                  <i className="fa fa-envelope fa-2x"></i>
                  <h4 className="text-uppercase">Queries</h4>
                  <ul className="list-unstyled">
                    <li>info@mywebsite.com</li>
                    <li>contact@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-phone fa-2x"></i>
                  <h4 className="text-uppercase">Call Us</h4>
                  <ul className="list-unstyled">
                    <li>info@mywebsite.com</li>
                    <li>contact@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-home fa-2x"></i>
                  <h4 className="text-uppercase">Office</h4>
                  <ul className="list-unstyled">
                    <li>info@mywebsite.com</li>
                    <li>contact@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <form action="" className="row">
              <div className="col-sm-6 col-xs-12">
               <div className="form-group">
                 <label htmlFor="your_name">Your Name</label>
                 <input type="text" className="form-control" id="your_name" placeholder="Write Your Name" />
               </div>
               <div className="form-group">
                  <label htmlFor="your_email">Password</label>
                  <input type="email" className="form-control" id="your_email" placeholder="Enter Your Email" />
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="form-group">
                  <label htmlFor="your_message">Your Message</label>
                  <textarea className="form-control" rows="5" placeholder="Write Your Message"></textarea>

                </div>
              </div>
              <div className="col-sm-12 text-center margin-top-55 margin-bottom-55">
                <button type="submit" className="btn btn-orange" data-toggle="modal" data-target="#contactUsModal">Send Message</button>
              </div>
            </form>

            <div className="text-center row">
              <div className="col-sm-12">
                <ul className="social-networks spin-icon">
                  <li><a href="https://www.facebook.com/" className="icon-facebook">Facebook</a></li>
                  <li><a href="https://twitter.com/" className="icon-twitter">Twitter</a></li>
                  <li><a href="https://www.linkedin.com/" className="icon-linkedin">LinkedIn</a></li>
                  <li><a href="https://pinterest.com" className="icon-pinterest">Pinterest</a></li>
                  <li><a href="https://instagram.com" className="icon-instagram">Instagram</a></li>
                </ul>
                <p className="text-center margin-top-30">
                 &copy Copyright 2017 <a href="#">REACT Portfolio Template </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="modal fade" id="contactUsModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Mojo Web App redesign concept</h4>
            </div>
            <div className="modal-body">
              <p>Some portfolio description here. Some portfolio description here. Some portfolio description here. Some portfolio description here. Some portfolio description here. Some portfolio description here. </p>
              <img src="images/portfolio/port1.jpg" className="img-responsive" alt="" />
            </div>
          </div>
        </div>
        </div>

      </section>

    );
  }
}
