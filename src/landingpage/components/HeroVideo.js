import React, {Component} from 'react';
import classNames from 'classnames';
import {default as Video} from 'react-html5video';

export default class HeroVideo extends Component {

  render() {

    const _className = classNames('hero-video container-fluid', this.props.className);

    return (
      <div className={_className}>
		    <Video autoPlay loop muted poster={ this.props.poster }>
          <source src={ this.props.source.url } type={ this.props.source.type } />
          <h1>Optional HTML and components can be added also</h1>
        </Video>
        <div className="backdrop" />  
        <div className="container-fluid">
          { this.props.children }
        </div>
      </div>
    );

  }
}
