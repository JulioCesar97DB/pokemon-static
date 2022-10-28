import { Grid, Card } from '@nextui-org/react'
import React from 'react'
import { FavoriteCardPokemon } from './'

interface Props {
    pokemons: number[]
}

export const FavoritesPokemons: React.FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction='row' justify="flex-start">
            {
                pokemons.map( id => (
                    <FavoriteCardPokemon key={ id } pokemonId={ id } />
                ))
            }
        </Grid.Container>
    )
}