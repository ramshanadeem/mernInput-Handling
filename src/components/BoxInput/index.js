import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Buttons } from "../Styled";

function BoxInput() {
  const [text, setText] = useState(" ");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    if (text.length <= 8) {
      setMessage("must be large");
    } else {
      setMessage(null);
    }
    setText(e.target.value);
  };
  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          onChange={handleChange}
          variant="outlined"
          value={text}
          style={{ backgroundColor: "white" }}
        />
        <Buttons type="submit" isDisable={!text}>
          submit
        </Buttons>
        <p style={{ color: "white" }}>{message}</p>
      </div>
    </>
  );
}

export default BoxInput;
