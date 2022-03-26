import { Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Boxes } from "../Styled";
import BoxInput from "../BoxInput";

function BoxItem({ item, handleDelete }) {
  return (
    <>
      <div>
        <Boxes whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ paddingTop: "25x", paddingLeft: "76px" }}>
              {item.text}
            </p>
            <Button variant="outline" onClick={() => handleDelete(item.id)}>
              {" "}
              <CloseIcon />
            </Button>
          </div>
        </Boxes>
      </div>
    </>
  );
}

export default BoxItem;
