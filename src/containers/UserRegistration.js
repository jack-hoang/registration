import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { formUpdate } from '../actions/actions'
import RegistrationForm from '../components/RegistrationForm'

const mapStateToProps = (state) => {
  return {
    userName: state.registration.userName,
    email: state.registration.email
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({formUpdate, push }, dispatch)
}

const UserRegistration = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)

export default UserRegistration
