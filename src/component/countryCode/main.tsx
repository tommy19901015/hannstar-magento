import React, { useState, useEffect } from "react";
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json'
import "./css.scss";

type Props = {
  onSelectionUpdate: (value: string) => void
}

const CountryCodeComponent: React.FC<Props> = ({ onSelectionUpdate }) => {
  const [country, setCountry] = useState("TW");
  const handleChange = (event: any) => {
    setCountry(event.target.value);
    onSelectionUpdate(event.target.value);
  };

  return (
    <div className="TabBlock">
      <select
        value={country}
        name="phoneCountry"
        className="country-select"
        onChange={handleChange}
      >

        {getCountries().map((country) => (
          <option key={country} value={country}>
            + {getCountryCallingCode(country)}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {en[country]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryCodeComponent;
