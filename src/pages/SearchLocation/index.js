import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }
`;

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
        <Input
          value={this.state.value}
          placeholder="Enter Location"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchLocation;
