import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import App from './components/App';

const onEnter = () => {
  console.log('top');
  window.scrollTo(0, 0);
};

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pippo">pippo</Link></li>
        </ul>
      </nav>
      <Route
        path="/"
        exact
        component={App}
        onEnter={onEnter}
      />
      <Route
        path="/pippo"
        exact
        component={App}
        onEnter={onEnter}
      />
    </div>
  </Router>
);

export default AppRouter;
