import React from 'react'
import Input from '../../components/Forms/Input/Input'
import { Button } from '../Login/styles'
import { FormStyles, Titulo } from './styles'

const Cadastrar = () => {

  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [dataNascimento, setDataNascimento] = React.useState('')


  return (
    <FormStyles>
      <Titulo>Cadastro</Titulo>
      <Input name="nome" type="text" label="Nome" value={nome} onChange={({target}) => setNome(target.value)}/>
      <Input name="email" type="text" label="Email" value={email} onChange={({target}) => setEmail(target.value)}/>
      <Input name="password" type="password" label="Senha" value={password} onChange={({target}) => setPassword(target.value)}/>
      <Input name="dataNascimento" type="date" label="Data de Nascimento" value={dataNascimento} onChange={({target}) => setDataNascimento(target.value)}/>
      <Button>Cadastrar</Button>
    </FormStyles>
  )
}

export default Cadastrar