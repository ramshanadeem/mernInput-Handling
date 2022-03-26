import React from "react";
import BoxItem from "../BoxItem";

function BoxList({ cardData, handleDelete }) {
  console.log(cardData);
  return (
    <>
      {cardData.map((item) => (
        <>
          <BoxItem key={item.id} item={item} handleDelete={handleDelete} />
        </>
      ))}
    </>
  );
}

export default BoxList;
