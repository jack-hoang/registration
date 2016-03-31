import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { push } from 'react-router-redux'
import * as actions from '../actions/actions'

import RegistrationStatusInfo from '../components/RegistrationStatusInfo'

const mapStateToProps = (state) => {
  return {
    state: {
      statusMessage: state.statusMessage
    }
  }
}

const RegistrationStatus = connect(
  mapStateToProps
)(RegistrationStatusInfo)

export default RegistrationStatus
