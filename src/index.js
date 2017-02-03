import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/style.css';
import './styles/animate.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//react redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers/index";
const createStoreWithMiddleware = applyMiddleware()(createStore);



//react-router
// import { Router, browserHistory } from 'react-router'; // react-router
// import routes from "./routes";

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
