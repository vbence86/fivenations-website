import React, {Component} from 'react';

export default class FeatureList extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').featureList;
    console.log(this.state);
  }

  renderHeader() {
    return (
      <div className="container-fluid headerContainer bg-light">
        <div className="col-sm-12 col-xs-12 col-md-12 text-center">
          <i className="fa fa-gears headerIcon"></i>
          <h3>{this.state.header}</h3>
        </div>
      </div>
    );
  }

  renderFeatureSections() {
    return this.state.featureItems.map( (v, i) => {
      const blocks = [
        this.renderImageContainer({idx: i, url: v.image.file.url}),
        this.renderTextContainer({idx: i, url: v.image.file.url, ...v}),
      ];
      if (i % 2 === 0) blocks.reverse();
      return (
        <div className="container-fluid FeatureItem" key={i}>
          {blocks}
        </div>
      );
      
    });
  }

  renderImageContainer({url}) {
    return (
      <div className="col-sm-6 col-xs-6 col-md-6">
        <div className="imageContainer">
          <img className="zoomAnimation" src={url} alt="animation" />
        </div>
      </div>
    );
  }

  renderTextContainer({header, description, url, ctaAction, ctaLabel}) {
    return (
      <div className="col-sm-6 col-xs-6 col-md-6">
        <div className="imageContainer">
          <img className="backgroundImage" src={url} alt="animation" />
          <div className="textContainer">
            <h3 className="text-uppercase">{header}</h3>
            <p>{description}</p>
            {(() => {
              if (!ctaLabel) return null;
              return (
                <p>
                  <a data-action={ctaAction} className="btn btn-orange"><i className="fa fa-play-circle"/> {ctaLabel}</a>
                </p>
              );
            })()}
          </div>
        </div>
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
