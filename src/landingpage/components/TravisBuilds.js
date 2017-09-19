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
    const firstBuild = this.state.builds.unshift();
    return this.renderBuild(firstBuild, 0);
  }

  renderBuild(build, idx) {
    const finished = 'finished' === build.state;
    const color = finished ? 'success' : 'danger';
    const icon = finished ? 'check-square' : 'warning';
    const buildUrl = `https://travis-ci.org/vbence86/fivenations/builds/${build.id}`;
    const commitUrl = `https://github.com/vbence86/fivenations/commit/${build.commit}`;
    return (
      <div className="buildItem" key={idx}>
        <div className={`row bg-${color} text-${color}`} key={idx}>
          <a href={buildUrl} target="_blank">
            <div className="col-xs-6 col-md-6">
              <h5><i className={`fa fa-${icon}`}></i> Build #{build.number}</h5>
            </div>
            <div className="col-xs-6 col-md-6">
              <p className="text-right">{build.branch}</p>
            </div>
          </a>
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
    );
  }

  render() {
    return (
      <div className="developmentDetailsContainer" id="travis-container">
        <div className="col-xs-12 col-md-4">
          <img height={200} width={200} src={require('../../../public/images/travis-ci.svg')} alt="travis" />
        </div>
        <div className="col-xs-12 col-md-8 textContainer">
          <h2>{this.props.title}</h2>
          <h4>{this.props.subtitle}</h4>
          <p>{this.props.text}</p>
        </div>
        <div className="col-xs-12 col-md-8 pull-right buildsContainer">
          {this.renderBuilds()}
        </div>        
      </div>
    );
  }

}
