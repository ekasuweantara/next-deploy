import Button from "@/components/Button";
import { useState } from "react";
import * as Sentry from "@sentry/nextjs";
import axios from "axios";

const Form = () => {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/postss", {
        title: title,
        body: todo,
        userId: 1,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        Sentry.captureException(error)
      });
  };

  return (
    <div
      style={{
        justifyConte: "center",
        display: "flex",
        marginTop: "30vh",
      }}
    >
      <div
        style={{
          display: "block",
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "30px 20px",
          boxShadow:
            "0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
          margin: "0 auto",
        }}
      >
        <h3>Sample Form for Test API Error</h3>
        <hr style={{ margin: "10px 0px" }} />
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "25px", display: "grid" }}>
            <label htmlFor="title">Title</label>
            <input
              placeholder="Title"
              name="title"
              id="title"
              style={{
                width: "350px",
                borderRadius: "10px",
                border: "1px solid gray",
                padding: "10px",
                marginTop: "5px",
              }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "25px", display: "grid" }}>
            <label htmlFor="todo">Todo</label>
            <input
              placeholder="Todo"
              name="todo"
              id="todo"
              style={{
                width: "350px",
                borderRadius: "10px",
                border: "1px solid gray",
                padding: "10px",
                marginTop: "5px",
              }}
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
