import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Pokemon } from '@/models/pokemon'
import THSort from '@/components/TableSort/THSort'


type Props = {
  pokemons?: Pokemon[];
} & Pick<Parameters<typeof THSort>[0], 'setSort' | 'setOrder'>

export default function PokemonList(props: Props) {
  const { pokemons, setSort, setOrder } = props
  if (!pokemons) {
    return null; // or <div>Loading...</div> or any other loading indicator
  }
  return (
    <Table responsive bordered hover>
      <thead className="bg-light">

        <tr>
          
       
          <th><THSort name="name" setSort={setSort} setOrder={setOrder}>Имя пользователя</THSort></th>
        
          
          <th className="text-end"><THSort name="hp" setSort={setSort} setOrder={setOrder}>Ip пользователя</THSort></th>
          <th className="text-end"><THSort name="attack" setSort={setSort} setOrder={setOrder}>Дата создания</THSort></th>
          <th className="text-end"><THSort name="defense" setSort={setSort} setOrder={setOrder}>Подозрение на DDOS</THSort></th>

          <th aria-label="Action" />
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon) => (
          <tr key={pokemon.id}>
            
          
            <td>{pokemon.name}</td>
           
           
            <td className="text-end">{pokemon.hp}</td>
            <td className="text-end">{pokemon.attack}</td>
            <td className="text-end">{pokemon.defense}%</td>

            <td>
              <Dropdown align="end">
                <DropdownToggle
                  as="button"
                  bsPrefix="btn"
                  className="btn-link rounded-0 text-black-50 shadow-none p-0"
                  id={`action-${pokemon.id}`}
                >
                  <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                </DropdownToggle>

                <DropdownMenu>
                 
                  <DropdownItem
                    className="text-danger"
                    href="#/action-3"
                  >
                    Удалить
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
