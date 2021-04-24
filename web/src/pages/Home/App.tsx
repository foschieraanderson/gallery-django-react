import React from 'react';

import { Header } from "../../components/Header";
import { Gallery } from "../../components/Gallery";
import { GlobalStyle } from "../../styles/global";

function App() {
  return (
    <>
      <Header />
      <Gallery />
      <GlobalStyle />
    </>
  );
}

export default App;
