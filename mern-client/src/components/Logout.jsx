import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {Logout} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    const handleLogout=()=>{
        Logout().then(() => {
            alert('Sign-out succencsully')
            navigate(from, { replace: true });
        }).catch((error)=>{

        })
    }


  return (
    <div className='h-screen bg-teal-600 flex items-center justify-center'>
        <button className='bg-red-600 px-8 py-2 text-white rounded ' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout