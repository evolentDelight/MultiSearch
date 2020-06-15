import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";

const storeList = [
  { name: "Walmart", link: "" },
  { name: "Amazon", link: "" },
  { name: "Target", link: "" }
];

ReactDOM.render(
  <Main storeList={storeList} />,
  document.getElementById("root")
);
