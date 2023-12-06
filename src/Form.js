import { useState } from "react";

export const Form = ({ content, setContent }) => {
  const [input, setInput] = useState("");
  return (
    <div className="FormView">
      <input
        className="FormInput"
        type="text"
        placeholder="Todoを入力"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="FormButton"
        onClick={() => setContent([...content, input])}
      >
        追加
      </button>
    </div>
  );
};
