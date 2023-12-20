import React from "react";

const ListProduitsCard = ({ el }) => {
  return (
    <div>
      <ul>
        <li> {el.name} </li>
      </ul>
    </div>
  );
};

export default ListProduitsCard;
