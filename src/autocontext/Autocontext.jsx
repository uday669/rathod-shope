import React, { createContext, useContext, useState } from 'react'

const Usercontext = createContext();

export function Autocontext({children}) {


    const [userLogin ,setLogin ] = useState(null)
  return (
    <div>
      <Usercontext.Provider value={{ setLogin , userLogin}}>
         {children}
      </Usercontext.Provider>
    </div>
  )
}


export function useAuth() {
  return useContext(Usercontext)
}
