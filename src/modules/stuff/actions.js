import { Types }from './actionTypes'

export const receiveStuff = (json) => ({
  type: Types.RECEIVE_STUFF,
  payload: json.stuff
})

export const fetchStuff = () => ({
  type: Types.FETCH_STUFF,
  payload: 'fetch stuff'
})