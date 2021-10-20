import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByParams } from "../../actions/index";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";

import s from "./CountryDetail.module.css";

export default function CountryDetail(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryByParams(props.match.params.idPais)); // react router
  }, [dispatch, props.match.params.idPais]);
  const countryFound = useSelector((state) => state.country);

  return (
    <div className={s.body}>
      <NavBar />
      <div className={s.bkg} />
      <div className={s.container}>
        {countryFound ? (
          <div className={s.countryContainer}>
            <h1>{countryFound.name}</h1>
            <img
              src={countryFound.flags}
              alt="flag from country"
              width="150px"
              heigth="200px"
            ></img>
            <h3>Continent: {countryFound.continent}</h3>
            <h3>Id: {countryFound.alpha3Code}</h3>
            <h3>Capital: {countryFound.capital}</h3>
            <h3>Region: {countryFound.region}</h3>
            <h3>
              Area of the country: {countryFound.area} Million {"\u33A2"}
            </h3>
            <div className={s.activities}>
              <h1>Activities:</h1>
              {countryFound.Activities?.map((a) => {
                return (
                  <div>
                    <h3>Name: {a.name}</h3>
                    <h4>Difficulty: {a.difficulty}</h4>
                    <h4>Duration: {a.duration} min.</h4>
                    <h4>Season: {a.season}</h4>
                    {/* <button onClick= {()=> deleteAction(a.name)}>DELETE</button> */}
                  </div>
                );
              })}
            </div>
            <div className={s.buttonside}>
              <Link to="/activity">
                <button className={s.button}>Create your new activity</button>
              </Link>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
