import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthenticationRoute from './views/AuthenticationRoute.js';
import LoginPage from './views/LoginPage';
import StartPage from './views/StartPage';

import RenderDashboard from './views/RenderDashboard';
import { loadUser } from './actions/auth';
import store from './store';

var hist = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      store.dispatch(loadUser());
      // store.dispatch(battallion_two_overrall_data());
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={hist}>
          <Fragment>
            <Switch>
              <AuthenticationRoute path="/dashboard" component={RenderDashboard} />
              <Route path="/login" component={LoginPage} />
              {/* <Route path="/dashboard" component={DashboardRoot} />*/}
              <Route exact path="/" component={StartPage} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
