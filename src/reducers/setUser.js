import { SET_USER } from "../actions/constants";

export default function(state = {username:null}, action) {
  switch(action.type) {
    case SET_USER:
      return {username: action.user}
    default:
      return state
  }
}
