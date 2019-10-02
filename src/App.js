import React, { Component, Fragment } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container text-center">
          <h5 className="pageHead"> Select a News Source from the List</h5>
          <Search default="bbc-news" />
        </div>
      </Fragment>
    );
  }
}

export default App;
