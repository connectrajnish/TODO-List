import { useState } from 'react';
import axios from 'axios';

const updateTODO = ({ handleEditButton, updateId, onCreateTODO }) => {

    const handleUpdate = (e) => {
        const data = {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
        };
        axios
            .put(`http://localhost:8080/api/todo/${updateId}`, data)
            .then((res) => {
                onCreateTODO(updateId, data);
            })
            .catch((err) => {
                console.log("Failed to update");
                console.log(err.message);
            })
        e.target.reset();
    }


    return (
        <div>
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-end mr-4 mt-2">
                    <button
                        className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        onClick={() => handleEditButton()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div>
                    <form className="w-full" onSubmit={(e) => {
                        handleUpdate(e);
                        handleEditButton();
                    }}>
                        <div className="flex justify-between">
                            <input
                                type="text"
                                placeholder="Title..."
                                name="title"
                                className="w-full p-2 m-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-300"
                            />
                            <input
                                type="text"
                                placeholder="Description..."
                                name="description"
                                className="w-full p-2 m-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-300"
                            />
                        </div>
                        <div className="flex justify-center items-center p-6 rounded-b">

                            <button
                                className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded mr-2 transition-colors duration-300"
                                type="submit"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
};

export default updateTODO;