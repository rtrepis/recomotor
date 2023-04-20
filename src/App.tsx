import React from "react";
import CarCard from "./components/CarCard/CarCard";
import { Container } from "@mui/material";
import carsOfBrands from "./data/carsOfBrands";

const App = () => {
  return (
    <Container>
      <CarCard
        brand={carsOfBrands[0].brand}
        model={carsOfBrands[0].models[0]}
      />
    </Container>
  );
};

export default App;
