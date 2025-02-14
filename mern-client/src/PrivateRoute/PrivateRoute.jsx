import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import { Spinner } from "flowbite-react";
const PrivateRoute = ({childern}) => {
    const {user , loading}= useContext(AuthContext)
    const loaction = useLocation()
    if(loading){
        return (
        <div className="text-left">
        <Spinner aria-label="Left-aligned spinner example" />
      </div>
    )}
    if(user){
        return childern;
    
    }
  return (
    <Navigate to='/login' state={{from:location}} replace></Navigate>
  )
}

export default PrivateRoute