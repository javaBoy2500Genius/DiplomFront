'use client'

import { Button, Card } from 'react-bootstrap'
import React from 'react'
import { newResource, Resource } from '@/models/resource'
import { Pokemon } from '@/models/pokemon'
import useSWRAxios, { transformResponseWrapper } from '@/hooks/useSWRAxios'
import Pagination from '@/components/Pagination/Pagination'

import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import PokemonList from '@/components/Pokemon/PokemonList'
import { useEffect } from 'react';

import { checkToken } from '@/app/service/help'
export type Props = {
  props: {
    pokemonResource: Resource<Pokemon>;
    page: number;
    perPage: number;
    sort: string;
    order: string;
  };
}

export default function Index(props: Props) {
  const {
    props: {
      pokemonResource,
      page,
      perPage,
      sort,
      order,
    },
  } = props

  const router = useRouter()
  useEffect(() => {
    if (!checkToken()) {
      router.push('/login')
    }

  }, []); 
  const pokemonListURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}pokemons` || ''

  // swr: data -> axios: data -> resource: data
  const { data: { data: resource } } = useSWRAxios<Resource<Pokemon>>({
    url: pokemonListURL,
    params: {
      _page: page,
      _limit: perPage,
      _sort: sort,
      _order: order,
    },
    transformResponse: transformResponseWrapper((d: Pokemon[], h) => {
      const total = h ? parseInt(h['x-total-count'], 10) : 0
      return newResource(d, total, page, perPage)
    }),
  }, {
    data: pokemonResource,
    headers: {
      'x-total-count': pokemonResource.meta.total.toString(),
    },
  })

  return (
    <Card>
      <Card.Header className="text-center">Логирование</Card.Header>
      <Card.Body>
      
        <Pagination meta={resource.meta} />


        <PokemonList pokemons={resource.data} />
        
        
        <Pagination meta={resource.meta} />
      
      
      </Card.Body>
    </Card>
  )
}
