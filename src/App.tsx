import "./App.css";
import Card from "./components/Card";
import { Imetas } from "./hooks/types";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteMetasStore } from "./store/favoriteMetas";

function App() {
  const { data, isLoading } = useFetchRepositories();
  const { favoriteMetasIds } = useFavoriteMetasStore();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        {data?.map((meta) => (
          <Card
            key={meta.id}
            repository={meta}
            isFavorite={favoriteMetasIds.includes(meta.id)}
          />
        ))}
      </div>
      <div>
        <h1>LISTA DE METAS QUE ME GUSTAN</h1>
      </div>
      <div>
        {data?.map((metaFavorita) =>
          favoriteMetasIds.includes(metaFavorita.id) ? (
            <Card
              key={metaFavorita.id}
              repository={metaFavorita}
              isFavorite={favoriteMetasIds.includes(metaFavorita.id)}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;
