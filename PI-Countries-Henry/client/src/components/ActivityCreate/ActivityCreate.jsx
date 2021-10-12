import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from '../NavBar/NavBar'
import styles from './ActivityCreate.module.css';

import {
  getCountries,
  postActivity,
} from "../../actions";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Please, we need a name";
  } else if (!input.difficulty) {
    errors.difficulty = "Please, we need the difficulty";
  } else if (!input.duration) {
    errors.duration = "Please, we need the duration";
  } else if (!input.season) {
    errors.season = "Please, we need the season";
  }
  return errors;
}

export default function ActivityCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countriesFounded = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});

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
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleCheck(e) {
    if (e.target.checked) {
      const str = e.target.value + "";
      setInput({
        ...input,
        difficulty: str,
      });
    }
  }

  function handleSelect(e) {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
  }

  function handleSeason(e) {
    setInput({
      ...input,
      season: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postActivity(input));
    alert("Enjoy, your Activity is real");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  function handleDelete(el) {
    setInput({
      ...input,
      countries: input.countries.filter((c) => c !== el),
    });
  }

  return (
    <div className={styles.activity}>
      <NavBar/>
      {/* <h1 className={styles.activity_title}>Create here: </h1> */}
      <form className={styles.form1} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.line_1}>
        <label>Name:</label>
          <input
          className={styles.shad1}
            type="text"
            placeholder={' Introduce your activity tourist...'}
            value={input.name}
            name="name"
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div  className={styles.check_5}>
          <label>Season:</label>
          <div>
          <label><input type="checkbox" value="Spring" name="Spring" onChange={(e) => handleSeason(e)} />Primavera</label>
          <label><input type="checkbox" value="Summer" name="Summer" onChange={(e) => handleSeason(e)} />Verano</label>
          <label><input type="checkbox" value="Autumn" name="Autumn" onChange={(e) => handleSeason(e)} />Otoño</label>
          <label><input type="checkbox" value="Winter" name="Winter" onChange={(e) => handleSeason(e)} />Invierno</label>
          {errors.season && <p className="error">{errors.season}</p>}
        </div>
        </div>
        
        <div className={styles.line_2}>
          <label >Duration in minutes:</label>
          <input
          placeholder={' Introduce your crossing duration in minutes...'}
          className={styles.shad1}
            type="text"
            value={input.duration}
            name="duration"
            onChange={handleChange}
            min='0'
            max='600'
          />
          {errors.duration && <p className="error">{errors.duration}</p>}
        </div>

        <div className={styles.check_5}>
          <label>Difficulty:</label>
          <div>
            <label>
            <input
              type="checkbox"
              value="1"
              name="uno"
              onChange={(e) => handleCheck(e)}
            />
            1
          </label>
          <label>
            <input
              type="checkbox"
              value="2"
              name="dos"
              onChange={(e) => handleCheck(e)}
            />
            2
          </label>
          <label>
            <input
              type="checkbox"
              value="3"
              name="tres"
              onChange={(e) => handleCheck(e)}
            />
            3
          </label>
          <label>
            <input
              type="checkbox"
              value="4"
              name="cuatro"
              onChange={(e) => handleCheck(e)}
            />
            4
          </label>
          <label>
            <input
              type="checkbox"
              value="5"
              name="cinco"
              onChange={(e) => handleCheck(e)}
            />
            5
          </label>
          {errors.difficulty && <p className="error">{errors.difficulty}</p>}
          </div>
        </div>

        <div className={styles.line_4}>
        <label>Countries:</label>
        <select className={styles.shad1} onChange={(e) => handleSelect(e)}>
          {countriesFounded.map((c) => (
            <option value={c.name}>{c.name}</option>
          ))}
        </select>
        </div>
        {input.countries.map((c) => (
          <div className={styles.delete}>
            <p>{c}</p>
            <button
              className= {styles.botton}
              className="delete"
              onClick={() => {
                handleDelete(c);
              }}
            >
              X
            </button>
          </div>
        ))}
        <button className={styles.creaActivityButton} type="submit"> CREATE YOUR ACTIVITY </button>
      </form>
      {/* <Link to="/home">
        <button className={styles.button}>Back to Countries</button>
      </Link> */}
    </div>
  );
}
