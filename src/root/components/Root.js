// @flow

import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Hello from '../../hello/components/Hello';
import css from './Root.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export type RootProps = {
  store: Object,
}

const Root = ({store}: RootProps) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div className={css.component}>
      <Provider store={store}>
        <Router>
          <div className={css.routes}>
            <Route exact path="/" component={Hello}/>
          </div>
        </Router>
      </Provider>
    </div>
  </MuiThemeProvider>
);

export default Root;
