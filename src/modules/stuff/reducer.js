import initialState from '../../initialState'
import { Types } from './actionTypes'
import { combineReducers } from 'redux'

const stuff = (state = initialState.stuffs, action) => {
  let newState
  switch(action.type) {
    case Types.FETCH_STUFF:
      console.log('fetching stuff')
      newState = [...state]
      newState.push('fetch')
      return newState
    case Types.RECEIVE_STUFF:
        console.log('fetching stuff')
        newState = [...state]
        newState.push('receive')
        return newState
    default:
      return state
  }
}

const index = combineReducers({
  stuff
})

export default index