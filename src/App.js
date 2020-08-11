import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

const QuestionsPage = React.lazy(() =>
  import("./features/ListQuestions/QuestionsPage")
);
const VotingPage = React.lazy(() => import("./features/Vote/VotingPage"));
const AddQuestionPage = React.lazy(() =>
  import("./features/AddNewQuestion/AddQuestionPage")
);

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" render={() => <QuestionsPage />} />
          <Route exact path="/vote/" component={VotingPage} />
          <Route exact path="/add-new/" component={AddQuestionPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
