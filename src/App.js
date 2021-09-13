import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Normalize />
        <GlobalStyle />
        <Switch>
          <Route exact path="/search">Search</Route>
          <Route path="/">Home</Route>
          <Route>404 - Not Found</Route>
        </Switch>
        App Placeholder
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
