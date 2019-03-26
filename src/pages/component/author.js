import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Author extends PureComponent {
  render() {
    const { authorlist } = this.props;
    return (
      <div className='author'>
        <h5>推荐作者</h5>
        {
          authorlist.map((item) => {
            return (
              <div className="author-item" key={item.get('id')}>
                <img src={item.get('avatar_source')} alt="" />
                <div className="cont">
                  <h5>{item.get('nickname')}</h5>
                  <p>写了{item.get('total_wordage')}字 · {item.get('total_likes_count')}喜欢</p>
                </div>
                <div className='attent'><span>+</span>关注</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapState = (state) => ({
  authorlist: state.getIn(['homeReducer', 'authorlist'])
})

export default connect(mapState)(Author)