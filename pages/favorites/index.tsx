import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { FavoritesPokemons } from "../../components/pokemon";
import { localFavorites } from "../../utils";


export const Favorites = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {

    setFavoritesPokemons(localFavorites.pokemons())

  }, [])


  return (
    <Layout title="Favorites - Pokemons">

      {
        favoritesPokemons.length === 0
          ? (<NoFavorites />)
          : (<FavoritesPokemons pokemons={ favoritesPokemons }/>)
      }

    </Layout>
  )
}

export default Favorites;
