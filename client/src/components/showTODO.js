import { useState, useEffect } from "react";
import axios from "axios";

const TODOCard = ({ data }) => {
  const { _id, title, description } = data;

  return (
    <li
      key={_id}
      className="flex m-2 shadow-md bg-yellow-50 p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:shadow-lg hover:scale-105"
    >
      <div>
        <h3 className="text-lg py-2">{title}</h3>
        {/* <p className="text-sm mt-2">{description}</p> */}
      </div>
      <div className="flex items-end ml-auto">
        <button className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded mr-2 transition-colors duration-300">
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors duration-300">
          Delete
        </button>
      </div>
    </li>
  );
};

const ShowTODOList = () => {
  const [loading, setLoading] = useState(true);
  const [TODO, setTODO] = useState([]);

  useEffect(() => {
    setTODO([]);
    axios
      .get("http://localhost:8080/api/todo/")
      .then((res) => {
        setTODO(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (TODO.length === 0) {
    return <p>No TODO items found.</p>;
  }

  return (
    <section className="my-4">
        <ul className="list-container">
          {TODO.map((data) => (
            <TODOCard data={data} key={data._id} />
          ))}
        </ul>
    </section>
  );
};

export default ShowTODOList;
