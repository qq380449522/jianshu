import React, { PureComponent } from 'react'
import { GlobalStyle } from './reset'
import Header from './common/header'
import Home from './pages/home'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom";


class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Header>
        </Header>
        <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
