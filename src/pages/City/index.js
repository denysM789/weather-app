import React from "react";

class City extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.cityId !== this.props.match.params.cityId)
      console.log("fetching data for: ", this.props.match);
  }
  componentDidMount() {
    console.log("fetching data for: ", this.props.match.params.cityId);
  }
  render() {
    return (
      <div>
        <div>{this.props.match.params.cityName}</div>
        <span>{this.props.match.params.cityName}</span>
      </div>
    );
  }
}

export default City;
