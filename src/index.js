import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "./Button";

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const Blueh1 = styled.h1`
  color: #7f7fff;
`;

function App() {
  return (
    <WrapperDiv>
      <Blueh1>Styled Components Playground</Blueh1>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button>
    </WrapperDiv>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
