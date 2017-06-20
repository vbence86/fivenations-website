import React, {Component} from 'react';
import GitHubClient from '../../utils/GitHubClient';
import TravisClient from '../../utils/TravisClient';

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

    this.travisClient = new TravisClient();
    this.travisClient.builds().then(builds => {
      this.setState({builds});
      console.log(builds);
    });

  }

  renderImageMenuItems() {
    return this.state.imageMenuItems.map( (v, i) => (
      <div className="col-md-12 col-sm-12 col-xs-12 mix-target web" key={i}>
        <div className="col-md-3 col-sm-12 col-xs-12 mix-target web">
          <a href={v.url} target="_blank">
            <figure>
              <img src={v.image.file.url} alt="" />
              <figcaption>
                <p>{v.subtitle}</p>
              </figcaption>
            </figure>
          </a>
        </div>
        <div className="col-md-9 col-sm-12 col-xs-12 mix-target web">
          <h3>{v.title}</h3>
          <p>fjsadkfjdsakfjdlkfasjdkfjdslkfjadskfdjjafkljfdak</p>
        </div>
      </div>

    ));
  }

  render() {
    return (
      <section className="container position-relative" id="development">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 position-absolute">
            <div className="text-center filter-btns">
              <ul className="nav nav-pills">
                <li role="presentation">
                  <h3 className="btn">{this.state.title}</h3>
                </li>
              </ul>
            </div>

            <div className="row" id="mix-wrapper">
              <div id="effect-5">
                {this.renderImageMenuItems()}
              </div>
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
