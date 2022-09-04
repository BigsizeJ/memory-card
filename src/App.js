import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Theme } from "./components/util/Theme";

import CardGrid from "./components/CardGrid";
import Collection from "./components/util/Collection";
import Footer from "./components/Footer";

const Container = styled.div`
  position: relative;
  min-width: 100%;
  min-height: 100%;
  background-color: ${Theme.baseColor};
`;

export const App = () => {
  return (
    <Container>
      <Collection>
        <Header />
        <CardGrid />
      </Collection>
      <Footer />
    </Container>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
