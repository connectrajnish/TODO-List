import React, { useState } from "react";
import Header from './header';
import Footer from './footer';
import ShowTODOList from './showTODO';
import CreateTODO from './createTODO';
import UpdateTODO from "./updateTODO";

const App = () => {
    const [TODO, setTODO] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [updateId, setUpdateId] = useState(null);

    const loadTODO = (data) => {
        setTODO(data);
    }
    const handleAddTODO = (newTODO) => {
        setTODO([...TODO, newTODO]);
    };
    const handleUpdateTODO = (updateId, updatedTODO) => {
        const updatedArray = TODO.map((data) => {
            if (data._id === updateId) {
                data.title = updatedTODO.title;
                data.description = updatedTODO.description;
            }
            return data;
        })
        setTODO(updatedArray);
        console.log(updatedArray);
    };

    const handleEditButton = () => {
        setEditModal(!editModal);
    };

    const handleEditTODO = (_id) => {
        setUpdateId(_id);
    };

    return (
        <div>
            {editModal &&
                <div>
                    <div className="fixed inset-0 flex items-center justify-center bg-slate-500 opacity-70"></div>
                    <div className="relative">
                        <UpdateTODO handleEditButton={handleEditButton} updateId={updateId} onCreateTODO={handleUpdateTODO} />
                    </div>
                </div>

            }
            <div className="flex flex-col h-screen">
                <Header />
                <CreateTODO onCreateTODO={handleAddTODO} />
                <div className="flex-grow overflow-y-auto my-2">
                    <ShowTODOList loadTODO={loadTODO} TODO={TODO} handleEditButton={handleEditButton} handleEditTODO={handleEditTODO} />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
