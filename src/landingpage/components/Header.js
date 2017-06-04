import React, {Component} from 'react';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
  }

  render() {
    return (
        <header className="container-fluid sdm-bg" id="home">
          <div className="row">
            <div className="overlay" />
            <ul className="nav nav-pills menu-center margin-top-30 scroll-nav">
              <li role="presentation" className="active"><a href="#home"><i className="fa fa-home">{this.contentProvider.get('landingPage').pageTitle}</i></a></li>
              <li role="presentation"><a href="#portfolio"></a></li>
              <li role="presentation"><a href="#reviews">Reviews</a></li>
              <li role="presentation"><a href="#about_me">About</a></li>
              <li role="presentation"><a href="#expertness">Services</a></li>
              <li role="presentation"><a href="#contact_me">Contact</a></li>
            </ul>
            <img src="images/profile.jpg" className="margin-top-76 img-circle center-block profile_picture" alt="profile" />
            <h1 className="text-capitalize text-center">Jeanetter benson</h1>
            <h3 className="text-capitalize text-center">UX/UI designer</h3>
            <hr/>
            <div className="text-center margin-bottom-135">
              <ul className="social-networks spin-icon">
                <li><a href="https://www.facebook.com/" className="icon-facebook">Facebook</a></li>
                <li><a href="https://twitter.com/" className="icon-twitter">Twitter</a></li>
                <li><a href="https://www.linkedin.com/" className="icon-linkedin">LinkedIn</a></li>
                <li><a href="https://pinterest.com" className="icon-pinterest">Pinterest</a></li>
                <li><a href="https://instagram.com" className="icon-instagram">Instagram</a></li>
              </ul>
            </div>
          </div>
        </header>      
    );
  }

}
