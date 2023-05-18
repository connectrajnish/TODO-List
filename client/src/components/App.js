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
            <div className="flex-grow">
            <CreateTODO/>
            <ShowTODOList />
                {/* <BrowserRouter>
                    <Route exact path="/" component={ShowTODOList}/>
                    <Route path="/create-todo" component={CreateTODO}/>
                </BrowserRouter> */}
            </div>
            <Footer />
        </div>
    );
};

export default App;
