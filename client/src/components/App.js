import React, {useState} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from './header';
import Footer from './footer';
import ShowTODOList from './showTODO';
import CreateTODO from './createTODO';

const App = () => {
    const [TODO, setTODO] = useState([]);

    const loadTODO = (data) => {
        setTODO(data);
    }
    const handleAddTODO = (newTODO) => {
        setTODO([...TODO, newTODO]);
    };


    return (
        <div className="flex flex-col h-screen">
            <Header />
            <CreateTODO onCreateTODO={handleAddTODO} />
            <div className="flex-grow overflow-y-auto m-2">
                <ShowTODOList loadTODO={loadTODO} TODO={TODO}/>
            </div>
            <Footer />
        </div>
    );
};

export default App;
