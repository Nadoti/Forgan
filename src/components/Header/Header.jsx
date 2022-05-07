import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderStyles, Nav, Content } from './styles'

const Header = () => {
  return (
    <HeaderStyles>
      <Content>
        <Link to='/' className='logo'>Blog</Link>
        <Nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="topicos">Tópicos</Link></li>
            <Link to="login" className='btn_login'>Sign In</Link>
          </ul>
        </Nav>
      </Content>
    </HeaderStyles>
  )
}

export default Header