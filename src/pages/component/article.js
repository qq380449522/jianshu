import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Actions from '../home/store/actionCreater'
import { Link } from 'react-router-dom'
import '../home/style.css'

class Article extends PureComponent {
  render() {
    const { article, loadMore, pageIndex } = this.props;
    return (
      <div className="article">
        {
          article.map((item, index) => {
            return (
              <div className="art-item" key={index}>
                <img src={item.get('img')} alt="" />
                <h5><Link to={'/detail/' + index}>{item.get('title')}</Link></h5>
                <p>{item.get('cont')}</p>
              </div>
            )
          })
        }
        <div className='loadMore' onClick={() => { loadMore(pageIndex) }}>加载更多</div>
      </div>
    )
  }
}
const mapState = (state) => ({
  article: state.getIn(['homeReducer', 'articlelist']),
  pageIndex: state.getIn(['homeReducer', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  loadMore(pageIndex) {
    pageIndex++;
    Actions.loadMore(dispatch, pageIndex);
  }
})

export default connect(mapState, mapDispatch)(Article)