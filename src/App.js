import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TestView from './components/TestViews';
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        {/* <div>learn react</div> */}
        <Route path="/" component={TestView} />
      </Switch>
    </Router>
  );
}

export default App;
