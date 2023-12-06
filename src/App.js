import { Form } from "./Form";
import "./App.css";
import { useState } from "react";
import { TodoCard } from "./TodoCard";
import { TodoView } from "./TodoView";

function App() {
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState("");
  return (
    <div className="App">
      <div className="TodoBox">
        <h1 className="TodoTitle">Todo</h1>
        <button className="AddTodoButton" onClick={() => setTitle("")}>
          新規追加
        </button>
        {content.map((item, index) => {
          return (
            <TodoCard
              item={item}
              index={index}
              setContent={setContent}
              setTitle={setTitle}
            />
          );
        })}
      </div>
      <div className="MainBox">
        {title === "" ? (
          <Form content={content} setContent={setContent} />
        ) : (
          <TodoView title={title} />
        )}
      </div>
    </div>
  );
}

export default App;
