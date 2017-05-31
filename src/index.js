// @flow

import React, {createElement} from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import configureStore from './root/configureStore';
import Root from './root/components/Root';
import './index.css';

import type {RootProps} from './root/components/Root';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const rootProps = {
  store: configureStore(),
};

const renderApp = (component: any, props: RootProps) =>
  render(
    <AppContainer>
      {createElement(component, props)}
    </AppContainer>,
    document.getElementById('root')
  );

renderApp(Root, rootProps);

if (module.hot) {
  // $FlowFixMe
  module.hot.accept('./root/components/Root', () => {
    const nextRoot = require('./root/components/Root').default;
    renderApp(nextRoot, rootProps);
  });
}
