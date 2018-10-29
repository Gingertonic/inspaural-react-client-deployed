import { combineReducers } from 'redux'
import audioReducer from './audio_reducer'
import inspauralReducer from './inspaural_reducer'
import sessionReducer from './session_reducer'


export default combineReducers({
  audio: audioReducer,
  currentInspaural: inspauralReducer,
  session: sessionReducer
})
