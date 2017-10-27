import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

export default class MetaGroup extends Component {

  constructor(props) {
    super(props);
    this.contentProvider = this.props.contentProvider;

    const content = this.contentProvider.get('meta');
    this.state = {
      ...content,
    };

  }

  render() {
    return (
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="verify-admitad" content="62b0508367" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@vbence86" />        
        <meta name="description" content={this.state.websiteDescription} />
        <meta name="keywords" content={this.state.keywords} />
        <meta name="robots" content="index,follow" />
        <meta property="og:url" content={this.state.websiteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={this.state.websiteTitle} />
        <meta property="og:description" content={this.state.websiteDescription} />
        <meta property="og:image" content={`https:${this.state.cardPicture.file.url}`} />        
        <title>{this.state.websiteTitle}</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
      </Helmet>      
    );

  }

}
