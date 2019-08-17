import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './modules/root';
import { createEpicMiddleware } from 'redux-observable';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { firebaseConfig } from './firebase/dev'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  enableLogging: true
}

// Initialize firebase
firebase.initializeApp(firebaseConfig)

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore)

export const store = createStoreWithFirebase(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//const epicMiddleware = createEpicMiddleware();

export function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //applyMiddleware(epicMiddleware)
  )
  //epicMiddleware.run(rootEpic)
}