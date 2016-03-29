import {combineReducers} from 'redux'
import registrationReducer from './registrationReducer'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  registration: registrationReducer,
  routing: routerReducer
})
