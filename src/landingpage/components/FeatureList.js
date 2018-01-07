import React, {Component} from 'react';

export default class FeatureList extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').featureList;
  }

  renderHeader() {
    return (
      <div className="container-fluid bg-dark-blue">
        <div className="col-sm-12 col-xs-12 col-md-12 headerContainer">        
          <img src="images/fivenations_3game_pic.jpg" alt="" />
          <div className="textContainer">
            <h2 className="highlighted viewport-animation animated bounceInLeft">
              <span className="fivenations_3game_backgroundglow sprite" />
              <span>{this.state.title}</span>
            </h2>
            <h4 className="viewport-animation animated bounceInLeft delay-250">{this.state.subtitle}</h4>
            <p className="viewport-animation animated bounceInLeft delay-500">{this.state.description}</p>
          </div>
        </div>
      </div>
    );
  }

  renderFeatureSections() {
    return this.state.featureItems.map( (v, i) => (
      <div className="container-fluid FeatureItem" key={i}>
        {[
          this.renderImageContainer({idx: i, url: v.image.file.url}),
          this.renderTextBackground(),
          this.renderTextContainer({idx: i, url: v.image.file.url, ...v}),
        ]}
      </div>
    ));
  }

  renderImageContainer({url}) {
    return (
      <div className="imageContainer">
        <img src={url} alt="promotinal pictures from the game" />
      </div>
    );
  }

  renderTextBackground() {
    return (
      <div className="textBackground" />
    );
  }

  renderTextContainer({header, description, url, ctaAction, ctaLabel}) {
    return (
      <div className="textContainer">
        <h3 className="text-uppercase viewport-animation animated bounceInLeft">{header}</h3>
        <p className="viewport-animation animated bounceInLeft">{description}</p>
        {(() => {
          if (!ctaLabel) return null;
          return (
            <p className="viewport-animation animated bounceInLeft">
              <a data-target="#play-game-modal" data-action={ctaAction} className="ctaButton fivenations_3game_btn_tryit_base sprite" />
            </p>
          );
        })()}
      </div>
    );    
  }

  render() {
    if (!this.state.featureItems || !this.state.featureItems.length) return null;
    return (
      <section id="features" className="bg-dark-blue">
        {this.renderHeader()}
        <div>
          {this.renderFeatureSections()}
        </div>
      </section>
    );
  }
}
