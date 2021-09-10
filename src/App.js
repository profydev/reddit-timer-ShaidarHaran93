import React from 'react';
import { Route, Router, Switch } from 'react-router';

import Normalize from 'normalize.css';
import GlobalStyle from './GlobalStyle.css';

function App() {
  return (
    <Router>
      <Normalize />
      <GlobalStyle />
      <Switch>
        <Route path="/search">Search</Route>
        <Route path="/">Home</Route>
      </Switch>
      App Placeholder
    </Router>
  );
}

export default App;
