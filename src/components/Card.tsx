import { Imetas } from "../hooks/types";
import { useFavoriteMetasStore } from "../store/favoriteMetas";

type CardProps = {
  repository: Imetas;
  isFavorite: boolean;
};

function Card({ repository, isFavorite }: CardProps) {
  const addFavoriteMetas = useFavoriteMetasStore(
    (state) => state.addFavoriteMetas
  );
  const removeFavoriteMetas = useFavoriteMetasStore(
    (state) => state.removeFavoriteMetas
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteMetas(repository.id);
      return;
    }
    addFavoriteMetas(repository.id);
  };

  return (
    <div>
      <h1>{repository.id}</h1>
      <h1>{repository.detalles}</h1>
      <button onClick={toggleFavorite}>
        {isFavorite ? "DISLIKE" : "LIKE"}
      </button>
    </div>
  );
}

export default Card;
