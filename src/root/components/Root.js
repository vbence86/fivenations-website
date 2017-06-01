// @flow

import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from '../../landingpage/components/LandingPage';

export type RootProps = {
  store: Object,
}

const Root = ({store}: RootProps) => (
  <div>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
        </div>
      </Router>
    </Provider>
  </div>
);

export default Root;
