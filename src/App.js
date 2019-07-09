import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainNav from "./components/mainNav";
import HomePage from "./components/homePage";
import AboutPage from "./components/aboutPage";
import ContactPage from "./components/contactPage";
import TopicsPage from "./components/topicsPage";

import "./App.css";

const routesArray = [
  { linkRoute: "/", linkName: "Homepage" },
  { linkRoute: "/about", linkName: "About Page" },
  { linkRoute: "/contact", linkName: "Contact Page" },
  { linkRoute: "/topics", linkName: "Topics Page" }
];

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav routes={routesArray} />
        <Route
          path="/"
          exact
          render={routeProps => <HomePage name="Ben" {...routeProps} />}
        />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/topics" component={TopicsPage} />
      </div>
    </Router>
  );
}

export default App;
