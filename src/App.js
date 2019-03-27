import React, { PureComponent } from 'react'
import { GlobalStyle } from './reset'
import Header from './common/header'
import Login from './common/login'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom";


class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <Header></Header>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
