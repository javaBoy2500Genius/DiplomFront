import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import LoginForm from '@/app/(authentication)/login/login'

export default function Page() {
  return (
    <Row className="justify-content-center align-items-center px-3">
      <Col lg={8}>
        <Row>
          <Col md={7} className="bg-white border p-5">
            <div>
              <h1>Войти</h1>
              <p className="text-black-50">Войти в ваш аккаунт</p>

              <LoginForm />
            </div>
          </Col>
          <Col
            md={5}
            className="bg-primary text-white d-flex align-items-center justify-content-center p-5"
          >
            <div className="text-center">
              <h2>Зарегистрироваться </h2>
              <p>
                Зарегистрируйтесь, чтобы войти в свой аккаунт. 
                После регистрации вы сможете  пользоваться нашим севисом!
              </p>
              <Link className="btn btn-lg btn-outline-light mt-3" href="/register">
                Зарегистрироваться
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
