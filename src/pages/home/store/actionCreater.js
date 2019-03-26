import { fromJS } from 'immutable'
import { GET_HOME_LIST, ADD_ARTICLE_LIST} from './actionTypes'
import axios from 'axios'

const actions = {
  getHomelist: (dispatch) => {
    axios.get('/home.json').then((res) => {
      let data = res.data;
      let action = {
        type: GET_HOME_LIST,
        topiclist: fromJS(data.topiclist),
        articlelist: fromJS(data.articlelist),
        clublist: fromJS(data.clublist)
      }
      dispatch(action)
    }).catch((e) => {
      console.log(e)
    })
  },
  loadMore: (dispatch) => {
    axios.get('/article.json').then((res) => {
      let data = res.data;
      let action = {
        type: ADD_ARTICLE_LIST,
        articlelist: fromJS(data),
      }
      dispatch(action)
    }).catch((e) => {
      console.log(e)
    })
  }
}

export default actions