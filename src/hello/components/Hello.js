// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sayHello} from '../actions';
import {helloSelector} from '../selectors';
import css from './Hello.css';
import RaisedButton from 'material-ui/RaisedButton';

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
        <RaisedButton
          label={message}
          labelPosition="before"
          className={css.button}
          containerElement="label"
        >
        </RaisedButton>
      </div>
    );
  }
}

export default connect(helloSelector, {sayHello})(Hello);
