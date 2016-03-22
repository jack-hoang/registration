import React  from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import configureStore from './redux/configureStore'
import RegistrationForm from './components/RegistrationForm'

let store = configureStore()

ReactDOM.render(
  <Provider store={store}><RegistrationForm/></Provider>, document.querySelector('#app')
)
