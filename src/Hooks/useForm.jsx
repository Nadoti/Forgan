import React from 'react'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido'
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')

  function validate(value) {
    if(!type) return true
    if(value.length) {
      setError('Preencha um valor')
      return false
    } else if()
  }

  function onChange({ target }) {
    setValue(target.value)
  }

  return {
    value, setValue, onChange
  }
}

export default useForm