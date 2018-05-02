import { combineReducers } from 'redux'
// import ui from './components/uiReducer'
import options from './optionsReducer.js'
import ui from './uiReducer.js'

// state: contactReducer,
export default combineReducers({
  options,
  ui
})
