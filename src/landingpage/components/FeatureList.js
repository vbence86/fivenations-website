import React, {Component} from 'react';

export default class FeatureList extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').featureList;
    console.log(this.state);
  }

  renderFeatureSections() {
    return this.state.featureItems.map( (v, i) => (
      <div className="container-fluid FeatureItem" key={i}>
        <div className="col-sm-5 col-xs-5 col-md-5">
          <img src={v.image.file.url} alt="animation" />
        </div>
        <div className="col-sm-7 col-xs-7 col-md-7">
          <h4 className="text-uppercase">{v.header}</h4>
          <p>{v.description}</p>
        </div>
      </div>
    ));
  }

  render() {
    if (!this.state.featureItems || !this.state.featureItems.length) return null;
    return (
      <section id="features">
        {this.renderFeatureSections()}
      </section>
    );
  }
}
