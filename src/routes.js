import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from "./components/App";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import AddNote from "./components/AddNoteContainer/AddNote/AddNote";
import ViewAllNotesContainer from "./components/ViewAllNotesContainer/ViewAllNotesContainer";
import ViewANoteContainer from "./components/ViewANoteContainer/ViewANoteContainer";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={NoteContainer} />
    <Route path="/notes/add" component={AddNote} />
    <Route path="/notes/all" component={ViewAllNotesContainer} />
    <Route path="/notes/:id" component={ViewANoteContainer} />
  </Route>
)
