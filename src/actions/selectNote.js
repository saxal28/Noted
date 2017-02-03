export const SELECT_NOTE = "SELECT_NOTE";
export default function(note) {
  return {
    type: SELECT_NOTE,
    note
  }
}
