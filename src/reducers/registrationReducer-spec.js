import registrationReducer from './registrationReducer'
import * as actions from '../actions/actions'
import * as types from '../actions/ActionTypes'

describe('When registration reducer receives actions', () => {

  it('should return the initial state if no action is received', () => {
    expect(registrationReducer(undefined, {})).toEqual({})
  })

  it('should return registration info when action type is '+types.FORM_UPDATE, () => {
    const formData = {
      userName: 'John Doe',
      email: 'john.doe@example.com'
    }

    expect(
      registrationReducer(
        {},
        actions.formUpdate(formData))
      ).toEqual(
        formData
      )
  })

  it('should return registration status when action type is '+types.REGISTER, () => {
    const formData = {
      userName: 'John Doe',
      email: 'john.doe@example.com'
    }

    expect(
      registrationReducer(
        {},
        actions.register(formData))
      ).registrationStatus.toEqual(
        "Thank you " + formData.userName
            + "! You have successfully registered."
      )

  })

})
