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
        <title>{this.state.websiteTitle}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@vbence86" />        
        <meta charSet="utf-8" />
        <meta name="description" content={this.state.websiteDescription} />
        <meta name="keywords" content={this.state.keywords} />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <meta property="og:url" content={this.state.websiteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={this.state.websiteTitle} />
        <meta property="og:description" content={this.state.websiteDescription} />
        <meta property="og:image" content={this.state.cardPicture} />        
      </Helmet>      
    );

  }

}
