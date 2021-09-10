import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Components/Header';

import 'normalize.css';
import './GlobalStyle.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/search">Search</Route>
        <Route path="/">Home</Route>
      </Switch>
      App Placeholder
    </BrowserRouter>
  );
}

export default App;
