import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";

const storeList = [
  { name: "Store1", link: "" },
  { name: "Store2", link: "" },
  { name: "Store3", link: "" },
  { name: "Store4", link: "" }
];

ReactDOM.render(
  <Main storeList={storeList} />,
  document.getElementById("root")
);
