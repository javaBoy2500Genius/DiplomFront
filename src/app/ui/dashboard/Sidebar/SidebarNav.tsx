import {
  faAddressCard, faBell, faFileLines, faStar,
} from '@fortawesome/free-regular-svg-icons'
import {
  faBug,
  faCalculator,
  faChartPie,
  faCode,
  faDroplet,
  faGauge,
  faLayerGroup,
  faLocationArrow,
  faPencil,
  faPuzzlePiece,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons'
import React, { PropsWithChildren } from 'react'
import { Badge } from 'react-bootstrap'
import SidebarNavGroup from '@/app/ui/dashboard/Sidebar/SidebarNavGroup'
import SidebarNavItem from '@/app/ui/dashboard/Sidebar/SidebarNavItem'

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
  )
}

export default function SidebarNav() {
  return (
    <ul className="list-unstyled">
      <SidebarNavItem icon={faGauge} href="/">
        Панель управление
        <small className="ms-auto"></small>
      </SidebarNavItem>
      <SidebarNavItem icon={faCode} href="/logs">
        Панель
        <small className="ms-auto"></small>
      </SidebarNavItem>
      
    </ul>
  )
}
