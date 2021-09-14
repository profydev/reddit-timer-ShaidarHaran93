import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyle, theme } from '../style';

import Header from '../components/header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">Home Page</Route>
        <Route path="/search">Search Page</Route>
        <Route>404 - Not Found</Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
