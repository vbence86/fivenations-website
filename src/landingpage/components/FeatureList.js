import React, {Component} from 'react';

export default class FeatureList extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').featureList;
  }

  renderFeatureItems() {
    return this.state.featureItems.map( (v, i) => (
      <div className="col-sm-4 col-xs-6" key={i}>
        <div className="block">
          <i className={`fa fa-${v.icon} fa-3x`}></i>
          <h4 className="text-uppercase">{v.header}</h4>
          <p>{v.description}</p>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <section className="container-fluid sdm-bg" id="features">
        <div className="row">
          <div className="overlay"></div>
          <div className="col-sm-12">
            <h3 className="text-center"><i className="fa fa-bookmark"></i>{this.state.header}</h3>
          </div>
        </div>
        <section className="container">
          <div className="row">
            {this.renderFeatureItems()}
          </div>
        </section>
      </section>
    );
  }
}
