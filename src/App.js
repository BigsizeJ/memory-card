import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Theme } from "./components/util/Theme";
import Score from "./components/util/Score";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Theme.baseColor};
`;

export const App = () => {
  return (
    <Container>
      <Score>
        <Header />
      </Score>
    </Container>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
