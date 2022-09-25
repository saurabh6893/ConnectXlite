import React from 'react'
import { auth, provider } from '../FireabaseConfig/Firebase'
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth'
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const navigate = useNavigate()

  const signin = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result)
    navigate('/')
  }

  return (
    <div className="login">
      <button onClick={signin} className="btx">
        <FcGoogle size={30} />
      </button>
    </div>
  )
}

export default Login