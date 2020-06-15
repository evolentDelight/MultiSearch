import React from "react";
import Header from "./components/Header.js";
import Search from "./components/Search.js";
import Options from "./components/Options";
import Display from "./components/Display";
import { nanoid } from "nanoid";
import "./Main.css";

function Main(props) {
  let searchValue = "";

  function executeSearch(value) {
    searchValue = value;
  }

  const userSelections = (
    <div key={`Main-uS-${nanoid()}`} className="flex-main userselection">
      <Search key={`uS-${nanoid()}`} executeSearch={executeSearch} />
      <Options key={`uS-${nanoid()}`} storeList={props.storeList} />
    </div>
  );

  return [
    <Header key={`header-${nanoid()}`} />,
    userSelections,
    <Display
      searchValue={searchValue !== "" ? searchValue : ""}
      storeList={props.storeList}
    />,
  ];
}

export default Main;
