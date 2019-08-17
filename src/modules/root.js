import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { firebaseReducer } from 'react-redux-firebase'

import stuff, { epic as stuffEpic } from './stuff'
import navigation from './navigation'

export const rootReducer = combineReducers({
  stuff,
  navigation,
  firebase: firebaseReducer
})

export const rootEpic = combineEpics({
  stuffEpic
})