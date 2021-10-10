
import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryByParams } from '../actions/index';
import { useEffect, useState } from "react";


export default function CountryDetail(props){
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountryByParams(props.match.params.idPais));
    },[dispatch, props.match.params.idPais])
    const countryFound = useSelector((state)=> state.country)
    console.log(countryFound, 'estoyencountrydetail')
    return (
        <div>
            {countryFound?
            <div>
                <h1>{countryFound.name}</h1>
                <img src={countryFound.flags} alt="flag from country" width="350px" heigth="200px"></img>
                <h2>Continent:</h2>
        <h3>{countryFound.continent}</h3>
        <h2>Id:</h2>
        <h3>{countryFound.alpha3Code}</h3>
        <h2>Capital:</h2>
        <h3>{countryFound.capital}</h3>
        <h2>Region:</h2>
        <h3>{countryFound.region}</h3>
        <h2>Area of the country:</h2>
        <h3>
        {countryFound.area} Million {'\u33A2'}
        </h3>
        <h4>Actividades:</h4>
        <h4>{countryFound.Activities?.map(a=>a.name + (' '))}</h4>
        </div> : <p>Loading...</p>
}
<Link to= '/home/'>
    <button>GO TO COUNTRIES</button>
</Link>
    </div>
    )
}
