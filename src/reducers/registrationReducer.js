import * as types from '../actions/ActionTypes'

const initialState = {}

export default function registrationReducer(state = {}, action) {
  switch (action.type) {
    case types.FORM_UPDATE:
      const data = action.payload
      return Object.assign({}, state, {
        userName: data.userName,
        email: data.email
      })
      break;
    default:
      return state;
  }

}
