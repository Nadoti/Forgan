import React from 'react'
import Input from '../../components/Forms/Input/Input'
import { FormStyles, Titulo, Button } from './styles'

const Login = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  async function handleLogin(event) {
    event.preventDefault()
    const teste = await fetch("http://localhost:3334/sessions", {
      options: {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: {
          email, password
        }
      }
    })
    console.log(teste)

  }



  return (
    <FormStyles onSubmit={handleLogin}>
      <Titulo>Login</Titulo>
      <Input name="email" type="text" label="Email" onChange={({target}) => setEmail(target.value)} value={email}/>
      <Input name="password" type="password" label="Senha" onChange={({target}) => setPassword(target.value)} value={password} />
      <Button>Entrar</Button>
    </FormStyles>
  )
}

export default Login