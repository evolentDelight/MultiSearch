import React, { useState, useEffect } from "react";
import "./Search.css";

function Search(props) {
  const [name, setName] = useState(localStorage.getItem("searchValue") || "");

  function handleSubmit(e) {
    e.preventDefault();
    props.setSearchValue(name);
    localStorage.setItem("searchValue", name);
  }

  function handleChange(e) {
    setName(e.target.value);
    localStorage.setItem("searchValue", e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex-form">
      <label htmlFor="input" className="hide">
        Enter Product Name
      </label>
      <input
        type="text"
        className="input"
        id="input"
        value={name}
        onChange={handleChange}
        placeholder="🔍"
        required="required"
      />
    </form>
  );
}

export default Search;
