import { render, screen } from "@testing-library/react";
import CarCard from "./CarCard";
import carsOfBrands from "../../data/carsOfBrands";

describe("Give a Car Card component", () => {
  describe("When it's rendered", () => {
    test("Then should show a car model, image, brand", () => {
      const expectCar = {
        altImage: `car ${carsOfBrands[0].brand} ${carsOfBrands[0].models[0].model}`,
        model: carsOfBrands[0].models[0].model,
        brand: carsOfBrands[0].brand,
      };

      render(
        <CarCard
          model={carsOfBrands[0].models[0]}
          brand={carsOfBrands[0].brand}
        />
      );
      const showCar = {
        model: screen.getByRole("heading", { name: expectCar.model, level: 2 }),
        image: screen.getByRole("img", { name: expectCar.altImage }),
        brand: screen.getByRole("heading", { name: expectCar.brand, level: 3 }),
      };

      Object.values(showCar).forEach((expectIn) =>
        expect(expectIn).toBeInTheDocument()
      );
    });
  });
});
