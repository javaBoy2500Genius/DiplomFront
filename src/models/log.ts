

export interface Logs {
  id: number
  ip: string
  created_at: string
  ddos_probability: number
  intent_status: number,
  request_count: number,
  createdAtString: string,

}

export interface Res {
  count: number,
  result: UserLogs[]
}
export interface UserLogsWeek{
  day:string,
  ip:string,
  reqestCount:number
}

export interface UserLogs {
  ip: string,
  created_at: Date,
  createdAtString: string,
  ddos_probability: 0,
  request_count: 0
}




