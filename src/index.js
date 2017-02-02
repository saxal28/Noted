import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/style.css';
import './styles/animate.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//react-router
// import { Router, browserHistory } from 'react-router'; // react-router
// import routes from "./routes";

ReactDOM.render(
  <MuiThemeProvider>
      <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
