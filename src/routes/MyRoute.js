import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

export default function MyRoute({ component: Component, isClosed, ...rest }) {

  const isLoggedIn = false

  if(isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    )
  }

  return <Route {...rest} component={Component} />
}

// prevPath serve para guardar qual o caminho antigo que o usuário estava pois ai quando
// ele fizer o login eu redireciono ele para o caminho que ele estava tentando acessar.

MyRoute.defaultProps = {
  isClosed: false, // Se eu não enviar o isClosed o padrão é false
 }

MyRoute.propTypes = {

  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,

  isClosed: PropTypes.bool,

}
