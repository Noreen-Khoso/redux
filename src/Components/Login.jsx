import React, { useState, useContext, createContext } from 'react'
import Mycontext from '../Context/MyContext'


export const Login = () => {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")



    const { setuser } = useContext(Mycontext)
    const handleSubmit = (e) => {
        setuser(Username, Password)



    }
    return (
        <div className=' flex flex-col justify-center items-center bg-yellow-200 px-10 py-5'>
            <h1 className=' font-serif text-3xl pb-5'>
                Login
            </h1>
            <input type='text'
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username' className=' px-10 py-3 text-black' />
            <br />
            <input type='password'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Passwrod' className='px-10 py-3 text-black' />
            <br />
            <button onClick={handleSubmit} className=' px-10 py-2 bg-orange-400 text-black  rounded-2xl border-2 hover:bg-transparent hover:text-orange-600'>Submit</button>


        </div>
    )
}
