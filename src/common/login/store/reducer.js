import { fromJS } from "immutable";
const defaultState = fromJS({
  loginStatus: false,
  loginPage: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'login':
      return state.set('loginStatus', true)
    case 'loginPage':
      return state.set('loginPage', action.value)
    case 'logout':
      return state.set('loginStatus', false)
    default:
      return state
  }
}