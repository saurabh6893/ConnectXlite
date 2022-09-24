import React from 'react'
import { auth, provider } from '../FireabaseConfig/Firebase'
import { signInWithPopup } from 'firebase/auth'
const Login = () => {
  const signin = async () => {
    const result = await signInWithPopup(auth, provider)
  }
  return (
    <div className="login">
      <div>Login</div>
      <button onClick={signin}>Sign in</button>
    </div>
  )
}

export default Login