import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from './header';
import Footer from "./footer";
import ShowTODOList from "./showTODO";
import CreateTODO from "./createTODO";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <CreateTODO/>
      <div className="flex-grow overflow-y-auto">
        <ShowTODOList />
      </div>
      <Footer />
    </div>
  );
};

export default App;
