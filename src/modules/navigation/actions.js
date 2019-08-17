import { Types } from './actionTypes'

export const goToScreen = (screenId) => ({
    type: Types.goToScreen,
    payload: screenId
})