import React from "react";
import { useState, useEffect } from "react";
import "./LandingPage.css";
import axios from "axios";
import Home from "./Home";
import Delete from "./Delete";
import Edit from "./Edit";

function LandingPage() {
  const [formdata, setFormdata] = useState([]);

  useEffect(() => {
    fetchForm();
  }, []);
  const fetchForm = async () => {
    let response = await axios.get(
      "https://bootcamp.todo.arhamsoft.org/client/todo/list?userId=16722"
    );
    setFormdata(response.data.todos);
  };
  return (
    <div>
      <Home />
      {/* <button onClick={fetchForm}>Check</button> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Descrption</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formdata.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.userId}</td>
                <td>{element.title}</td>
                <td>{element.desc}</td>
                <td>
                  <Edit />
                  <Delete />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default LandingPage;
