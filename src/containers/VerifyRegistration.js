import {connect} from 'react-redux'
import * as actions from '../actions/actions'

import VerifyRegistrationInfo from '../components/VerifyRegistrationInfo'

const mapStateToProps = (state) => {
  return {
    state: {
      userName: state.registration.userName,
      email: state.registration.email
    }
  }
}

const mapDispatchToProps = actions

const VerifyRegistration = connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyRegistrationInfo)

export default VerifyRegistration
