import THSort from '@/components/TableSort/THSort'
import { Logs } from '@/models/log'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table,
} from 'react-bootstrap'


type Props = {
  logs?: Logs[];
} & Pick<Parameters<typeof THSort>[0], 'setSort' | 'setOrder'>

export default function LogList(props: Props) {
  const { logs: logs, setSort, setOrder } = props
  if (!logs) {
    return null; // or <div>Loading...</div> or any other loading indicator
  }
  return (
    <Table responsive bordered hover>
      <thead className="bg-light">

        <tr>


          <th><THSort name="RequestCount" setSort={setSort} setOrder={setOrder}>Количество запросов</THSort></th>


          <th className="text-end"><THSort name="Ip" setSort={setSort} setOrder={setOrder}>Ip</THSort></th>
          <th className="text-end"><THSort name="CreatedAt" setSort={setSort} setOrder={setOrder}>Дата создания</THSort></th>
          <th className="text-end"><THSort name="DdosProbability" setSort={setSort} setOrder={setOrder}>Подозрение на DDOS</THSort></th>

          <th aria-label="Action" />
        </tr>
      </thead>
      <tbody>
        {logs?.map((log) => (
          <tr key={log.id}>


            <td>{log.request_count}</td>


            <td className="text-end">{log.ip}</td>
            <td className="text-end">{log.createdAtString}</td>
            <td className="text-end">{new Intl.NumberFormat('en-us', { minimumFractionDigits: 2 }).format(log.ddos_probability * 100) }%</td>

            {/* <td>
              <Dropdown align="end">
                <DropdownToggle
                  as="button"
                  bsPrefix="btn"
                  className="btn-link rounded-0 text-black-50 shadow-none p-0"
                  id={`action-${log.id}`}
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
            </td> */}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
