import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from '../home/store/actionCreater'
import '../home/style.css'

class Article extends Component {
  render() {
    const { article, loadMore } = this.props;
    return (
      <div className="article">
        {
          article.map((item, index) => {
            return (
              <div className="art-item" key={index}>
                <img src={item.get('img')} alt="" />
                <h5>{item.get('title')}</h5>
                <p>{item.get('cont')}</p>
              </div>
            )
          })
        }
        <div className='loadMore' onClick={loadMore}>加载更多</div>
      </div>
    )
  }
}
const mapState = (state) => ({
  article: state.getIn(['homeReducer', 'articlelist'])
})

const mapDispatch = (dispatch) => ({
  loadMore() {
    Actions.loadMore(dispatch);
  }
})

export default connect(mapState, mapDispatch)(Article)