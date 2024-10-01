import React, { useState } from "react";
import Infobox from "./infobox";
import Serchbox from "./sarchbox";
import "./weatherapp.css";

export default function weatherapp() {
  let [weatherinfo, setWeatherinfo] = useState({
    city: "City name",
    feels_like: 0,
    humidity: 0,
    temp: 0,
    temp_mex: 0,
    temp_min: 0,
    weathar: " ",
  });

  let updeteinfo = (newinfo) => {
    setWeatherinfo(newinfo);
  };
  return (
    <div className="cantenar">
      <h2>Live Weather website  </h2>
      <Serchbox updeteinfo={updeteinfo} />
      <Infobox infor={weatherinfo} />
    </div>
  );
}
