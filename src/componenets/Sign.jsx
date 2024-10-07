import React from 'react'
import { useNavigate ,Link } from 'react-router-dom'
import { useState  } from 'react'
// icons
import { FaXTwitter } from "react-icons/fa6";

function Sign() {

    const url = 'https://66e7e6a5b17821a9d9da6f39.mockapi.io/login'

    const navigate = useNavigate()

    const [user , setUser] = useState({
        name : '',
        email : '', 
        pass : ''
    })

    const emailValidate = (email) => {
        const pattren = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(!pattren.test(email)){
            alert("Should be valid email")
            return false 
        } return true 
    }

    const nameValidate = (name) => {
        if (name < 5){
            alert("should be more than 5")
            return false ; 
        } return true;
    }

    const passValidate = (pass) => {
        if (pass < 8){
            alert("should be more than 8")
            return false; 
        } return true ;
    }

    const PostUser = () => {

        if (!user.name || !user.email || !user.pass) {
            alert ("information are required")
            return ;
        }

        if(!nameValidate(user.name)||!emailValidate(user.email) || !passValidate(user.pass) ){
            return;
        }

        fetch(`${url}`, {
            method: 'POST',
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              pass: user.pass,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => {
             setUser(json)
             navigate(`/profile/${json.id}`)      
     } );
    }



  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#242D35] text-white'>
        <div className='border-2 p-5 lg:w-[50%] md:w-[70%] rounded-xl text-center flex flex-col items-center bg-black'>
            <FaXTwitter className='text-6xl'/>
            <p className='text-3xl mb-3'>Create Your Account</p>
            <input type="text" className=' bg-transparent border-2 rounded p-3 w-full ' placeholder='Name...'
            value={user.name} onChange={(e)=> {setUser({...user , name: e.target.value })}}/>
            <p className='text-gray-400 text-sm  mb-3'>Should be more that 5 characters</p>
            <input type="text" className=' bg-transparent border-2 rounded p-3 w-full mb-3 ' placeholder='Email...'
            value={user.email} onChange={(e)=> {setUser({...user , email: e.target.value })}}/>

            <input type="password" className=' bg-transparent border-2 rounded p-3 w-full ' placeholder='Password...'
            value={user.pass} onChange={(e)=> {setUser({...user , pass: e.target.value })}}/>
            <p className='text-gray-400 text-sm  mb-3'>Should be more that 8 characters</p>

            <button className='bg-slate-400 w-full rounded-xl mb-3' onClick={PostUser} >SignIn</button>
            <Link to="/login" className='hover:border-b-2'> Already Have Account? login.</Link>
        </div>
    </div>
  )
}

export default Sign