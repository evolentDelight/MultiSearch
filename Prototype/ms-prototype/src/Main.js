import React, { useState } from "react";
import Header from "./components/Header.js";
import Search from "./components/Search.js";
import Options from "./components/Options";
import Display from "./components/Display";
import { nanoid } from "nanoid";
import "./Main.css";


function Main(props) {
  const [searchValue, setSearchValue] = useState("");
  const [searchBartoggle, setsearchBartoggle] = useState(false);

  const names = props.storeList.map((store) => store.name);

  const userSelections = (
    <div key={`Main-uS-${nanoid()}`} className="flex-main userselection">
      <Search key={`uS-${nanoid()}`} setSearchValue={setSearchValue} />
      <Options key={`uS-${nanoid()}`} storeList={names} />
    </div>
  );

  const hoverSearchbar = (
    <div className="searchBar-hover">
      <div className={`searchBar-flex-container ${searchBartoggle ? `reveal` : `hide`}`}>
        <Search key={`uS-${nanoid()}`} setSearchValue={setSearchValue} />
      </div>
    </div>
  );

  window.addEventListener("scroll", () => {
    const element = document.getElementsByClassName("display-flex")[0].getBoundingClientRect();
    if(element.top <= 100){
      setsearchBartoggle(true);
    }
    else setsearchBartoggle(false);
  })

  return [
    <Header key={`header-${nanoid()}`} />,
    userSelections,
    hoverSearchbar,
    <Display
      searchValue={searchValue !== "" ? searchValue : ""}
      storeList={props.storeList}
    />,
  ];
}

export default Main;
