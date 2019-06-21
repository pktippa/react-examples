import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

// First create a store with combined reducers
// rootReducer is combinedReduers return redux node_module
const store = createStore(rootReducer)

// Pass store as props to Provider
// Bundle App inside it.
// This will call render in react-dom.development.js 
// And registers the listeners which are responsible for listening to onStateChange event
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
