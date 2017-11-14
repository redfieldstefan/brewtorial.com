import React from "react";
import "whatwg-fetch";
import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import {
  CreateBrew,
  HomePage
} from "./pages/index";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/create-brew' component={CreateBrew} />
      </div>
    </Router>
  )
};

export default App;
