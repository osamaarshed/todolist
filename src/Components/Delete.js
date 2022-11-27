import React from "react";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";

function Delete() {
//   const [todoid, setTodoid] = useState(null);
  const deleteData = () => {
    let response = axios.delete(
      "https://bootcamp.todo.arhamsoft.org/client/todo/delete/TODO_ID"
    );
    // setTodoid(response.data.todos);
  };
  return (
    <div>
      <button onClick={() => deleteData()}>Delete</button>
    </div>
  );
}

export default Delete;
