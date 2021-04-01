import React from "react";

import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyles";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      <Home />
    </div>
  );
}

export default App;
