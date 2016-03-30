import * as types from '../actions/ActionTypes'

const initialState = {}

export default function registrationReducer(state = {}, action) {
  const data = action.payload
  switch (action.type) {
    case types.FORM_UPDATE:
      return Object.assign({}, state, {
        userName: data.userName,
        email: data.email
      })
    case types.REGISTER:
      return Object.assign({}, state,
        data, {registrationStatus: "Thank you " + data.userName
            + "! You have successfully registered."})
    default:
      return state;
  }

}
