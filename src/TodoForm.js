import React, { useState } from "react";
import styled from "styled-components/macro";

export default function TodoForm({ onClick }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <form>
      <input
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        placeholder="Add your todo"
        required
      ></input>
      <Button
        onClick={() => {
          if (inputValue !== "") {
            onClick(inputValue);
            setInputValue("");
          }
        }}
      >
        Add
      </Button>
    </form>
  );
}
const Button = styled.button`
  background-color: cornflowerblue;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
`;
