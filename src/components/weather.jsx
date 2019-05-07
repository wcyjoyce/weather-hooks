import React, { Component } from "react";

// TODO:
// 1) Determine month and latitude
// 2) If user is i) in the Northern Hemisphere and ii) between March and October, return "Summer"
// 3) If user is i) in the Southern Hemisphere and ii) between October and March, return "Summer"
// 4) Otherwise, return "Winter"

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    icon: "sun"
  },
  winter: {
    text: "Winter is here",
    icon: "snowflake"
  },
  null: {
    text: "Location not detected",
    icon: "marker"
  }
}

const getSeason = (latitude, month) => {
  if (!latitude) {
    return "null"
  }
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude > 0 ? "winter" : "summer";
  }
}

const Weather = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, icon } = seasonConfig[season]; // returns { text, icon } of season constant

  return (
    <div>
      <i className={`${icon} icon`}></i>
      <div>{text}</div>
      <div>Latitude: {props.latitude} | Longitude: {props.longitude}</div>
    </div>
  );
}

export default Weather;
