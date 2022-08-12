import * as React from 'react'
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'

import Router from 'next/router'

type User = {
  name: string;
  email: string;
  avatar_url: string;
}

type SignInData = {
  email: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const [isAuthenticated, setIsAuthenticated] = useState(Boolean)


  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    
    const token = `${email}${password}`

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })
    
    if (email === '2@2' && password == '123'){
        setIsAuthenticated(true)
        Router.push('/');
    }else{alert('Email ou senha incorreta')}
    
  }

 

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>  
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

