import { fromJS } from 'immutable'
import { SEARCH_FOCUS, SEARCH_BLUR, INIT_HOT_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE_INDEX } from './actionTypes'
const defaultState = fromJS({
  focused: false,
  hover: false,
  hotlist: [],
  currentPage: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return state.set('focused', true)
    case SEARCH_BLUR:
      return state.set('focused', false)
    case INIT_HOT_LIST:
      return state.merge({
        'hotlist': action.data,
        'totalPage': action.size,
      })
    case MOUSE_ENTER:
      return state.set('hover', true)
    case MOUSE_LEAVE:
      return state.set('hover', false)
    case CHANGE_PAGE_INDEX:
      return state.set('currentPage', action.page)
    default:
      return state
  }
}