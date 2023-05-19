import { useState, useEffect } from "react";
import axios from "axios";

const CreateTODO = ({onCreateTODO}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        const requestData = { title, description };

        axios
            .post("http://localhost:8080/api/todo", requestData)
            .then((res) => {
                // console.log("from creation",res.data);
                onCreateTODO(res.data.data);
            })
            .catch((err) => {
                console.log("Error in creating todo: ", err);
            });

        e.target.reset();
    };

    return (
        <div className="w-full my-5 flex flex-col items-center">
            <form className="w-full" onSubmit={handleSubmit}>
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
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded transition-colors duration-300"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTODO;
