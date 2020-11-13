import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Posts } from "./components/Posts";
import { Media } from "./components/Media";
import { Orders } from "./components/Orders";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/media">
          <Media />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
