import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import InstagramClient from '../../utils/InstagramClient';

export default class InstagramPictures extends Component {

  constructor(props) {
    super(props);

    this.images = [];
    this.state = {
      isLightboxOpen: false,
      photoIndex: 0,
    };
  }

  componentDidMount() {
    this.instagramClient = new InstagramClient();
    this.instagramClient.recent().then(data => {     
      this.saveInstagramResponseToState(data);
      this.setupLightboxImageList(data);
    });
  }

  saveInstagramResponseToState(recents) {
    if (!recents) return;
    this.setState({recents});
  }

  setupLightboxImageList(data) {
    if (!data || !data.data) return;
    data.data.forEach(v => {
      this.images.push(v.images.standard_resolution.url);
    });
  }

  renderImages() {
    if (!this.state.recents) return null;
    return this.state.recents.data.map((v, i) => (
      <div className="col-xs-3 col-md-3 pin" key={i}>
        <img onClick={this.imageOnClick.bind(this, i)} alt="instagram" src={v.images.low_resolution.url} width={293} height={293} />
        {this.renderFooter(v.caption)}
      </div>
    ));
  }

  imageOnClick(idx) {
    this.setState({
      isLightboxOpen: true,
      photoIndex: idx,
    });
  }

  renderFooter(caption) {
    if (!caption) return null;
    const captionText = caption.text;
    const captionUrl = caption.from.profile_picture;
    return (
      <div className="pinFooter">
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
    const {
      isLightboxOpen,
      photoIndex,
    } = this.state;

    return (
      <div className="developmentDetailsContainer" id="instagram-container">
        <div className="col-xs-4 col-md-4">
          <img height={200} width={200} src={require('../../../public/images/instagram.png')} alt="travis" />
        </div>
        <div className="col-xs-8 col-md-8 textContainer">
          <h2>{this.props.title}</h2>
          <h4>{this.props.subtitle}</h4>
          <p>{this.props.text}</p>
        </div>
        <div className="col-xs-8 col-md-8 pull-right instagramContainer">
          {this.renderImages()}
        </div>
        {isLightboxOpen &&
        <Lightbox
            mainSrc={this.images[photoIndex]}
            nextSrc={this.images[(photoIndex + 1) % this.images.length]}
            prevSrc={this.images[(photoIndex + this.images.length - 1) % this.images.length]}

            onCloseRequest={() => this.setState({isLightboxOpen: false})}
            onMovePrevRequest={() => this.setState({
              photoIndex: (photoIndex + this.images.length - 1) % this.images.length,
            })}
            onMoveNextRequest={() => this.setState({
              photoIndex: (photoIndex + 1) % this.images.length,
            })}
          />
        }      
      </div>
    );
  }

}
