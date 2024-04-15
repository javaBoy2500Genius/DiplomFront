import Link from 'next/link'
import { Container } from 'react-bootstrap'
import { IHeaderProfileNavProps } from '@/app/ui/dashboard/Header/HeaderProfileNav'
import HeaderProfileNav from '@/app/ui/dashboard/Header/HeaderProfileNav'

export default function Header({ fileUploadClick }: IHeaderProfileNavProps) {
  return (
    <header className="header sticky-top mb-4 py-2 px-sm-2 border-bottom">
      <Container fluid className="header-navbar d-flex align-items-center">
        <div className="header-nav ms-auto">
          <HeaderProfileNav fileUploadClick={fileUploadClick} />
        </div>
      </Container>
    
  
    </header>
  )
}
