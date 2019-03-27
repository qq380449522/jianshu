import { fromJS } from 'immutable'
import { GET_DETAIL_CONT } from './actionTypes'
const defaultState = fromJS({
  detailCont: { title: '', cont: '' }
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_DETAIL_CONT:
      return state.set('detailCont', action.data)
    default:
      return state
  }
}

