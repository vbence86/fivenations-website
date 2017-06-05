import React, {Component} from 'react';

export default class FeatureList extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
  }

  render() {
    return (
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
    );
  }
}
