import React from "react";
import { Route } from "react-router-dom";
import NewsPage from "./component/NewsPage";

import "./App.css";

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
