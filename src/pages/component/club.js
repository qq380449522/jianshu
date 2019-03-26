import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../home/style.css'

class Club extends Component {
  render() {
    const { clublist } = this.props;
    return (
      <div className="club">
        {
          clublist.map(item => {
            let src = item.get('img')
            src = require('../../static/club/' + src);
            return (
              <a href="/" className="right" style={{ backgroundImage: 'url(' + src + ')' }} key={item.get('id')}> </a>
            )
          })
        }
      </div>
    )
  }
}
const mapState = (state) => ({
  clublist: state.getIn(['homeReducer', 'clublist'])
})

export default connect(mapState)(Club)