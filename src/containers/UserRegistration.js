import {connect} from 'react-redux'
import * as actions from '../actions/actions'
import RegistrationForm from '../components/RegistrationForm'

const mapStateToProps = (state) => {
  return {
    userName: state.registration.userName,
    email: state.registration.email
  }
}

const mapDispatchToProps = actions

const UserRegistration = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)

export default UserRegistration
