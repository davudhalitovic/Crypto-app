import React, { useContext } from "react";
import { FavoriteContext } from "./FavoriteContextProvider";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FavoriteButton = ({ itemId }) => {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);

  const isFavorite = favorites.includes(itemId);

  return (
    <IconButton onClick={() => toggleFavorite(itemId)}>
      {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default FavoriteButton;
