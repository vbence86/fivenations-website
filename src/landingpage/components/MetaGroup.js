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
      <Helmet />
    );

  }

}
