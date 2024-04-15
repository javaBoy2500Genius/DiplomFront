'use client'

import {
  Alert, Button, Form, FormControl, InputGroup,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { SyntheticEvent, useState } from 'react'
import { deleteCookie, getCookie } from 'cookies-next'
import axios from 'axios'
import InputGroupText from 'react-bootstrap/InputGroupText'
import Constants  from '@/models/constant/constant'
import { serializeCookie } from '@/lib/cookie'
export default function Register() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const getRedirect = () => {
    const redirect = getCookie('redirect')
    if (redirect) {
      deleteCookie('redirect')
      return redirect.toString()
    }

    return '/'
  }

  const register = async (e: SyntheticEvent) => {
    try {
      e.stopPropagation()
      e.preventDefault()

      setSubmitting(true)

      const formData = new FormData(e.target as HTMLFormElement)
      const username = formData.get('username')
      const passwd = formData.get('password')
      const password_repeat = formData.get('password_repeat')

      if (!username || !passwd || !password_repeat) {
        setError('Заполните все поля')
        return
      }

      if(password_repeat!=passwd){
        setError("Пароли не совпадают")
        return
      }
    
      
      await axios.post(`${Constants.API_URL}${Constants.API_REGISTER}`,
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
        console.log(res.data)
      }).catch(err => {
        console.log(err)
        setError("Ошибка, попробуйте позже")
      })

    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Alert variant="danger" show={error !== ''} onClose={() => setError('')} dismissible>{error}</Alert>
      <Form onSubmit={register}>
       

        <InputGroup className="mb-3">
          <InputGroupText>
            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
          </InputGroupText>
          <FormControl
            type="email"
            name="username"
            required
            disabled={submitting}
            placeholder="Email"
            aria-label="Email"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroupText><FontAwesomeIcon icon={faLock} fixedWidth /></InputGroupText>
          <FormControl
            type="password"
            name="password"
            required
            disabled={submitting}
            placeholder="Пароль"
            aria-label="Password"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroupText><FontAwesomeIcon icon={faLock} fixedWidth /></InputGroupText>
          <FormControl
            type="password"
            name="password_repeat"
            required
            disabled={submitting}
            placeholder="Повторите пароль"
            aria-label="Repeat password"
          />
        </InputGroup>

        <Button type="submit" className="d-block w-100" disabled={submitting} variant="success">
         Зарегистрироваться
        </Button>
      </Form>
    </>
  )
}
