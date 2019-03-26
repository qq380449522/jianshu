import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from '../component/topic';
import Club from '../component/club';
import Article from '../component/article';
import Author from '../component/author';
import Actions from './store/actionCreater'
import code from '../../static/code.png'
import './style.css'


class Home extends PureComponent {
  render() {
    const { topShow } = this.props
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
          <div className="qr-code">
            <img src={code} alt="" />
            <div className="cont">
              <h4>下载简书APP ></h4>
              <p>随时随地发现和创作内容</p>
            </div>
            <div className="code">
              <img src={code} alt=""/>
            </div>
          </div>
          <Author></Author>
        </div>
        {
          topShow && <div className="back-top" onClick={this.backTop}>top</div>
        }
      </div>
    )
  }

  backTop() {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    this.props.getHomeList()
    window.addEventListener('scroll', this.props.toggleTopShow)
  }
}

const mapState = (state) => ({
  topShow: state.getIn(['homeReducer', 'topShow'])
})

const mapDispatch = (dispatch) => ({
  getHomeList() {
    Actions.getHomelist(dispatch)
  },
  toggleTopShow() {
    let action = {}
    if (document.documentElement.scrollTop > 600) {
      action = Actions.toggleTopShow(true)
    } else {
      action = Actions.toggleTopShow(false)
    }
    dispatch(action)
  }
})

export default connect(mapState, mapDispatch)(Home)