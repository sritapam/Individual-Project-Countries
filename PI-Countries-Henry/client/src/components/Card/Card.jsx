import React from "react";
import { Link } from "react-router-dom";

import s from "./Card.module.css";

export default function Card({ name, flags, continent, alpha3Code }) {
  return (
    <div>
        <div key={alpha3Code} className={s.card}>
        <Link to={`/countries/${alpha3Code}`}>
          <img
            className={s.flag}
            src={flags}
            alt="Img not found"
            width="100px"
            heigth="45px"
          />
           </Link>
          <h3 className="name">{name}</h3>
          <h5 className={s.continent}>Continent: {continent}</h5>
        </div>
    </div>
  );
}
