import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./static/Header";
import NavBar from "./static/NavBar";
import Footer from "./static/Footer";
import ShopSelected from "./shop/ShopSelected";
import GallerySelected from "./gallery/GallerySelected";
import About from "./static/About";
import Demonstrations from "./static/Demonstrations";
import Courses from "./static/Courses";
import Contact from "./static/Contact";
import Links from "./static/links";
import Loading from './static/LoadingBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false
    };
  }
  render() {
    return (
      <Fragment>
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
      {/* {this.state.Loading && <LoadingBar/>} */}
      </Fragment>
    );
  }
}

export default App;
