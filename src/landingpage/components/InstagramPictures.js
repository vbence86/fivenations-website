import React, {Component} from 'react';
import InstagramClient from '../../utils/InstagramClient';

export default class InstagramPictures extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.instagramClient = new InstagramClient();
    this.instagramClient.recent().then(recents => {
      console.log(recents);
      this.setState({recents});
    });
  }

  renderImages() {
    if (!this.state.recents) return null;
    return null;
  }

  render() {
    return (
      <div id="instagram-container">
        <div className="col-xs-4 col-md-4">
          <img height={200} width={200} src={require('../../../public/images/travis-ci.svg')} alt="travis" />
        </div>
        <div className="col-xs-8 col-md-8 instagramContainer">
          {this.renderImages()}
        </div>
      </div>
    );
  }

}
