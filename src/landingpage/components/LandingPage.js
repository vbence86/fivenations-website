/* globals mixitup, $, window */

import React, {Component} from 'react';
import Header from './Header';
import ContentProvider from '../../utils/ContentProvider';

export class LandingPage extends Component {

  componentWillMount() {
    // Smooth Scroll Start
    var navInneer = $('.scroll-nav');
    navInneer.singlePageNav({
      updateHash: false,
      filter: ':not(.external)',
      offset: 61,
      speed: 1000,
      currentClass: 'sdm-active',
      easing: 'swing',
    });
    $(".scroll-nav li a[href^='#']").on('click', function(e) {
      e.preventDefault();
      $('.scroll-nav li a').removeClass('sdm-active');
      $(this).addClass('sdm-active');
    });
    // Smooth Scroll End
    // Add header class on scroll Start
    var win = $(window);
    win.on('scroll',function() {
      var scroll = win.scrollTop();
      if (scroll >= 400) {
        $('.scroll-nav').addClass('scroll-down');
      } else {
        $('.scroll-nav').removeClass('scroll-down');
      }
    });
    // Add header class on scroll End

  }

  render() {
    return (
      <div data-spy="scroll" data-target=".navbar" data-offset="50">
        <Header contentProvider={ContentProvider}/>

        <section className="container position-relative" id="portfolio">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 position-absolute">
              <div className="text-center filter-btns">
                <ul className="nav nav-pills">
                  <li role="presentation">
                    <a id="all" className="btn" data-mixitup-control data-filter="all">All</a>
                  </li>
                  <li role="presentation">
                    <a className="btn" data-mixitup-control data-filter=".web">Web</a>
                  </li>
                  <li role="presentation">
                    <a className="btn" data-mixitup-control data-filter=".android">Android</a>
                  </li>
                  <li role="presentation">
                    <a className="btn" data-mixitup-control data-filter=".ios">iOS</a>
                  </li>
                  <li role="presentation">
                    <a className="btn" data-mixitup-control data-filter=".desktop">Desktop</a>
                  </li>
                </ul>
              </div>

              <div className="row" id="mix-wrapper">
                <div id="effect-5">
                  <div className="col-md-4 col-sm-6 col-xs-6 mix-target web" data-order="1">
                    <figure>
                      <img src="images/portfolio/port1.jpg" alt="" />
                      <figcaption>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          <h3>Mojo Web App redesign concept</h3>
                          <hr />
                          <p>Branding , Development</p>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-6 mix-target web" data-order="2">
                    <figure>
                      <img src="images/portfolio/port2.jpg" alt="" />
                      <figcaption>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          <h3>Mojo Web App redesign concept</h3>
                          <hr />
                          <p>Branding , Development</p>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-6 mix-target android" data-order="3">
                    <figure>
                      <img src="images/portfolio/port1.jpg" alt="" />
                      <figcaption>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          <h3>Mojo Web App redesign concept</h3>
                          <hr />
                          <p>Branding , Development</p>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-6 mix-target ios" data-order="4">
                    <figure target="_blank">
                      <img src="images/portfolio/port4.jpg" alt="" />
                      <figcaption>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          <h3>Mojo Web App redesign concept</h3>
                          <hr />
                          <p>Branding , Development</p>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-6 mix-target ios" data-order="5">
                    <figure>
                      <img src="images/portfolio/port5.jpg" alt="" />
                      <figcaption>
                        <a href="#" className="porto" data-toggle="modal" data-target="#myModal">
                          <h3>Mojo Web App redesign concept</h3>
                          <hr />
                          <p>Branding , Development</p>
                        </a>

                      </figcaption>
                    </figure>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-6 mix-target desktop" data-order="6">
                    <figure>
                      <img src="images/portfolio/port6.jpg" alt="" />
                      <figcaption>
                        <a href="#" data-toggle="modal" data-target="#myModal">
                          <h3>Mojo Web App redesign concept</h3>
                          <hr />
                          <p>Branding , Development</p>
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-sm-12 text-center">

                  <a href="#" className="btn btn-orange">Load More</a>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid sdm-bg" id="reviews">
          <div className="row">
            <div className="overlay"></div>

            <div className="container">
              <div className="row">
                <div className="col-md-12" data-wow-delay="0.2s">
                  <div className="carousel slide" data-ride="carousel" id="quote-carousel">

                    <ol className="carousel-indicators">
                      <li data-target="#quote-carousel" data-slide-to="0" className="active"><img className="img-responsive " src="images/face1.jpg" alt="" />
                      </li>
                      <li data-target="#quote-carousel" data-slide-to="1"><img className="img-responsive" src="images/face2.jpg" alt="" />
                      </li>
                      <li data-target="#quote-carousel" data-slide-to="2"><img className="img-responsive" src="images/girl_face.png" alt="" />
                      </li>
                    </ol>

                    <div className="carousel-inner text-center">

                      <div className="item active">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">

                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. !</p>
                              <small>Danial Munsif</small>
                            </div>
                          </div>
                        </blockquote>
                      </div>

                      <div className="item">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">

                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                              <small>Danial Munsif</small>
                            </div>
                          </div>
                        </blockquote>
                      </div>

                      <div className="item">
                        <blockquote>
                          <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">

                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .</p>
                              <small>Danial Munsif</small>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>

                    <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-angle-left fa-2x"></i></a>
                    <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i className="fa fa-angle-right fa-2x"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="about_me">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-sm-12">
              <div className="row">
                <div className="col-md-5 col-sm-4 col-xs-12">
                  <h3><i className="fa fa-user"></i>About me</h3>
                  <div className="block">
                    <p>
                      I am a passionate User Experience and User Interface Designer who has been working in this field for more than 3 years now.
                    </p>
                    <p>
                      You have an idea, you need someone to bring it ot life. Or you already have a product that needs to be redined to meet the demand of 2017 users!. This is where i come in! With my knowledge and creativity. I can take your idea, your product to the next level. Lets have a chat and discuss your idea!
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-6">
                  <h3><i className="fa fa-building"></i>Work history</h3>
                  <div className="block">
                    <h4>Product Manager</h4>
                    <ul className="icon-list">
                      <li><i className="fa fa-building"></i> Dropbox</li>
                      <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                    </ul>
                  </div>
                  <div className="block">
                    <h4> Senior UX Designer</h4>
                    <ul className="icon-list">
                      <li><i className="fa fa-building"></i> Dropbox</li>
                      <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                    </ul>
                  </div>
                  <div className="block">
                    <h4>UX Design Intern</h4>
                    <ul className="icon-list">
                      <li><i className="fa fa-building"></i> Dropbox</li>
                      <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6">
                  <h3><i className="fa fa-graduation-cap"></i>Education</h3>
                  <div className="block">
                    <h4>User experience Design</h4>
                    <ul className="icon-list">
                      <li><i className="fa fa-book"></i> University of Punjab</li>
                      <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                    </ul>
                  </div>
                  <div className="block">
                    <h4>User experience Design</h4>
                    <ul className="icon-list">
                      <li><i className="fa fa-book"></i> University of Punjab</li>
                      <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                    </ul>
                  </div>
                  <div className="block">
                    <h4>User experience Design</h4>
                    <ul className="icon-list">
                      <li><i className="fa fa-book"></i> University of Punjab</li>
                      <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid sdm-bg" id="expertness">
          <div className="row">
            <div className="overlay"></div>
            <div className="col-sm-12">
              <h3 className="text-center"><i className="fa fa-bookmark"></i>What I Do</h3>
            </div>
          </div>
          <section className="container">
            <div className="row">
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-android fa-3x"></i>
                  <h4 className="text-uppercase">Mobile Apps</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-code fa-3x"></i>
                  <h4 className="text-uppercase">web design</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-magic fa-3x"></i>
                  <h4 className="text-uppercase">UX/UI Design</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-camera fa-3x"></i>
                  <h4 className="text-uppercase">Photography</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-lightbulb-o fa-3x"></i>
                  <h4 className="text-uppercase">brand identity</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="block">
                  <i className="fa fa-user-secret fa-3x"></i>
                  <h4 className="text-uppercase">analytics</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
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
        <section className="container-fluid sdm-bg" id="contact_me">
          <div className="row">
            <div className="overlay"></div>
            <div className="col-sm-12 text-center text-capitalize">
              <h3>want to discuss a project?</h3>
              <h4>just drop a message below and i'll get in touch!</h4>
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
                <button type="submit" className="btn btn-orange">Send Message</button>
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
     </section>

       <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
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

      </div>
    );
  }
}

export default LandingPage;
