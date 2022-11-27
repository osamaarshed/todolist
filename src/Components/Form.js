import React from "react";
import { useState } from "react";
import "./Form.css";
import axios from "axios";
import Home from "./Home";

function Form() {
  const [info, setInfo] = useState({
    userId: "16722",
    title: "",
    desc: "",
  });
  const createTodo = async (e) => {
    e.preventDefault();
    await axios
      .post("https://bootcamp.todo.arhamsoft.org/client/todo/create", info)
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleOnChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <div className="form">
      <Home />
      <form onSubmit={(e) => createTodo(e)}>
        <label>
          User ID:
          <input
            type="number"
            name="userId"
            value={info.userId}
            onChange={(e) => handleOnChange(e)}
            required
            readOnly
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={info.title}
            onChange={(e) => handleOnChange(e)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="desc"
            value={info.desc}
            onChange={(e) => handleOnChange(e)}
            rows="1"
            cols="30"
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
