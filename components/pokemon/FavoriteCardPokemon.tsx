import { Grid, Card } from '@nextui-org/react'
import NextLink from 'next/link';

interface Props {
    pokemonId: number;
}

export const FavoriteCardPokemon: React.FC<Props> = ({ pokemonId }) => {

    return (
        <NextLink href={`/pokemon/${pokemonId}`}>
            <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}>
                <Card isHoverable isPressable css={{ padding: 10 }}>
                    <Card.Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                        width={'100%'}
                        height={140}
                    />
                </Card>
            </Grid>
        </NextLink>
    )
}
