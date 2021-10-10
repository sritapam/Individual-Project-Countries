import React from 'react';
import styles from '../App.module.css'

export default function Pagination ({totalCountries, countriesPerPage, pagination}){
    const pageNumbers = [];

    for (let i=0; i<=Math.floor(totalCountries/countriesPerPage)-1;i++){
        pageNumbers.push(i+1);
    }
    return (
        <nav>
          <ul className={styles.pagination}>
            { pageNumbers && pageNumbers.map(number => (
                <div className='number' key={number}>
                  <div onClick={() => pagination(number)}>{number}</div>
                </div>
          ))}
          </ul>
        </nav>
      )
} 
