import React from "react";
import axios from "axios";
import { StyledCity } from "./City.styles";
import Weather from "../../components/Weather";

const APIKey = "02abb7c62f4761cdce671150fdc67fed"

class City extends React.Component {
  state = {
    isLoading: false,
    currentData: null,
    error: null,
    forecastData: null
  };

  getWeatherInfo = async () => {
    this.setState({ isLoading: true });
    const cityId = this.props.match.params.cityId;
    try {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${APIKey}&units=metric`
      );
      this.setState({
        isLoading: false,
        currentData: result.data,
        error: null
      });
    } catch (err) {
      this.setState({ isLoading: false, error: err });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.cityId !== this.props.match.params.cityId)
    this.getWeatherInfo();
  }
  componentDidMount() {
    this.getWeatherInfo();
  }
  render() {
    //console.log(this.props.match.params)
    return (
      <StyledCity>
        {this.state.isLoading && <p>Loading</p>}
        {this.state.error && <h1>Error: City Not Found</h1>}
        {this.state.currentData && !this.state.error && (
          <Weather data={this.state.currentData} />
        )}
      </StyledCity>
    );
  }
}

export default City;
