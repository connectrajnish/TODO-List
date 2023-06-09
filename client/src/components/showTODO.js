import { useState, useEffect } from "react";
import axios from "axios";

const handleDelete = (id, handleDeleteTODO) => {
  axios
    .delete(`http://localhost:8080/api/todo/${id}`)
    .then((res) => {
      handleDeleteTODO(id);
    })
    .catch((err) => {
      console.log(err);
    });
};


const TODOCard = ({ data, handleEditButton, handleEditTODO, handleDeleteTODO }) => {
  const { _id, title, description } = data;

  return (
    <li
      key={_id}
      className="flex m-2 shadow-md bg-yellow-50 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:shadow-lg hover:scale-105"
    >
      <div>
        <h3 className="text-lg py-2">{title}</h3>
        {/* make accrodian */}
        {/* <p className="text-sm mt-2">{description}</p> */}
      </div>
      <div className="flex items-end ml-auto ml-min-2">
        <button
          className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded mr-2 transition-colors duration-300"
          onClick={() => {
            handleEditButton();
            handleEditTODO(_id, data)
          }}
        >
          View
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300"
          onClick={() => handleDelete(_id, handleDeleteTODO)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

const ShowTODOList = ({ loadTODO, TODO, handleEditButton, handleEditTODO, handleDeleteTODO }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTODO([]);
    axios
      .get("http://localhost:8080/api/todo/")
      .then((res) => {
        loadTODO(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }


  if (TODO.length === 0) {
    return <div>
      <p className="text-center text-gray-500 mt-4">Every accomplishment starts with the decision to try.</p>;
      <p className="text-center text-gray-500">Add some task TODO</p>;
    </div>
  }


  return (
    <section className="my-4 shadow-md">
      <ul className="bg-white rounded-lg shadow-sm">
        {TODO.map((data) => (
          <TODOCard data={data} key={data._id} handleEditButton={handleEditButton} handleEditTODO={handleEditTODO} handleDeleteTODO={handleDeleteTODO} />
        ))}
      </ul>
    </section>

  );
};

export default ShowTODOList;
