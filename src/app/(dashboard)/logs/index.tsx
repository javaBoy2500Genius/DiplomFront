'use client'

import Pagination from '@/components/Pagination/Pagination'
import useSWRAxios, { transformResponseWrapper } from '@/hooks/useSWRAxios'
import { Logs, Res } from '@/models/log'
import { Resource, newResource } from '@/models/resource'
import { Card } from 'react-bootstrap'

import { getToken } from '@/app/service/help'
import Constants from '@/models/constant/constant'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { checkToken } from '@/app/service/help'
import LogList from '@/components/Log/LogList'
export type Props = {
  props: {
    logResource: Resource<Res>;
    page: number;
    perPage: number;
    sort: string;
    order: string;
  };
}

export default function Index(props: Props) {
  const {
    props: {
      logResource: logResource,
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
  const logListUrl = `${Constants.API_URL}${Constants.API_LOGS}` || ''

  // swr: data -> axios: data -> resource: data
  const { data: { data: resource } } = useSWRAxios<Resource<Res>>({
    url: logListUrl,
    params: {
     
      "$sort": `${sort} ${order}`,
      "$skip": (page - 1) * perPage,
      "$take": perPage,
      // _limit: perPage,
      // _sort: sort,
      // _order: order,
    }, headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Content-Type': 'application/json',
      'Authorization': `${Constants.TOKEN_SHM} ${getToken()}`,
    },
    transformResponse: transformResponseWrapper((d: Logs[], h) => {
      const total = h ? parseInt(h['x-total-count'], 10) : 0
      return newResource(d, total, page, perPage)
    }),
  }, {
    data: logResource,
    headers: {
      'x-total-count': (logResource.data as any).count,
 
    },


  })
  
  console.log("start")
  console.log(resource.meta)
  console.log(logResource.meta.total.toString( ))
console.log("start 123")
  console.log((resource.data));

  return (
    <Card>
      <Card.Header className="text-center">Логирование</Card.Header>
      <Card.Body>

        <Pagination meta={resource.meta} />


        <LogList logs={(resource.data as any).result} />


        {/* <Pagination meta={resource.meta} /> */}


      </Card.Body>
    </Card>
  )
}






  
