import { GET_NOTES } from "./constants.js";
import axios from "axios";

var notes="[1234]"

export function getNotes() {
  return {
    type: GET_NOTES,
    notes
  }
}

// function getNotes() {
//   var notes = {
//       type: GET_NOTES,
//       notes: null
//
//   }
//   axios.get("http://pacific-everglades-32525.herokuapp.com/notes").then(results => {
//     notes.result = notes;
//   })
//   return notes;
// }
//
//
//
// export function getNotes (notes) {
//   return dispatch => {
//     dispatch(getNotes());
//   }
// }
