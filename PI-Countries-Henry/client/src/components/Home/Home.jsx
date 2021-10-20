import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //hooks
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import FilterForActivities from "../FilterForActivities/FilterForActivities";
import NavBar from "../NavBar/NavBar";
import s from "./Home.module.css";

import {
  getActivities,
  getCountries,
  filterCountryByContinent,
  filterByAlphabet,
  filterByArea,
} from "../../actions";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const [orden, setOrden] = useState(""); //useState parametro... el estado inicial // anade estado local al comp de react

  //PAGINATION
  //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);

  const indexLastCountry = currentPage * countriesPerPage; //1*9
  const indexFirstCountry = indexLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexFirstCountry,
    indexLastCountry
  );
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
    setCountriesPerPage(10);
  }, [dispatch]);

  //HANDLERS

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleFilterByContinent(e) {
    dispatch(filterCountryByContinent(e.target.value));
    setCurrentPage(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(filterByAlphabet(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }
  function handleSortArea(e) {
    e.preventDefault();
    dispatch(filterByArea(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div className={s.all}>
      <div className={s.bkg} />
      <div className={s.container}>
      <div>
          <NavBar setCurrentPage={setCurrentPage} />
        </div>
        <div className={s.search}>
          <SearchBar />
          <div>
            {/* <label htmlFor="forAlphabet">Search by Alphabet: </label> */}
            <select className={s.select} onChange={(e) => handleSort(e)}>
              <option value="">Search by Alphabet</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>

            {/* <label htmlFor="forContinents">Search by Continent: </label> */}
            <select
              className={s.select}
              onChange={(e) => handleFilterByContinent(e)}
            >
              <option value="">Search by Continent</option>
              <option value="All">All Countries</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
              <option value="Americas">Americas</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Antarctic">Antarctic</option>
            </select>

            {/* <label htmlFor="forArea">
            Search by Area in Millons {"\u33A2"}:{" "}
          </label> */}
            <select className={s.select} onChange={(e) => handleSortArea(e)}>
              <option value="">Search by Area in {"\u33A2"}</option>
              <option value="asc">Smallest Countries to Biggest</option>
              <option value="desc">Biggest Countries to Smallest</option>
            </select>
            <FilterForActivities />
          </div>
          <div className={s.refresh}>
            <button
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Refresh page
            </button>
          </div>
        </div>

        <div className={s.cards}>
          {currentCountries.map((c, idx) => (
            <div className={s.card} key={idx}>
              {/* <Link to={"/countries/" + c.alpha3Code}> */}
              <Card
                name={c.name}
                flags={c.flags}
                continent={c.continent}
                key={c.alpha3Code}
                alpha3Code={c.alpha3Code}
              />
              {/* </Link> */}
            </div>
          ))}
        </div>
        <div>
          <Pagination
            countriesPerPage={countriesPerPage}
            totalCountries={allCountries.length}
            pagination={pagination}
          />
        </div>
      </div>
    </div>
  );
}
