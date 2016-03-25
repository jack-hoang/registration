import * as actions from './actions'
import * as types from './ActionTypes'

describe('actions', () => {

  it('should create an action to update form values', () => {
    const formData = {
      userName: 'John Doe',
      email: 'john.doe@example.com'
    }

    const expectedAction = {
      type: types.FORM_UPDATE,
      payload: formData
    }

    expect(actions.formUpdate(formData)).toEqual(expectedAction)
  })

})
