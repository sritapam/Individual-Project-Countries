import React from 'react';
import { Link } from 'react-router-dom';

import CardById from './CardById';

export default function CardsById({ countries, loading, byParams }) {
  loading && <h2>Loading...</h2>;

  return (
    <div>
      {countries.length > 0 &&
        countries.map((c, idx) => (
          <div className>
            <div key={idx}>
              {byParams !== undefined && (
                <CardById
                  key={idx}
                  flags={c.flags}
                  name={c.name}
                  continent={c.continent}
                  id={c.alpha3Code}
                  capital={c.capital}
                  subregion={c.region}
                  area={c.area / 1000000}
                />
              )}
            </div>
          </div>
        ))}
    </div>
  );
}






