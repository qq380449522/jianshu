import React, { Component } from 'react';
import {GlobalStyle} from './reset'
import Header from './common/header/index'
import store from './store'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
        <Header></Header>
      </Provider>
    );
  }
}

export default App;
