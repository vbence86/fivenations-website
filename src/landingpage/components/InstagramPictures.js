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
    return this.state.recents.data.map((v, i) => (
      <div className="col-xs-6 col-md-6" key={i}>
        <img alt="instagram" src={v.images.low_resolution.url} width={293} height={293} />
        {this.renderFooter(v.caption)}
      </div>
    ));
  }

  renderFooter(caption) {
    if (!caption) return null;
    const captionText = caption.text;
    const captionUrl = caption.from.profile_picture;
    return (
      <div>
        <div className="col-xs-3 col-md-3">
          <img src={captionUrl} width={32} height={32} alt="author"/>
        </div>
        <div className="col-xs-9 col-md-9">
          <p>{captionText}</p>
        </div>
      </div>
    );    
  }

  render() {
    return (
      <div id="instagram-container">
        <div className="col-xs-4 col-md-4">
          <img height={200} width={200} src={require('../../../public/images/instagram.png')} alt="travis" />
        </div>
        <div className="col-xs-8 col-md-8 instagramContainer">
          {this.renderImages()}
        </div>
      </div>
    );
  }

}
