import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import '../home/style.css'

class Topic extends PureComponent {
  render() {
    const { topiclist } = this.props
    return (
      <div className="topic">
        {
          topiclist.map((item) => {
            return (
              <div className="class-item" key={item.get('id')}>
                <img src={item.get('img')} alt=""/>
                {item.get('text')}
              </div>
            )
          })
        }
      </div>
    )
  }
}
const mapState = (state) => ({
  topiclist: state.getIn(['homeReducer', 'topiclist'])
})

export default connect(mapState)(Topic)