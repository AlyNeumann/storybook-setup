import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TestView from './components/TestViews';
// import MuiButton from "./common/mui-button/MuiButton";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TestView} />
      </Switch>
    </Router>
  );
}

export default App;
