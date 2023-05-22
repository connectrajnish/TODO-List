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
    const [updateData, setUpdateData] = useState({});

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
    };

    const handleEditButton = () => {
        setEditModal(!editModal);
    };

    const handleEditTODO = (id, data) => {
        setUpdateId(id);
        setUpdateData(data);
    };

    const handleDeleteTODO = (id) => {
        const updatedTODO = TODO.filter((todo) => todo._id !== id);
        setTODO(updatedTODO);
        console.log(updatedTODO)
    };


    return (
        <div>
            {editModal &&
                <div>
                    <div className="fixed inset-0 flex items-center justify-center bg-slate-500 opacity-70"></div>
                    <div className="relative transition-all ease-in duration-300">
                        <UpdateTODO handleEditButton={handleEditButton} updateId={updateId} onCreateTODO={handleUpdateTODO} updateData={updateData} />
                    </div>
                </div>

            }
            <div className="flex flex-col h-screen">
                <Header />
                <CreateTODO onCreateTODO={handleAddTODO} />
                <div className="flex-grow overflow-y-auto my-2">
                    <ShowTODOList loadTODO={loadTODO} TODO={TODO} handleEditButton={handleEditButton} handleEditTODO={handleEditTODO} handleDeleteTODO={handleDeleteTODO} />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
