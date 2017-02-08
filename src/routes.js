import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from "./components/App";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import AddNote from "./components/AddNoteContainer/AddNote/AddNote";
import Register from "./components/Authentication/Register/Register";
import Login from "./components/Authentication/Login/Login";
import ViewAllNotesContainer from "./components/ViewAllNotesContainer/ViewAllNotesContainer";
import ViewANoteContainer from "./components/ViewANoteContainer/ViewANoteContainer";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={NoteContainer} />
    <Route path="/notes/add" component={AddNote} />
    <Route path="/notes/all" component={ViewAllNotesContainer} />
    <Route path="/notes/:id" component={ViewANoteContainer} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Route>
)
