import Index, { Props } from '@/app/(dashboard)/logs/index'
import { Logs } from '@/models/log'
import { newResource, Resource } from '@/models/resource'
import { SearchParams } from '@/types/next'

const fetchPokemons = async (searchParams: SearchParams): Promise<Props['props']> => {
  const logListURL = `${process.env.NEXT_PUBLIC_POKEMON_LIST_API_BASE_URL}pokemons` || ''
  let page = 1
  if (searchParams?.page) {
    page = parseInt(searchParams.page.toString(), 10)
  }

  let perPage = 20
  if (searchParams?.per_page) {
    perPage = parseInt(searchParams.per_page.toString(), 10)
  }

  let sort = 'id'
  if (searchParams?.sort) {
    sort = searchParams.sort.toString()
  }

  let order = 'asc'
  if (searchParams?.order && typeof searchParams.order === 'string') {
    order = searchParams.order
  }

  const url = new URL(logListURL)
  url.searchParams.set('_page', page.toString())
  url.searchParams.set('_limit', perPage.toString())
  url.searchParams.set('_sort', sort)
  url.searchParams.set('_order', order)

  const res = await fetch(url, {
    method: 'GET',
  })
  const pokemon: Logs[] = await res.json()

  const total = parseInt(res.headers.get('x-total-count') ?? '0', 10)
  const pokemonResource: Resource<Logs> = newResource(pokemon, total, page, perPage)

  return {
    pokemonResource,
    page,
    perPage,
    sort,
    order,
  }
}

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const props = await fetchPokemons(searchParams)

  return (
    <Index props={props} />
  )
}
