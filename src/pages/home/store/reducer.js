import { fromJS } from 'immutable'
import { GET_HOME_LIST, ADD_ARTICLE_LIST, TOGGLE_TOP_SHOW } from './actionTypes'
const defaultState = fromJS({
  topiclist: [],
  articlelist: [],
  clublist: [],
  authorlist: [],
  articlePage: 1,
  topShow: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_HOME_LIST:
      return state.merge({
        topiclist: fromJS(action.topiclist),
        articlelist: fromJS(action.articlelist),
        clublist: fromJS(action.clublist),
        authorlist: fromJS(action.authorlist)
      })
    case ADD_ARTICLE_LIST:
      return state.merge({
        'articlelist': state.get('articlelist').concat(action.articlelist),
        'articlePage': action.page
      })
    case TOGGLE_TOP_SHOW:
      return state.set('topShow', action.flag)
    default:
      return state
  }
}