import React, {Component} from 'react';
import TravisClient from '../../utils/TravisClient';

export default class TravisBuilds extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.travisClient = new TravisClient();
    this.travisClient.builds().then(builds => {
      this.setState({builds});
      console.log(builds);
    });
  }

  renderBuilds() {
    if (!this.state.builds) return null;
    return this.state.builds.map((v, i) => this.renderBuild(v, i));
  }

  renderBuild(build, idx) {
    const finished = 'finished' === build.state;
    const color = finished ? 'success' : 'danger';
    const icon = finished ? 'check-square' : 'warning';
    return (
      <div className={`row bg-${color} text-${color}`} key={idx}>
        <div className="col-md-6">
          <h3><i className={`fa fa-${icon}`}></i> Build #{build.number}</h3>
        </div>
        <div className="col-md-6">
          <p>Subtitle</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-4 col-md-4">
          <img src={require('../../../public/images/face1.jpg')} alt="travis" />
        </div>
        <div className="col-xs-8 col-md-8">
          {this.renderBuilds()}
        </div>
      </div>
    );
  }

}
