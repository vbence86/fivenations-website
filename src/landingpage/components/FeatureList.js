import React, {Component} from 'react';

export default class FeatureList extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').featureList;
  }

  renderHeader() {
    return (
      <div className="container-fluid bg-dark">
        <div className="col-sm-12 col-xs-12 col-md-12 headerContainer">
          <h2 className="viewport-animation animated bounceInLeft">{this.state.title}</h2>
          <h4 className="viewport-animation animated bounceInLeft delay-250">{this.state.subtitle}</h4>
          <p className="viewport-animation animated bounceInLeft delay-500">{this.state.description}</p>
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
              <a data-action={ctaAction} className="btn btn-orange"><i className="fa fa-play-circle"/> {ctaLabel}</a>
            </p>
          );
        })()}
      </div>
    );    
  }

  render() {
    if (!this.state.featureItems || !this.state.featureItems.length) return null;
    return (
      <section id="features">
        {this.renderHeader()}
        <div className="bg-dark">
          {this.renderFeatureSections()}
        </div>
      </section>
    );
  }
}
