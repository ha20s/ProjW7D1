import React from 'react'
import { Link  , useNavigate , useParams} from 'react-router-dom'
import { useState  , useEffect} from 'react'
import { FaXTwitter } from "react-icons/fa6";



function Login() {
     const url = 'https://66e7e6a5b17821a9d9da6f39.mockapi.io/login'
     const {id} = useParams()

     const navigate = useNavigate()

    const [info , setInfo] = useState({
        email: '',
        pass :'', 
    })

    const [all , setAll] = useState([])



  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then(data => setAll(data))
  } , [])

 

  const chechUser = () => {

    if (!info.email || !info.pass){
        alert("Info are required!!")
        return;
    }

    const user = all.find(item => item.email === info.email && item.pass === info.pass)
    if (user){
        navigate(`/profile/${user.id}`)
    } else {
        alert("check the email or password")
    }
  
  }



  return (
    <div>    
    <div className='w-full h-screen flex items-center justify-center bg-[#242D35] text-white'>
    <div className='border-2 p-5 lg:w-[50%] md:w-[70%] rounded-xl text-center flex flex-col items-center bg-black'>
    <FaXTwitter className='text-6xl'/>
    <p className='text-3xl mb-3'>Welcome back!</p>
        <input type="text" className=' bg-transparent border-2 rounded p-3 w-full my-3 ' placeholder='Email...'
        value={info.email} onChange={(e)=> {setInfo({...info , email: e.target.value })}}
        />

        <input type="password" className=' bg-transparent border-2 rounded p-3 w-full ' placeholder='Password...'
        value={info.pass} onChange={(e)=> {setInfo({...info , pass: e.target.value })}}
        />
        <p className='text-gray-400 text-sm text-left mb-3'>Should be more that 8 characters</p>

        <button className='bg-slate-400 w-full rounded-xl mb-3' onClick={chechUser} >Login</button>
        <Link to="/sign" className='hover:border-b-2'> Don't Have Account? Sign Up.</Link>
    </div>
</div></div>
  )
}

export default Login