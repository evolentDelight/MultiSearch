import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Item from "./Item.js";
import "./Store.css";

function Store(props) {
  //item name{props.product}
  //Store name{props.name}
  //Store link{props.link}
  //console.log("searchValue: ", props.product)

  const initial = [
    <Item key={`item-${nanoid()}`} state="initial" />,
    <Item key={`item-${nanoid()}`} state="initial" />,
    <Item key={`item-${nanoid()}`} state="initial" />,
    <Item key={`item-${nanoid()}`} state="initial" />,
    <Item key={`item-${nanoid()}`} state="initial" />,
  ];

  const loading = [
    <Item key={`item-${nanoid()}`} state="loading" />,
    <Item key={`item-${nanoid()}`} state="loading" />,
    <Item key={`item-${nanoid()}`} state="loading" />,
    <Item key={`item-${nanoid()}`} state="loading" />,
    <Item key={`item-${nanoid()}`} state="loading" />,
  ];

  const items = [];

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [json, setJson] = useState({});

  useEffect(() => {
    //Call server which will handle bringing the user-identified products
    if (props.product !== "") {
      fetch("")
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setJson(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
  }, []);

  if (error) {
    return <div> Error: {error.message}</div>;
  } else if (!isLoaded && props.product !== "") {
    //Display Loading Page
    return (
      <div className="store-tab">
        <h1>{props.name}</h1>
        <div className="store-items-flex">{loading}</div>
      </div>
    );
  } else if (!isLoaded && props.product === "") {
    //Display Initial Page
    return (
      <div className="store-tab">
        <h1>{props.name}</h1>
        <div className="store-items-flex">{initial}</div>
      </div>
    );
  } else {
    //Data is Loaded and needed to be assigned
    //Assign variables here//call function
    //output the items
    return (
      <div className="store-tab">
        <h1>{props.name}</h1>
        <div className="store-items-flex">{items}</div>
      </div>
    );
  }
}

export default Store;
