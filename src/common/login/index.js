import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Actions from './store/actionsCreator'
import './style.css'

class Login extends PureComponent {
  render() {
    const { loginStatus, Login } = this.props;
    if (loginStatus) {
      return <Redirect to='/'></Redirect>
    } else {
      return (
        <div className='sign'>
          <div className='login-box'>
            <h2>登录</h2>
            <input type="text" placeholder="账号" ref={(acccount) => { this.acccount = acccount }} />
            <input type="text" placeholder="密码" ref={(password) => { this.password = password }} />
            <button onClick={() => Login(this.acccount, this.password)}>登录</button>
          </div>
        </div>
      )
    }
  }
  componentDidMount() {
    this.props.loginPage(true)
  }
  componentWillUnmount() {
    this.props.loginPage(false)
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['loginReducer', 'loginStatus'])
})

const mapDispatch = (dispatch) => ({
  Login(acccount, password) {
    Actions.login(dispatch, acccount.value, password.value);
  },
  loginPage(flag) {
    const action = {
      type: 'loginPage',
      value: flag
    }
    dispatch(action)
  }
})

export default connect(mapState, mapDispatch)(Login)