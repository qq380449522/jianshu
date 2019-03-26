import React, { Component } from 'react';
import {connect} from 'react-redux';
import Topic from '../component/topic';
import Club from '../component/club';
import Article from '../component/article';
import Actions from './store/actionCreater'
import './style.css'


class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="con-left">
          <div className="banner">
            <img src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
          </div>
          <Topic></Topic>
          <Article></Article>
        </div>  
        <div className="con-right">
          <Club></Club>
        </div>
      </div>
    )
  }
  
  componentDidMount() {
    this.props.getHomeList()
  }
}
const mapDispatch = (dispatch) => {
  return {
    getHomeList() {
      Actions.getHomelist(dispatch)
    }
  }
}

export default connect(null,mapDispatch)(Home)