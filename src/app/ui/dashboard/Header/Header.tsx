import Link from 'next/link'
import { Container } from 'react-bootstrap'

import HeaderProfileNav from '@/app/ui/dashboard/Header/HeaderProfileNav'

export default function Header() {
  return (
    <header className="header sticky-top mb-4 py-2 px-sm-2 border-bottom">
      <Container fluid className="header-navbar d-flex align-items-center">
        
        <Link href="/" className="header-brand d-md-none">
          <svg width="80" height="46">
           
            <use xlinkHref="/assets/brand/coreui.svg#full" />
          </svg>
        </Link>
       
    
        <div className="header-nav ms-auto">
          <HeaderProfileNav />
        </div>
      </Container>
    
  
    </header>
  )
}
