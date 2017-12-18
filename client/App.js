import React from "react";
import "whatwg-fetch";
import createBrowserHistory from 'history/createBrowserHistory';
import Helmet from "react-helmet";
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
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400" rel="stylesheet" />
        </Helmet>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/create-brew' component={CreateBrew} />
      </div>
    </Router>
  )
};

export default App;
