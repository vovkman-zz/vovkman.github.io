import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar";
import { About } from "./pages/about";
import { Work } from "./pages/work";
import { Contact } from "./pages/contact";
import { MobileNavbar } from "./components/mobile-navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <MobileNavbar />
          <Route path="/" exact render={About} />
          <Route path="/work/" render={Work} />
          <Route path="/contact/" render={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
