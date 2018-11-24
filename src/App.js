import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import AppHeader from '@c/layout/app-header';
import AppContainer from '@pages';
import AppFooter from '@c/layout/app-footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader></AppHeader>
        <AppContainer></AppContainer>
        <AppFooter></AppFooter>
      </div>
    );
  }
}

export default App;
