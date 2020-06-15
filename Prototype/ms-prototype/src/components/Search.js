import React, { useState } from "react";
import './Search.css';

function Search(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.executeSearch(e.target.value);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="flex-form">
      <label htmlFor="input" className="hide">Search for Products</label>
      <input
        type="text"
        className="input"
        id="input"
        value={name}
        onChange={handleChange}
        placeholder="Search"
        required="required"
      />
    </form>
  );
}

export default Search;
