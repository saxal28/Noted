import { GET_NOTES } from "../actions/constants";

export default function(state = null, action) {
  switch(action.type) {
    case GET_NOTES:
      return action.notes;
    default:
      return state;
  }
}
