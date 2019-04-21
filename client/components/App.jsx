import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ShopSelected from "./ShopSelected";
import GallerySelected from "./GallerySelected";
import About from "./About";
import Demonstrations from "./Demonstrations";
import Courses from "./Courses";
import Contact from "./Contact";
import Links from "./links";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false
    };
  }
  render() {
    return (
      <Router>
        <Route path="/" component={Header} />
        <Route path="/" component={NavBar} />

        <div className="content">
          <Route exact path="/" component={ShopSelected} />
          <Route exact path="/" component={GallerySelected} />
          <Route exact path="/" component={About} />
          <Route exact path="/Demonstrations" component={Demonstrations} />
          <Route exact path="/Courses" component={Courses} />
          <Route exact path="/Links" component={Links} />
          <Route exact path="/Contact" component={Contact} />

          <Route exact path="/Gallery" component={Contact} />
          <Route exact path="/Gallery/:Category" component={Contact} />
          <Route
            exact
            path="/Gallery/:Category/:SubCategory"
            component={Contact}
          />
          <Route
            exact
            path="/Gallery/:Category/:SubCategory/id"
            component={Contact}
          />
          <Route exact path="/Shop" component={Contact} />
          <Route exact path="/Shop/:Category" component={Contact} />
          <Route exact path="/Shop/:Category/:id" component={Contact} />
        </div>
        <Route path="/" component={Footer} />
      </Router>
    );
  }
}

export default App;
