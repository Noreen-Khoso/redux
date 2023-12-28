import React, { createContext, useContext } from 'react'
import Mycontext from '../Context/MyContext'


const Profile = () => {
    const{user} = useContext(Mycontext);
  return (
    <>
    <div className=' flex flex-col items-center  justify-center px-10 py-3 bg-orange-400'>
        <h1 className=' text-4xl font-bold'>Profile </h1>
        <h1 className='text-2xl'>{user}</h1>
         
        </div></>

  )
}

export default Profile
