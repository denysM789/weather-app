import styled from "styled-components";

export const StyledInput = styled.input`
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