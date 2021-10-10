import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //hooks
import { Link } from "react-router-dom";
import styles from '../App.module.css';
import Card from "./Card";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import FilterForActivities from "./FilterForActivities";
import s from "./Home.module.css";
import {
  getActivities,
  getCountries,
  filterCountryByContinent,
  filterByAlphabet,
  filterByArea,
} from "../actions";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const [ orden, setOrden] = useState('');
  //PAGINATION
  //const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
// console.log(allCountries[0].alpha3Code, 'pame')
  const indexLastCountry = currentPage * countriesPerPage;
  const indexFirstCountry = indexLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(indexFirstCountry,indexLastCountry);
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
    e.preventDefault(); // para q no se me recargue la pagina y me rompa todo
    dispatch(getCountries());
  }

  function handleFilterByContinent(e) {
    dispatch(filterCountryByContinent(e.target.value));
  }
  
  function handleSort(e){
    e.preventDefault();
    dispatch(filterByAlphabet(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`); //arranca vacio y lo seteo, hermoso estado local
  }
  function handleSortArea(e){
    e.preventDefault();
    dispatch(filterByArea(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`); //arranca vacio y lo seteo, hermoso estado local
  }
  
  return (
    <div className={s.all}>
      <Link to="/home"></Link>
      <Link to="/activity">Create your Activity</Link>
      <Link to='/'><h1>Travels around the world</h1></Link>
      <div>
        <label htmlFor="forAlphabet">Search by Alphabet: </label>
        <select onChange={(e) => handleSort(e)}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <label htmlFor="forContinents">Search by Continent: </label>
        <select onChange={(e) => handleFilterByContinent(e)}>
          <option value="All">All Countries</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Antarctic">Antarctic</option>
        </select>
        <label htmlFor="forArea">Search by Area in Millons {"\u33A2"}: </label>
        <select onChange={(e) => handleSortArea(e)}>
          <option value="asc">Smallest Countries to Biggest</option>
          <option value="desc">Biggest Countries to Smallest</option>
        </select>
        <button
          onClick={(e) => {handleClick(e)}}>Refresh page</button>
        <FilterForActivities/>
        <SearchBar/>
        <Pagination
          countriesPerPage={countriesPerPage}
          totalCountries={allCountries.length}
          pagination={pagination}
        />
        {currentCountries.map((c, idx) => (
            <div className={styles.card} key={idx}>
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
    </div>
  );
}
