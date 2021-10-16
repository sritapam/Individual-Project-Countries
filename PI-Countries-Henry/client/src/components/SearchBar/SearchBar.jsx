import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../../actions/index";
import { BiSearchAlt } from "react-icons/bi";

import s from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameCountries(name));
    setName("");
  }
  return (
    <div className={s.container}>
      <input
        className={s.input}
        type="text"
        onChange={(e) => handleInputChange(e)}
        placeholder="Find the country where you will travel..."
      ></input>
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        <BiSearchAlt className={s.icon} />
      </button>
    </div>
  );
}
