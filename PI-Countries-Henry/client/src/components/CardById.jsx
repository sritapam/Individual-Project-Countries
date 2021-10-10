import React from "react";

export default function CardById(props) {
  const { name, flags, continent, alpha3Code, capital, region, area } = props;

  return (
    <div>
      <div>
        <img
          alt="flag from country"
          width="350px"
          heigth="200px"
          src={flags}
        ></img>
      </div>
      <div>
        <h2>Name:</h2>
        <h3>{name}</h3>
        <h2>Continent:</h2>
        <h3>{continent}</h3>
        <h2>Id:</h2>
        <h3>{alpha3Code}</h3>
        <h2>Capital:</h2>
        <h3>{capital}</h3>
        <h2>Subregion:</h2>
        <h3>{region}</h3>
        <h2>Area of the country:</h2>
        <h3>
          {area / 10} Million {"\u33A2"}
        </h3>
      </div>
    </div>
  );
}
