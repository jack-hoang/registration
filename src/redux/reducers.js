import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import registrationReducer from '../reducers/registrationReducer'

export default combineReducers({
  form: formReducer,
  registration: registrationReducer
})
