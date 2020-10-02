import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import AppHeader from "./components/AppHeader";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Form from "./pages/Form";

function App() {
  return (
    <>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
