import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/styles/fonts.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Forum from "./components/Forum/Forum";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/forum">
          <Forum />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
