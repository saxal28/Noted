import axios from "axios";

export default function getAllNotes() {
  var result = axios.get("http://pacific-everglades-32525.herokuapp.com/notes");
  return result;
}
