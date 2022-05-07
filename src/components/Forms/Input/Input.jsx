import React from 'react'
import { InputStyles, LabelStyles, Container } from './styles'

const Input = ({name, type, label, setEmail, onChange, value }) => {
  return (
    <Container>
      <LabelStyles htmlFor={name}> {label} </LabelStyles>
      <InputStyles
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Container>
  )
}

export default Input