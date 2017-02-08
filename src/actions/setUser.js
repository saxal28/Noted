import { SET_USER } from "./constants";
export default function(user) {
  return {
    type: SET_USER,
    user
  }
}
