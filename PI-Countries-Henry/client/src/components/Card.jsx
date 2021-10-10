import React from "react";
import { Link} from 'react-router-dom';

export default function Card({name, flags, continent, alpha3Code}){
    
    return (
        <div key={alpha3Code}>
            <Link to={`/countries/${alpha3Code}`}><img src={flags} alt='Img not found' width="200px" heigth="150px" /></Link>
            
            <h3>{name}</h3>
            <h5>Continent: {continent}</h5>
            
        </div>
    )
}
