import React from "react";
import { Container } from "@mui/material";
import carsOfBrands from "./data/carsOfBrands";
import CarCardList from "./components/CarCardList/CarCardList";

const App = () => {
  return (
    <Container>
      <CarCardList cars={carsOfBrands} />
    </Container>
  );
};

export default App;
