import React, {Component} from 'react';

export default class ContentMenu extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
  }

  render() {
    return (
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
    );
  }

}
