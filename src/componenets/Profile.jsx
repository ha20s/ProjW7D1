import {React, useState , useEffect} from 'react'
import { Link , useParams} from 'react-router-dom'
// icons
import { FaXTwitter } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaSearch , FaRegBookmark , FaRegComment , FaRegHeart } from "react-icons/fa";
import { IoIosPeople , IoMdPerson , IoIosStats } from "react-icons/io";
import { PiBellRingingBold } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";
import { FaBoltLightning , FaImage } from "react-icons/fa6";
import { CgBookmark, CgMore, CgMoreO } from "react-icons/cg";

import { SlCalender } from "react-icons/sl";


function Profile() {

    const [user , setUser] = useState('')
    const {id} = useParams();

    useEffect(()=> {
        fetch(`https://66e7e6a5b17821a9d9da6f39.mockapi.io/login/${id}`)
  .then((response) => response.json())
  .then((json) => setUser(json));
    }, [id])

    


  return (
    <div className='bg-black min-h-screen w-full text-white'>
    <div className=' flex justify-around lg:flex-row flex-col '  >
        <div className='p-5 lg:w-[25%]'>
            <Link to="/"><FaXTwitter className='text-5xl'/> </Link>
            <div  className='mt-10'>
            <Link to={`/home`} ><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <IoHome className='text-2xl' /> Home</div></Link>
            <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <FaSearch className='text-2xl' /> Discover</div></Link>
            <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> < PiBellRingingBold className='text-2xl' /> Notifications</div></Link>
            <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <MdMailOutline className='text-2xl' /> Messages</div></Link>
            <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <FaRegBookmark className='text-2xl' /> Saved</div></Link>
            <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <IoIosPeople className='text-2xl' /> Community</div></Link>
            <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <FaBoltLightning className='text-2xl' /> Business Activity</div></Link>
            <Link to=""><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <IoMdPerson className='text-2xl' /> Profile</div></Link>
            <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <CgMoreO className='text-2xl' /> More</div></Link>
            <button className='text-center w-full rounded-full p-2 mt-3 bg-[#1DA1F2] font-bold'>Publish</button>
            <div className='flex items-center gap-2 mt-5 p-3 rounded-full hover:bg-gray-700
            lg:flex-row md:flex-row sm:flex-row flex-col'>
                <img src="https://cdn.pixabay.com/photo/2023/10/24/01/44/car-8337200_1280.png" 
                className="rounded-full" width={30} height={30} alt="" />
                <p>@User{user.name}{user.id}</p>
                <CgMoreO/>
            </div>
            </div>
        </div>




<div className='border border-t-0 h-full  lg:w-[50%] p-5 flex flex-col justify-between '
 style={{ background: 'linear-gradient(to bottom, #0f172a 50%, transparent 50%)' }}>
    <div>
    <p>@User{user.name}{user.id}</p>
    <p>Likes</p>
    </div>


<div className='flex justify-between'>
<img src="https://cdn.pixabay.com/photo/2023/10/24/01/44/car-8337200_1280.png"  className="w-32 h-32 rounded-full border-4 border-white"alt=""/>
<button className='p-2 border my-auto rounded-full'>Edit Profile</button>
</div>
        

        <div>
           <p className=' flex items-center gap-1'><SlCalender /> Joined at 22/1/2018 </p> 
           <div className='flex gap-2'>
            <p><strong>102</strong> Followers </p>
            <p><strong>14</strong> Following </p>
           </div>
        </div>
</div>



        <div className='p-5 lg:w-[25%]'>
            <input type="text" className='w-full bg-slate-700 rounded-full p-3' placeholder='Search' />

            <div className='rounded-2xl border mt-5 p-3'>
                <p className='text-2xl'>Subscribe the Premium</p>
                <p>Subscribe to discover new features and if you qualify, you'll receive a share of advertising revenue.</p>
                <button className='bg-[#1DA1F2] rounded-full font-bold my-3 p-2'>Subscribe</button>
            </div>

            <div className='rounded-2xl border mt-5 p-3'>
            <p className='text-2xl'>What's happen?</p>
            <div>
                <p className=''>#Saudi_Tuwaiq</p>
                <p className='text-sm text-gray-300'>Quality of Life Program</p>
            </div>
            <div>
                <p className=''>#Trend</p>
                <p className='text-sm text-gray-300'>JavaScripts Bootacamp</p>
            </div>
            </div>

            <div className='rounded-2xl border mt-5 p-3  '>
                <p>Folow Suggestions</p>   
                <div className='flex items-center gap-1  flex-col lg:flex-row mg:flex-row mt-3'>
                  <img src="https://cdn.pixabay.com/photo/2023/10/24/01/44/car-8337200_1280.png"  className='w-8 h-8 rounded-full' alt="" />
                    <p>UserName</p>
                    <button className='bg-neutral-100 text-black p-1 rounded-full'>Follow</button>
                    </div>      
                    <div className='flex items-center gap-1  flex-col lg:flex-row mg:flex-row mt-3'>
                  <img src="https://cdn.pixabay.com/photo/2023/10/24/01/44/car-8337200_1280.png"  className='w-8 h-8 rounded-full' alt="" />
                    <p>UserName</p>
                    <button className='bg-neutral-100 text-black p-1 rounded-full'>Follow</button>
                    </div>  
                    <p className='text-[#1DA1F2] mt-3'>Show More</p>           
            </div>

        </div>


    </div>
</div>
  )
}

export default Profile