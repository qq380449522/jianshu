import { combineReducers } from 'redux-immutable'
import headReducer from '../common/header/store/reducer'
import homeReducer from '../pages/home/store/reducer'
import detailReducer from '../pages/detail/store/reducer'
import loginReducer from '../common/login/store/reducer'

export default combineReducers({ headReducer, homeReducer, detailReducer, loginReducer })
