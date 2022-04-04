import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import SearchLocation from "./pages/SearchLocation";
import City from "./pages/City";
import "./styles.css";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

const StyledWrapper = styled.div`
  width: 100vh;
  height: 100vh;
  background: #404040;
  border-radius: 20px;
  text-align: center;
`;

const StyledContainer = styled.div`
  display: flex;
`;

class App extends React.Component {
  state = {
    cities: []
  };

  handleSubmit = (value) => {
    this.setState({ cities: [...this.state.cities, value] });
  };

  render() {
    //console.log(this.state.cities);
    return (
      <Router>
        <StyledWrapper>
          <SearchLocation handleSubmit={this.handleSubmit} />
          <div>
            <StyledContainer>
              <div>
                <Home />
              </div>
              <div>
                <ul>
                  {this.state.cities.map((city) => (
                    <li>
                      <StyledLink to={`/city/${city}`}>{city}</StyledLink>
                    </li>
                  ))}
                </ul>
              </div>
            </StyledContainer>
          </div>
        </StyledWrapper>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/city/:cityId" component={City}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
