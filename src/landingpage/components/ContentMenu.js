import React, {Component} from 'react';

export default class ContentMenu extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').imageMenuSection;
  }

  renderImageMenuItems() {
    return this.state.imageMenuItems.map( (v, i) => (
      <div className="col-md-4 col-sm-6 col-xs-6 mix-target web" key={i}>
        <a href={v.url} target="_blank">
          <figure>
            <img src={v.image.file.url} alt="" />
            <figcaption>
              <h3>{v.title}</h3>
              <hr />
              <p>{v.subtitle}</p>
            </figcaption>
          </figure>
        </a>
      </div>
    ));
  }

  render() {
    return (
      <section className="container position-relative" id="portfolio">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 position-absolute">
            <div className="text-center filter-btns">
              <ul className="nav nav-pills">
                <li role="presentation">
                  <p className="btn">{this.state.title}</p>
                </li>
              </ul>
            </div>

            <div className="row" id="mix-wrapper">
              <div id="effect-5">
                {this.renderImageMenuItems()}
              </div>
              <div className="col-sm-12 text-center">
                <a href="#" className="btn btn-orange">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
