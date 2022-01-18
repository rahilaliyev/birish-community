import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/styles/fonts.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Forum from "./components/Forum/Forum";
import Questions from "./components/Forum/Questions/Questions";
import QuestionDetails from "./components/QuestionsDetails/QuestionDetails";
import CreateTheme from "./components/CreateTheme/CreateTheme";
import "./assets/styles/responsive.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/forum" exact>
          <Forum />
        </Route>
        <Route path="/forum/:categoryId">
          <Questions />
        </Route>
        <Route path="/questionId">
          <QuestionDetails />
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
