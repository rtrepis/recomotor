import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ToggleButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Brand, Model } from "../../types/Car";

interface CarsCardProps {
  brand: Brand;
  model: Model;
}

const CarCard = ({
  brand,
  model: { image, model },
}: CarsCardProps): JSX.Element => {
  const initialFavorite = false;
  const [favorite, setFavorite] = useState(initialFavorite);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={`car ${brand} ${model}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {model}
        </Typography>
        <Typography variant="body1" component="h3" color="text.secondary">
          {brand}
        </Typography>
      </CardContent>
      <CardActions>
        <ToggleButton
          value={"favorite"}
          size="small"
          selected={favorite}
          color={"primary"}
          onClick={() => setFavorite(!favorite)}
        >
          Favorite
        </ToggleButton>
      </CardActions>
    </Card>
  );
};

export default CarCard;
