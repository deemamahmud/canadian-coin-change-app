import React, { Component } from "react";
import Change from "./components/Change";



class App extends Component {
  render() {
    return (
      <div className={"ui container"}>
        <div className={"ui center aligned container"}>
          <Change />
        </div>
      </div>
    );
  }
}

export default App;
