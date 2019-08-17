import { Types } from './actionTypes'
import { combineReducers } from 'redux'
import screenIds from '../../constants/screenIds'


const screen = (state = screenIds.Main, action) => {
    switch (action.type) {
        case Types.goToScreen:
            const newScreen = action.payload
            console.log('triggered!')
            return newScreen
        default:
            return state
    }
}

const index = combineReducers({
    screen
  })
  
  export default index