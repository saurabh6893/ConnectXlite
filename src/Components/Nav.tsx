import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../FireabaseConfig/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiLogOutCircle } from "react-icons/bi"
import { signOut } from 'firebase/auth'
const Nav = () => {

  const LogOut = async () => {
    await signOut(auth)
  }
  const [user] = useAuthState(auth)
  return (
    <div className="nav">
      <div>
        <h1>
          <Link className="hl" to='/' >Home</Link>
        </h1>
        <h1>
          <Link className="hl" to='/Login' >Login</Link>
        </h1>
      </div>
      <div className="usx">
        {user && (
          <>
            <div>
              <h3 className='name'>{user?.displayName}</h3>
              <button className='lg' onClick={LogOut}>
                <BiLogOutCircle size={20} />
              </button>
            </div>
            <div>
              <img src={user?.photoURL || ''} className='picture' alt="" />
            </div>
          </>
        )
        }
      </div>
    </div>
  )
}

export default Nav