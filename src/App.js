import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/styles/fonts.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Forum from "./components/Forum/Forum";
import Questions from "./components/Forum/Questions/Questions";
import Question from "./components/OpeningQuestions/Question";
import CreateTheme from "./components/CreateTheme/CreateTheme";

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
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/openingQuestion">
          <Question />
        </Route>
        <Route path="/createTheme">
          <CreateTheme />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
