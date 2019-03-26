import { fromJS } from 'immutable'
import { GET_HOME_LIST, ADD_ARTICLE_LIST,TOGGLE_TOP_SHOW} from './actionTypes'
import axios from 'axios'

const actions = {
  getHomelist: (dispatch) => {
    axios.get('/home.json').then((res) => {
      let data = res.data;
      let action = {
        type: GET_HOME_LIST,
        topiclist: fromJS(data.topiclist),
        articlelist: fromJS(data.articlelist),
        clublist: fromJS(data.clublist),
        authorlist: fromJS(data.authorlist)
      }
      dispatch(action)
    }).catch((e) => {
      console.log(e)
    })
  },
  loadMore: (dispatch, page) => {
    axios.get(`/article.json?page=${page}`).then((res) => {
      let data = res.data;
      let action = {
        type: ADD_ARTICLE_LIST,
        articlelist: fromJS(data),
        page
      }
      dispatch(action)
    }).catch((e) => {
      console.log(e)
    })
  },
  toggleTopShow: (flag) => ({
    type: TOGGLE_TOP_SHOW,
    flag
  })
}

export default actions