'use client'

import {
  Alert, Button, Col, Form, FormControl, InputGroup, Row,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'
import { deleteCookie, getCookie } from 'cookies-next'
import axios from 'axios'
import Link from 'next/link'
import InputGroupText from 'react-bootstrap/InputGroupText'
import Constants from '@/models/constant/constant'

export default function Login() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')



  interface ILoginResponse {
    
    accessToken: string
   // RefreshToken: string
  }
  const login = async (e: SyntheticEvent) => {
    
    try {
    e.stopPropagation()
    e.preventDefault()

    setSubmitting(true)
    
    const formData= new FormData(e.target as HTMLFormElement)
    const username=formData.get('username')
    const passwd = formData.get('password')

    if(!username || !passwd){
      setError('Заполните все поля')
      return
    }
      
      await axios.post<ILoginResponse>(`${Constants.API_URL}${Constants.API_LOGIN}`,
        {
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
          },

          "login": username,
          "password": passwd

        }
      ).then(res => {
        if (!res.data.accessToken) {
          throw 'Empty access token'
        }
        localStorage.setItem(Constants.TOKEN_KEY, res.data.accessToken);
        router.push('/')
      }).catch(err => {
        console.error(err)
        setError("Неверное имя пользователя или пароль")
      })
     
    }finally
    {
    setSubmitting(false)
  }
   
  }

  return (
    <>
      <Alert
        variant="danger"
        show={error !== ''}
        onClose={() => setError('')}
        dismissible
      >
        {error}
      </Alert>
      <Form onSubmit={login}>
        <InputGroup className="mb-3">
          <InputGroupText>
            <FontAwesomeIcon
              icon={faUser}
              fixedWidth
            />
          </InputGroupText>
          <FormControl
            name="username"
            required
            disabled={submitting}
            placeholder="Email"
            aria-label="Email"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroupText>
            <FontAwesomeIcon
              icon={faLock}
              fixedWidth
            />
          </InputGroupText>
          <FormControl
            type="password"
            name="password"
            required
            disabled={submitting}
            placeholder="Password"
            aria-label="Password"
          />
        </InputGroup>

        <Row className="align-items-center">
          <Col xs={6}>
            <Button
              className="px-4"
              variant="primary"
              type="submit"
              disabled={submitting}
            >
              Войти
            </Button>
          </Col>
          <Col xs={6} className="text-end">
            <Link className="px-0" href="#">
              Забыли
              пароль?
            </Link>
          </Col>
        </Row>
      </Form>
    </>
  )
}
