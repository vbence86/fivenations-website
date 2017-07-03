import React, {Component} from 'react';
import TravisBuilds from './TravisBuilds';
import GitHubClient from '../../utils/GitHubClient';

export default class ContentMenu extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;
    this.state = this.contentProvider.get('landingPage').imageMenuSection;
  }

  componentDidMount() {
    this.gitHubClient = new GitHubClient();
    this.gitHubClient.issues().then(issues => {
      this.setState({issues});
      console.log(issues);
    });
  }

  renderImageMenuItems() {
    return this.state.imageMenuItems.map( (v, i) => (
      <div className="col-md-4 col-sm-6 col-xs-6 mix-target web" key={i}>
        <a href={v.url} target="_blank">
          <figure>
            <img src={v.image.file.url} alt="" />
            <figcaption>
              <h3>{v.title}</h3>
              <hr />
              <p>{v.subtitle}</p>
            </figcaption>
          </figure>
        </a>
      </div>
    ));
  }

  render() {
    return (
      <section className="container position-relative" id="development">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 position-absolute">
            <div className="row">
              <TravisBuilds />
              <div className="col-sm-12 text-center">
                <a href="#" className="btn btn-orange">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
