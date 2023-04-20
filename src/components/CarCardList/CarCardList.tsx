import { List, Stack } from "@mui/material";
import { ModelsBrands } from "../../types/Car";
import CarCard from "../CarCard/CarCard";

interface CarCardListProps {
  cars: ModelsBrands;
}

const CarCardList = ({ cars }: CarCardListProps): JSX.Element => {
  return (
    <List>
      <Stack direction={"row"} flexWrap={"wrap"} columnGap={2} rowGap={2}>
        {cars.map((brand) =>
          brand.models.map((model) => (
            <li>
              <CarCard
                brand={brand.brand}
                model={model}
                key={`${brand.brand}_${model.model}`}
              />
            </li>
          ))
        )}
      </Stack>
    </List>
  );
};

export default CarCardList;
