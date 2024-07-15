import React, { useState } from "react";

function favoriteBtn(id) {
  const [favorites, setFavorites] = useState([]);
  if (favorites.includes(id)) {
    setFavorites(favorites.filter((fav) => fav !== id));
  } else {
    setFavorites([...favorites, id]);

    return (
      <button
        onClick={() => handleFavorite(user.id)}
        isFavorite={favorites.includes(user.id)}
      >
        {favorites.includes(user.id) ? "♡" : "♥"}
      </button>
    );
  }
}
export default favoriteBtn;
