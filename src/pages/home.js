import React from "react";
import TopBar from "../components/topbar/topBar";
import XpenseList from "../components/xpenselist/xpenseList";

const Home = () => {
  return (
    <React.Fragment>
      <TopBar />
      <XpenseList />
    </React.Fragment>
  );
};

export default Home;