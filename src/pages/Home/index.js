import React from "react";
import axios from "axios";

const APIKey = "02abb7c62f4761cdce671150fdc67fed";

class Home extends React.Component {
  state = {
    geolocation: {
      latitude: null,
      longitude: null
    },
    city: {},
    temp: "",
    wind: "",
    isLoading: false
  };

  getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          this.setState({ isLoading: true });
          const { data: city } = await axios(
            `https:/api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`
          );
          this.setState({
            city,
            temp: city.main.temp,
            feelsLike: city.main.feels_like,
            description: city.weather[0].description,
            geolocation: { latitude, longitude },
            isLoading: false
          });
        } catch (err) {}
      }
    );
  };

  componentDidMount() {
    this.getGeoLocation();
  }

  render() {
    return (
      <div key={this.state.city.id}>
     {!this.state.isLoading && <h1>Current Location: {this.state.city.name}</h1>}
     {!this.state.isLoading && <h3>Temperature: {Math.ceil(this.state.temp)} °C</h3>}
     {!this.state.isLoading && <h3>Feels like: {Math.ceil(this.state.feelsLike)} °C</h3>}
     {!this.state.isLoading && <h3>{this.state.description}</h3>}
      </div>
    );
  }
}

export default Home;
