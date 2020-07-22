import React from "react";
import {nanoid} from "nanoid";
import Store from "./Store.js"
import "../style/Display.css";

function Display(props){

  const stores = props.storeList.map((store)=>
    <Store key={`store-${nanoid()}`} name={store.name} link={store.link} product={props.searchValue} />
  )

  return(
    <div className="display-flex">
      {stores}
    </div>
  )
}

export default Display;