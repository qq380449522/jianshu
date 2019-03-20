import React from 'react'
import { connect } from 'react-redux';
import './style.css'

const Header = ({ focused, handleBlur, handleFocus }) => {
  return (
    <div className='header'>
      <a href="/" className='logo'> </a>
      <div className="nav">
        <a href="/" className="item left active">首页</a>
        <a href="/" className="item left">下载APP</a>
        <div className='search-box'>
          <input type="text" placeholder='搜索' className={focused ? 'focuse-search' : 'search'} onBlur={handleBlur} onFocus={handleFocus} />
          <span className="iconfont">&#xe6e4;</span>
        </div>
        <a href="/" className="item right">登录</a>
        <a href="/" className="item right"><span className="iconfont">&#xe636;</span></a>
      </div>
      <div className='addition right'>
        <a href="/" className='reg'>注册</a>
        <a href="/" className='write'><span className="iconfont">&#xe63a;</span>写文章</a>
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    focused: state.get('headReducer').get('focused')
  }
}
const mapDispatch = (dispatch) => {
  return {
    handleFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapState, mapDispatch)(Header)