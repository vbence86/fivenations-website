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
          <h3>{this.state.header}</h3>
        </div>
      </div>
    );
  }

  renderFeatureSections() {
    return this.state.featureItems.map( (v, i) => {
      const blocks = [
        this.renderImageContainer(v.image.file.url),
        this.renderTextContainer(v),
      ];
      if (i % 2 === 0) blocks.reverse();
      return (
        <div className="container-fluid FeatureItem" key={i}>
          {blocks}
        </div>
      );
      
    });
  }

  renderImageContainer(url) {
    return (
      <div className="col-sm-6 col-xs-6 col-md-6">
        <div className="imageContainer">
          <img src={url} alt="animation" />
        </div>
      </div>
    );
  }

  renderTextContainer({header, description}) {
    return (
      <div className="col-sm-6 col-xs-6 col-md-6 textContainer">
        <h3 className="text-uppercase">{header}</h3>
        <p>{description}</p>
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
