import React, { useState } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function infobox({ infor }) {

  return (
  
      <div>
        <h2>
          Weather in {infor.city}&nbsp;
          <span>
            {infor.humidity > 79 ? (
              <ThunderstormIcon />
            ) : infor.temp > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </span>
        </h2>
        <h1> {infor.temp}&deg;C</h1>
        <p>humidity :{infor.humidity}</p>
        <p>min tempretur : {infor.temp_min}&deg;C</p>
        <p> max tempretur : {infor.temp_mex}&deg;C </p>
        The weather can be discribed as {infor.weathar}
        <br /> and feels like &nbsp;
        {infor.feels_like}&deg;C
      </div>
  
  );
}
