const updateTODO = ({ handleEditButton }) => {
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
                <p>content goes here</p>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">

                    <button
                        className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded mr-2 transition-colors duration-300"
                        type="button"
                        onClick={() => handleEditButton()}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
};

export default updateTODO;