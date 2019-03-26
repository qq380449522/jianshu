import { combineReducers } from 'redux-immutable'
import headReducer from '../common/header/store/reducer'
import homeReducer from '../pages/home/store/reducer'

export default combineReducers({ headReducer, homeReducer })
