import React from 'react'

import { Container } from '../../styles/GlobalStyles'
import { Title } from './styled'

import axios from '../../services/axios'

export default function Login() {

  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos')
      console.log(response)
    }

    getData()
  }, [])

  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Hello world</small>
      </Title>
      <p>Lorem ipsum</p>
      <button type="button">Enviar</button>
    </Container>
  )
}
