// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sayHello} from '../actions';
import {helloSelector} from '../selectors';
import css from './Hello.css';

export class Hello extends Component {

  static defaultProps = {
    message: 'Hello from React.',
  }

  componentWillMount() {
    this.props.sayHello();
  }

  render() {
    const {message} = this.props;

    return (
      <div className={css.component}>
        <h1>{message}</h1>
      </div>
    );
  }
}

export default connect(helloSelector, {sayHello})(Hello);
