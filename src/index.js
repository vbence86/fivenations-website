// @flow

import React, {createElement} from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import configureStore from './root/configureStore';
import Root from './root/components/Root';
import ContentProvider from './utils/ContentProvider';
import {spaceId, accessToken} from './contentful.config.js';

import type {RootProps} from './root/components/Root';
import './index.scss';

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

const syncContentFromContentful = () =>
  ContentProvider.connect({
    space: spaceId,
    accessToken: accessToken,
    locale: 'en-US',
  });

Promise.all([
  syncContentFromContentful(),
]).then(() => {

  renderApp(Root, rootProps);

  if (module.hot) {
    // $FlowFixMe
    module.hot.accept('./root/components/Root', () => {
      const nextRoot = require('./root/components/Root').default;
      renderApp(nextRoot, rootProps);
    });
  }

});
