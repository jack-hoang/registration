import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { push } from 'react-router-redux'
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ push }, dispatch)
}

const VerifyRegistration = connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyRegistrationInfo)

export default VerifyRegistration
