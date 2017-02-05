import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from "./components/App";
import NoteContainer from "./components/NoteContainer";
import AddNote from "./components/AddNote/AddNote";
import ViewAllNotes from "./components/ViewAllNotes/ViewAllNotes";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={NoteContainer} />
    <Route path="/add" component={AddNote} />
    <Route path="/all" component={ViewAllNotes} />
  </Route>
)
