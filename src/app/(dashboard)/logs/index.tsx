'use client'

import Pagination from '@/components/Pagination/Pagination'
import useSWRAxios, { transformResponseWrapper } from '@/hooks/useSWRAxios'
import { Logs } from '@/models/log'
import { Resource, newResource } from '@/models/resource'
import { Card } from 'react-bootstrap'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { checkToken } from '@/app/service/help'
import LogList from '@/components/Log/LogList'
export type Props = {
  props: {
    pokemonResource: Resource<Logs>;
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
  const pokemonListURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}pokemon` || ''

  // swr: data -> axios: data -> resource: data
  const { data: { data: resource } } = useSWRAxios<Resource<Logs>>({
    url: pokemonListURL,
    params: {
      _page: page,
      _limit: perPage,
      _sort: sort,
      _order: order,
    },
    transformResponse: transformResponseWrapper((d: Logs[], h) => {
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


        <LogList logs={resource.data} />


        <Pagination meta={resource.meta} />


      </Card.Body>
    </Card>
  )
}
