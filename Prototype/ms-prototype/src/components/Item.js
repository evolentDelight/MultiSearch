import React from "react";
import "../style/Item.css";

function Item(props) {
  //passes link{props.link}
  //Three state: initial/loading/display

  return (
    <div className="item-box">
      <a href={``} target="_blank" rel="noopener noreferrer">
        <span id="thumbnail" className="thumbnail"></span>
      </a>
      <span id="item-name" className="item-name">
        <a href={``} target="_blank" rel="noopener noreferrer">
          Name
        </a>
      </span>
    </div>
  );
}

export default Item;
