import loggedReducer from './loggedReducer'
import dataReducer from './dataReducer'
import {combineReducers} from 'redux'

const allReducer = combineReducers({
  isLoggedIn: loggedReducer,
})

export default allReducer