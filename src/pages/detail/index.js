import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Actions from './store/actionCreator'
import './style.css'

class Detail extends PureComponent {
  render() {
    const { detailCont } = this.props;
    return (
      <div className="detail">
        <h1>{detailCont.get('title')}</h1>
        <p>{detailCont.get('cont')}</p>
      </div>
    )
  }
  componentDidMount() {
    this.props.getDetailCont(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  detailCont: state.getIn(['detailReducer', 'detailCont'])
})
const mapDispatch = (dispatch) => ({
  getDetailCont(id) {
    Actions.getDetailCont(dispatch, id)
  }
})

export default connect(mapState, mapDispatch)(Detail)