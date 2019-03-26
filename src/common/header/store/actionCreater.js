import { fromJS } from 'immutable'
import { SEARCH_FOCUS, SEARCH_BLUR, INIT_HOT_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE_INDEX } from './actionTypes'
import axios from 'axios'

const actions = {
  search_focus: () => ({
    type: SEARCH_FOCUS
  }),
  search_blur: () => ({
    type: SEARCH_BLUR
  }),
  get_search_list: (dispatch) => {
    axios.get('hotlist.json').then((res) => {
      let data = res.data;
      let action = {
        type: INIT_HOT_LIST,
        data: fromJS(data),
        size: Math.ceil(data.length/ 10)
      }
      dispatch(action)
    }).catch((err) => {
      console.log(err)
    })
  },
  mouse_enter: () => ({
    type: MOUSE_ENTER
  }),
  mouse_leave: () => ({
    type: MOUSE_LEAVE
  }),
  change_page_index: (page) => ({
      type: CHANGE_PAGE_INDEX,
      page
  })
}

export default actions