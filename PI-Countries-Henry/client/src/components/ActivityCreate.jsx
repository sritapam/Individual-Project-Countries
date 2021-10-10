import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getCountries, getCountryByParams, postActivity } from "../actions";

export default function ActivityCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countriesFounded = useSelector((state) => state.countries);
  //estado para guardar mi formulario
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  function handleChange(e) {
    
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  console.log(input);

  function handleCheck(e) {
    if (e.target.checked) {
      const str = e.target.value + '';
      setInput({
        ...input,
        difficulty: str,
      });
    }
  }

console.log(input.countries)

  function handleSelect(e) {
    console.log(e.target.value, 'pame')
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
      
    });
  }

  function handleSeason(e){
    console.log(e.target.value)
    setInput({
      ...input,
      season: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postActivity(input));
    alert("Enjoy, your Activity is real");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    history.push('/home');
  }

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div>
      <Link to="/home">
        <button>Back to Countries</button>
      </Link>
      <h1>Create here: </h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Difficulty:</label>
          <label>
            <input type="checkbox" value='1' name="uno" onChange={(e) => handleCheck(e)}/>1</label>
          <label>
            <input
              type="checkbox"
              value='2'
              name="dos"
              onChange={(e) => handleCheck(e)}
            />
            2
          </label>
          <label>
            <input
              type="checkbox"
              value='3'
              name="tres"
              onChange={(e) => handleCheck(e)}
            />
            3
          </label>
          <label>
            <input
              type="checkbox"
              value='4'
              name="cuatro"
              onChange={(e) => handleCheck(e)}
            />
            4
          </label>
          <label>
            <input
              type="checkbox"
              value='5'
              name="cinco"
              onChange={(e) => handleCheck(e)}
            />
            5
          </label>
        </div>
        <div>
          <label>Duration:</label>
          <input
            type="text"
            value={input.duration}
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Season:</label>
          <select onChange={(e) => handleSeason(e)}>
            <option value="Spring" >
              Spring
            </option>
            <option value="Summer"  >
              Summer
            </option>
            <option value="Autumn"  >
              Autumn
            </option>
            <option value="Winter"  >
              Winter
            </option>
          </select>
        </div>
        <label>Countries:</label>
        <select onChange={(e) => handleSelect(e)}>
          {
          countriesFounded.map((c) => (
            <option value={c.name}>{c.name}</option>
          ))}
        </select>
        <ul>{input.countries.map((c) => c + " ,")}</ul>
        <button type="submit"> CREATE YOUR ACTIVITY </button>
      </form>
    </div>
  );
}
