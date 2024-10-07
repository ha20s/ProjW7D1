import React from 'react'
import { Link , useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// icons
import { FaXTwitter } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaSearch , FaRegBookmark , FaRegComment , FaRegHeart , FaTrashAlt} from "react-icons/fa";
import { IoIosPeople , IoMdPerson , IoIosStats } from "react-icons/io";
import { PiBellRingingBold } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";
import { FaBoltLightning , FaImage } from "react-icons/fa6";
import { CgBookmark, CgMore, CgMoreO } from "react-icons/cg";
import { HiGif } from "react-icons/hi2";
import { CiCircleList } from "react-icons/ci";
import { RiEmotionHappyLine,RiShare2Fill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";




function Home() {

    // const { id } = useParams();
    // const [user, setUser] = useState('');
  
    // useEffect(() => {
    //   fetch(`https://66e7e6a5b17821a9d9da6f39.mockapi.io/login/${id}`)
    //     .then((response) => response.json())
    //     .then((json) => setUser(json));
    // }, [id]);

    const url = 'https://66e7e6a5b17821a9d9da6f39.mockapi.io/data'

    const [tweet, setTweet] = useState({
        des : '' ,
        image : '',
        isLiked : false
    })

    const [listTweet, setListTweet] = useState([])


    useEffect(()=> {
        getAPI()

    }, [])

    const getAPI = (()=> {
 fetch(`${url}`)
  .then((response) => response.json())
  .then((json) => {
    setListTweet(json)
    tweet.des = ''
}); })

    const postAPI = () => {
        fetch(`${url}`, {
            method: 'POST',
            body: JSON.stringify({
              des: tweet.des,
              image: tweet.image,
              isLiked : false
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => getAPI());
    }


    const updateAPI = (id) => {
        
        fetch(`${url}/${id}`, {
            method: 'PUT',
              body: JSON.stringify({
              isLiked :  !tweet.isLiked,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => getAPI());
    }

    const deleteItem = (id) => {
        alert("you are deleting tweet")
        fetch(`${url}/${id}`, {
            method: 'DELETE',
          })
        .then((response) => response.json())
          .then(() => {
              getAPI(); 
          })
    }




  return (
    <div className='bg-black min-h-screen w-full text-white'>
        <div className=' flex justify-around lg:flex-row flex-col '  >
            <div className='p-5 lg:w-[25%]'>
                <Link to="/"><FaXTwitter className='text-5xl'/> </Link>
                <div  className='mt-10'>
                <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <IoHome className='text-2xl' /> Home</div></Link>
                <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <FaSearch className='text-2xl' /> Discover</div></Link>
                <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> < PiBellRingingBold className='text-2xl' /> Notifications</div></Link>
                <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <MdMailOutline className='text-2xl' /> Messages</div></Link>
                <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <FaRegBookmark className='text-2xl' /> Saved</div></Link>
                <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <IoIosPeople className='text-2xl' /> Community</div></Link>
                <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <FaBoltLightning className='text-2xl' /> Business Activity</div></Link>
                <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <IoMdPerson className='text-2xl' /> Profile</div></Link>
                <Link><div className='flex items-center gap-2 p-3 rounded-full hover:bg-gray-700'> <CgMoreO className='text-2xl' /> More</div></Link>
                <button className='text-center w-full rounded-full p-2 mt-3 bg-[#1DA1F2] font-bold'>Publish</button>
                <div className='flex items-center gap-2 mt-5 p-3 rounded-full hover:bg-gray-700
                lg:flex-row md:flex-row sm:flex-row flex-col'>
                    <img src="https://cdn.pixabay.com/photo/2023/10/24/01/44/car-8337200_1280.png" 
                    className="rounded-full" width={30} height={30} alt="" />
                    <p>@UserName</p>
                    <CgMoreO/>
                </div>
                </div>
            </div>


            <div className='border border-t-0 h-screen lg:w-[50%]'>
                <div className='flex flex-col md:flex-row lg:flex-row lg:justify-around  p-5  '>
                    <Link className='hover:border-b-2 hover:border-b-[#1DA1F2]'>You</Link>
                    <Link className='hover:border-b-2 hover:border-b-[#1DA1F2]'>Followers</Link>
                </div>
                <hr />

                <div className='p-5 items-center flex gap-2 lg:flex-row md:flex-row sm:flex-row flex-col'>
                <img src="https://cdn.pixabay.com/photo/2023/10/24/01/44/car-8337200_1280.png" 
                    className="rounded-full w-12 h-12"  alt="" />
                    <div className='w-full'>
                    <input type="text" placeholder='What Happend?' className='bg-transparent w-full my-2'
                    value={tweet.des} onChange={(e)=> {setTweet({...tweet, des : e.target.value})}} />
                    <div className='flex gap-1 text-[#1DA1F2] text-lg'> 
                        <Link> <FaImage/> </Link>
                        <Link><HiGif/> </Link>
                        <Link><CiCircleList/></Link>
                        <Link><RiEmotionHappyLine/></Link>
                        <Link><IoLocation/></Link>
                    </div>
                    </div>
                    <button className='bg-[#1DA1F2] rounded-full  font-bold my-3 p-2'
                    onClick={postAPI} >Publish</button>
                </div>
                <hr />

<div className='flex flex-col-reverse'>
                {listTweet.map((item, index) =>{
                        return(
                        <div  key={index}>

                <div className='p-5 flex lg:flex-row md:flex-row sm:flex-row flex-col gap-2 w-full'>
                <img src="https://cdn.pixabay.com/photo/2023/10/24/01/44/car-8337200_1280.png" 
                    className="rounded-full w-12 h-12"  alt="" />
                    <div className='w-full'>
                    <p> User 5 Oct</p>
                    <p>{item.des}</p>

                {item.image === '' ? (<div></div>) : (<div>
                        <img src={item.image} className='h-32 w-32 rounded' alt="" />   
                </div>)}

                    <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-around mt-3'>
                    <button className='flex items-center hover:text-[#1DA1F2]'><FaRegComment/></button>
                    <button className={`flex items-center hover:text-red-500  ${item.isLiked ? 'text-red-800' : ''}`}
                    onClick={()=>updateAPI(item.id)}> <FaRegHeart/></button>

                    <button className='flex items-center hover:text-green-300'>2<AiOutlineRetweet/></button>
                    <button className='flex items-center hover:text-[#1DA1F2]'>2<IoIosStats/></button>
                    <div className='flex gap-1'><button className='flex items-center hover:text-[#1DA1F2]'>2<CgBookmark/></button>
                    <button className='flex items-center hover:text-[#1DA1F2]'>2<RiShare2Fill /></button> </div>
                    <button className='hover:text-red-800' onClick={() => deleteItem(item.id)}><FaTrashAlt/></button>

                     </div>
                    </div>
                    <div> <CgMore/></div>
                </div>
                <hr />

                            
                        </div>
                    )})}

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

export default Home