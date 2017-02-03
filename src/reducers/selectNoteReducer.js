import { SELECT_NOTE } from "../actions/selectNote";

export default function(state = 0, action) {
  switch(action.type) {
    case SELECT_NOTE:
      return  action.note
    default:
      return state
  }
}
