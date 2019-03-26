import { fromJS } from 'immutable'
import { GET_HOME_LIST, ADD_ARTICLE_LIST } from './actionTypes'
const defaultState = fromJS({
  topiclist: [],
  articlelist: [],
  clublist: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_HOME_LIST:
      return state.merge({
        topiclist: fromJS(action.topiclist),
        articlelist: fromJS(action.articlelist),
        clublist: fromJS(action.clublist)
      })
    case ADD_ARTICLE_LIST: 
      return state.set('articlelist', state.get('articlelist').concat(action.articlelist))
    default:
      return state
  }
}