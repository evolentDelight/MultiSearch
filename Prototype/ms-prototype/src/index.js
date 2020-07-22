import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import Main from "./Main";

window.localStorage.clear();

const storeList = [
  { name: "Store1", link: "" }, //Link is an API call to server. The server will respond with data associated with product
  { name: "Store2", link: "" },
  { name: "Store3", link: "" },
  { name: "Store4", link: "" },
];

ReactDOM.render(
  <Main storeList={storeList} />,
  document.getElementById("root")
);
