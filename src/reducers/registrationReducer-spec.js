import registrationReducer from './registrationReducer'
import * as actions from '../actions/actions'
import * as types from '../actions/ActionTypes'

describe('registration reducer', () => {

  it('should return the initial state', () => {
    expect(registrationReducer(undefined, {})).toEqual({})
  })

  it('should handle '+types.FORM_UPDATE, () => {
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

})
