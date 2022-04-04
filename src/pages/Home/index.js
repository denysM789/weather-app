import React from "react";
import axios from "axios";

class Home extends React.Component {
  state = {
    geolocation: {
      latitude: null,
      longitude: null
    },
    user: {},
    isLoading: false
  };

  getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          this.setState({ isLoading: true });
          const { data: city } = await axios(
            `https:/api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`
          );
          this.setState({
            city,
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
      <div>
        <div></div>
      </div>
    );
  }
}

export default Home;

// Query
// link.com? key=value & key2=value2 & key3=value3
