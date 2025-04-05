import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./components/Home.jsx";
import Apps from "./components/Apps";
import Funds from "./components/Funds";
import Holdings from "./components/Holdings";

import Orders from "./components/Orders";
import Positions from "./components/Positions";
import Summary from "./components/Summary";
import WatchList from "./components/WatchList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/*",
      element: 
        <>
          <TopBar />
          <div className="dashboard-container">
            <WatchList />
            <div className="content">
              <Home />
            </div>
          </div> 
        </>
    },
    {
      path: "/",
      element:
        <>
          <TopBar />
          <div className="dashboard-container">
            <WatchList />
            <div className="content">
              <Summary />
            </div>
          </div>
        </>
      
    },
    {
      path: "/orders",
      element: 
        <>
          <TopBar />
          <div className="dashboard-container">
            <WatchList />
            <div className="content">
              <Orders />
            </div>
          </div>
        </>
      
    },
    {
      path: "/holdings",
      element:
        <>
          <TopBar />
          <div className="dashboard-container">
            <WatchList />
            <div className="content">
              <Holdings />
            </div>
          </div>
        </>
      
    },
    {
      path: "/positions",
      element:
        <>
          <TopBar />
          <div className="dashboard-container">
            <WatchList />
            <div className="content">
              <Positions />
            </div>
          </div>
        </>
      
    },
    {
      path: "/funds",
      element: 
        <>
          <TopBar />
          <div className="dashboard-container">
            <WatchList />
            <div className="content">
              <Funds />
            </div>
          </div>
        </>
      
    },
    {
      path: "/apps",
      element: 
        <>
          <TopBar />
          <div className="dashboard-container">
            <WatchList />
            <div className="content">
              <Apps />
            </div>
          </div>
        </>
      
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
