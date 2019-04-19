import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ShopSelected from "./ShopSelected";
import GallerySelected from "./GallerySelected";
import About from "./About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Route path="/" component={Header} />
        <Route path="/" component={NavBar} />
        <Route path="/" component={Footer} />
        <div className="content">
          <Route exact path="/" component={ShopSelected} />
          <Route exact path="/" component={GallerySelected} />
          <Route exact path="/" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
