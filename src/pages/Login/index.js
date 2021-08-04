import React from 'react'

import { Container } from '../../styles/GlobalStyles'
import { Title } from './styled'

export default function Login() {
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
