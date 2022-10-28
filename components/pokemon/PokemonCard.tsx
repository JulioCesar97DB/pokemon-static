import { Grid, Card, Row, Text } from '@nextui-org/react';
import { NextPage } from 'next';

import React from 'react'
import { SmallPokemon } from '../../interfaces/pokemon-list';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: NextPage<Props> = ({ pokemon }) => {

  const router = useRouter();

  const onPress = () => {
    router.push(`/name/${ pokemon.name }`)
  }

  return (
    <Grid xs={4} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card isHoverable isPressable onPress={ onPress }>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={pokemon.img}
            width='100%'
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize'>{pokemon.name}</Text>
            <Text>{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>

    </Grid>
  )
}
