import React from "react";
import "../src/App.css";
import Header from "./Header/Header";
import Contributions from "./Body/Contribute/Contributions";
import Stake from "./Body/Stake/Stake";
import Project from "./Body/Project/Project";
import Team from "./Body/Team/Team";
import ScrollButton from "./Components/ScrollTopButton";

function App() {
  return (
    <React.Fragment>
      <div className = "root">
        <Header />
        <Contributions />
        <Stake />
        <Project />
        <Team />
        <ScrollButton/>
      </div>
    </React.Fragment>
  );
}

export default App;
