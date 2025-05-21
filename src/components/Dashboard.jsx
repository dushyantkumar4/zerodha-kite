import React from "react";
import WatchList from "./WatchList.jsx";
import TopBar from "./TopBar";
import {GeneralContextProvider} from "./GeneralContext.jsx"
const Dashboard = () => {
  return(
    <>
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
    </>
  ) ;
};

export default Dashboard;
