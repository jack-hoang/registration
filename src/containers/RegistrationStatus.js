import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { push } from 'react-router-redux'
import * as actions from '../actions/actions'

import RegistrationStatusInfo from '../components/RegistrationStatusInfo'

const mapStateToProps = (state) => {
  return {
    state: {
      registrationStatus: state.registration.registrationStatus
    }
  }
}

const RegistrationStatus = connect(
  mapStateToProps
)(RegistrationStatusInfo)

export default RegistrationStatus
