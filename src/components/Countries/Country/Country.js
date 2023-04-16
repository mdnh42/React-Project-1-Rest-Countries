import React from 'react';
import './Country.css';
const Country = (props) => {
    const {area, region, population, name, flags} = props.country;
    return (
        <div className='country bg-white border'>
            <img src={flags.png} alt="" />
            <h1>Country Name:{name.common}</h1>
            <h4>Population:{population}</h4>
            <h4>Area:{area}</h4>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;