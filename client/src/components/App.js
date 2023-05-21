import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from './header';
import Footer from './footer';
import ShowTODOList from './showTODO';
import CreateTODO from './createTODO';
import UpdateTODO from "./updateTODO";

const App = () => {
    const [TODO, setTODO] = useState([]);
    const [editModal, setEditModal] = useState(false);

    const loadTODO = (data) => {
        setTODO(data);
    }
    const handleAddTODO = (newTODO) => {
        setTODO([...TODO, newTODO]);
    };

    const handleEditButton = () => {
        setEditModal(!editModal);
    };

    return (
        <div>
            {editModal &&
                <div>
                    <div className="fixed inset-0 flex items-center justify-center bg-slate-500 opacity-70"></div>
                    <div className="relative">
                        <UpdateTODO handleEditButton={handleEditButton} />
                    </div>
                </div>

            }
            <div className="flex flex-col h-screen">
                <Header />
                <CreateTODO onCreateTODO={handleAddTODO} />
                <div className="flex-grow overflow-y-auto my-2">
                    <ShowTODOList loadTODO={loadTODO} TODO={TODO} handleEditButton={handleEditButton} />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
