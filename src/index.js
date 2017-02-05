import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import './styles/animate.css';
import "./plugins/main.js";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//react redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers/index";
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


//react-router
import { Router, browserHistory } from 'react-router'; // react-router
import routes from "./routes";

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <MuiThemeProvider>
        <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
