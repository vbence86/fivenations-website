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
    });
  }

  renderBuilds() {
    if (!this.state.builds) return null;
    return this.state.builds
      .filter((v, i) => i < 5)
      .map((v, i) => this.renderBuild(v, i));
  }

  renderBuild(build, idx) {
    const finished = 'finished' === build.state;
    const color = finished ? 'success' : 'danger';
    const icon = finished ? 'check-square' : 'warning';
    const buildUrl = `https://travis-ci.org/vbence86/fivenations-website/builds/${build.id}`;
    const commitUrl = `https://github.com/vbence86/fivenations/commit/${build.commit}`;
    return (
      <a href={buildUrl} target="_blank">
        <div className="buildItem" key={idx}>
          <div className={`row bg-${color} text-${color}`} key={idx}>
            <div className="col-xs-6 col-md-6">
              <h5><i className={`fa fa-${icon}`}></i> Build #{build.number}</h5>
            </div>
            <div className="col-xs-6 col-md-6">
              <p className="text-right">{build.branch}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-6">
              <p>{build.message}</p>
            </div>
            <div className="col-xs-6 col-md-6">
              <p className="text-right"><a href={commitUrl} target="_blank">{build.commit.substring(0, 8)} Changeset <i className="fa fa-arrow-right"></i></a></p>
            </div>
            <p></p>
          </div>
        </div>
      </a>
    );
  }

  render() {
    return (
      <div id="travis-container">
        <div className="col-xs-4 col-md-4">
          <img height={200} width={200} src={require('../../../public/images/travis-ci.svg')} alt="travis" />
        </div>
        <div className="col-xs-8 col-md-8 buildsContainer">
          {this.renderBuilds()}
        </div>
      </div>
    );
  }

}
