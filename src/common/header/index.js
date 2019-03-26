import React, { Component } from 'react'
import { connect } from 'react-redux';
import Actions from './store/actionCreater'
import './style.css'


class Header extends Component {
  getSearchInfo = () => {
    const { focused, hover, currentPage, changePageIndex, hotlist, handleMouseEnter, handleMouseLeave, totalPage } = this.props;
    const newlist = hotlist.toJS();
    const listItems = [];
    for (let index = (currentPage - 1) * 10; index < currentPage * 10; index++) {
      let item = newlist[index];
      if (!item) break
      listItems.push(
        <div className='list-item' key={item}>{item}</div>
      )
    }
    if (focused || hover) {
      var transform = 'rotate(0deg)';
      return (
        <div className="search-info" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='search-title'>热门搜索<a href="#change" className='search-change right' onClick={() => changePageIndex(currentPage, totalPage, this.icon)}><span ref={(icon) => this.icon = icon} className="iconfont rotate" style={{transform: transform}}>&#xe851;</span>换一换</a></div>
          {listItems}
        </div>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleBlur, handleFocus, totalPage } = this.props;
    return (
      <div className='header'>
        <a href="/" className='logo'> </a>
        <div className="nav">
          <a href="/" className="item left active">首页</a>
          <a href="/" className="item left">下载APP</a>
          <div className='search-box'>
            <input type="text" placeholder='搜索' className={focused ? 'focuse-search' : 'search'} onBlur={handleBlur} onFocus={() => handleFocus(totalPage)} />
            <span className="iconfont">&#xe6e4;</span>
            {this.getSearchInfo()}
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
}

const mapState = (state) => {
  return {
    focused: state.getIn(['headReducer', 'focused']),
    hover: state.getIn(['headReducer', 'hover']),
    hotlist: state.getIn(['headReducer', 'hotlist']),
    currentPage: state.getIn(['headReducer', 'currentPage']),
    totalPage: state.getIn(['headReducer', 'totalPage'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    handleFocus(totalPage) {
      if (totalPage === 1) {
        Actions.get_search_list(dispatch);
      }
      const action = Actions.search_focus();
      dispatch(action)
    },
    handleBlur() {
      const action = Actions.search_blur();
      dispatch(action)
    },
    handleMouseEnter() {
      const action = Actions.mouse_enter();
      dispatch(action)
    },
    handleMouseLeave() {
      const action = Actions.mouse_leave();
      dispatch(action)
    },
    changePageIndex(page, totalPage, icon) {
      let angle = icon.style.transform.replace(/[^0-9]/ig, '')
      angle = parseInt(angle) + 360
      icon.style.transform = "rotate(" + angle + "deg)";
      if (page < totalPage) {
        const action = Actions.change_page_index(page + 1);
        dispatch(action)
      } else {
        const action = Actions.change_page_index(1);
        dispatch(action)
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Header)