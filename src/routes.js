import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from "./components/App";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import AddNote from "./components/AddNoteContainer/AddNote/AddNote";
import ViewAllNotesContainer from "./components/ViewAllNotesContainer/ViewAllNotesContainer";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={NoteContainer} />
    <Route path="/add" component={AddNote} />
    <Route path="/all" component={ViewAllNotesContainer} />
  </Route>
)
