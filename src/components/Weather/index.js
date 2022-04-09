import React from "react";
import { StyledWeather } from "./Weather.styles";

export default class Weather extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <StyledWeather>
        <h1>{data.name}</h1>
        <h3>Temperature: {Math.ceil(data.main.temp)} &#176;</h3>
        <h3>Feels like: {Math.ceil(data.main.feels_like)} &#176;</h3>
        <h3>{data.weather[0].description}</h3>
      </StyledWeather>
    );
  }
}