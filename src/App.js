import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import './GlobalStyle.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search">Search</Route>
        <Route path="/">Home</Route>
      </Switch>
      App Placeholder
    </BrowserRouter>
  );
}

export default App;
