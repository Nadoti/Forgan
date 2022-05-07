import React from "react"
import { LOGAR_POST } from "./api"

export const UserContext = React.createContext()

export const UserStorage = () => {



  async function userLogin(email, password) {
    try {
      const [url, options] = LOGAR_POST({email, password})
      
    } catch(err) {

    }
  }

  return (
    <UserContext.Provideer>
      {children}
    </UserContext.Provideer>
  )
}

export default UserContext