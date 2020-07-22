import React from 'react';
import {nanoid} from "nanoid"
import '../style/Options.css';

function Options(props){

  const element = props.storeList.map((store)=>
    <li key={`store-${nanoid()}`}>{store}</li>
  );

  return(
    <div className="list">
      <legend>Available Options</legend>
      <ul>
        {element}
      </ul>
    </div>
  )
}

export default Options;