import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

import Header from './Components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Normalize />
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">Home</Route>
          <Route path="/search">Search</Route>
          <Route>404 - Not Found</Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
