import React from "react";
import { StyledInput } from "./SearchLocation.styles";

class SearchLocation extends React.Component {
  state = {
    value: ""
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({ value: "" });
  };

  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <StyledInput
          value={this.state.value}
          placeholder="Enter Location"
          onChange={this.handleChange}
        />
      </form>
      
    );
  }
}

export default SearchLocation;
