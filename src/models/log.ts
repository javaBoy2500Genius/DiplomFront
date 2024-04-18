

export interface Logs {
  id: number
  ip: string
  created_at: string
  ddos_probability: number
  intent_status: number,
  request_count:number,
  createdAtString:string,

}

export interface Res{
  count:number,
  result:Logs[]
}




