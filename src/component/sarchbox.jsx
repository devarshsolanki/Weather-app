import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import "./serchbox.css";
import SearchIcon from "@mui/icons-material/Search";

export default function sarchbox({ updeteinfo }) {
  let [city, setCity] = useState(" ");
  let [error, setError] = useState(false);

  const api_url = "http://api.openweathermap.org/data/2.5/weather";
  const api_key = "b8d0e9e69a8849ae9296b1b5982a07c0";

  let getweatherdata = async () => {
    try {
      let respons = await fetch(
        `${api_url}?q=${city}&appid=${api_key}&units=metric`
      );
      let jsonrespons = await respons.json();
      let result = {
        city: city,
        temp: jsonrespons.main.temp,
        humidity: jsonrespons.main.humidity,
        temp_mex: jsonrespons.main.temp_max,
        temp_min: jsonrespons.main.temp_min,
        feels_like: jsonrespons.main.feels_like,
        weathar: jsonrespons.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let chengcity = (evt) => {
    setCity(evt.target.value);
  };

  let hendelsub = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      setError(false);
      let newinfo = await getweatherdata();
      updeteinfo(newinfo);
    } catch (err) {
      setError(true);
    }
  };


  return (
    <div>
      <div className="cantenar1" onSubmit={hendelsub}>
        <label className="citylabel" htmlFor="city">
           City :
        </label>
        &nbsp;
        <input
          type="text"
          id="city"
          required
          value={city}
          onChange={chengcity}
        />
        <div>
          <button className="sercha" onClick={hendelsub}>
            <SearchIcon />
          </button>
        </div>
      </div>
      {error && (
        <p className="error" style={{ color: "red" }}>
          No such plach exists!
        </p>
      )}
    </div>
  );
}
