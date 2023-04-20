import { render, screen } from "@testing-library/react";
import CarCardList from "./CarCardList";
import carsOfBrands from "../../data/carsOfBrands";

describe("Give a component cardCardList", () => {
  describe("When a rendered with 'cardOfBrands' list", () => {
    test("Then should show many image with cars in list", () => {
      const expectCardLength = 9;

      render(<CarCardList cars={carsOfBrands} />);
      const images = screen.getAllByRole("img");

      expect(images).toHaveLength(expectCardLength);
    });
  });
});
