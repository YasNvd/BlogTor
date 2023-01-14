import React from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Home = () => {

    const posts = [
        {
            id: 1,
            title: "WhatEver!",
            desc: "Built by an open source community with decades of experience, its passionate contributors are committed to keeping WordPress as stable and secure as possible.",
            img: "../Image/second.webp",
        },
        {
            id: 2,
            title: "CCCC!",
            desc: "Bluehost. Powering over 2 million websites, Bluehost offers the ultimate WordPress platform. Tuned for WordPress, we offer WordPress-centric dashboards and tools along with 1-click installation, a FREE domain name",
            img: "../Image/third.jpg",
        },
        {
            id: 3,
            title: "Once upone a time",
            desc: "Bluehost. Powering over 2 million websites, Bluehost offers the ultimate WordPress platform. Tuned for WordPress, we offer WordPress-centric dashboards and tools along with 1-click installation, a FREE domain name",
            img: "../Image/fourth.jpg",
        },
    ]

    return(
        <div>
            <div className=" mt-[60px] flex flex-col gap-[80px] ml-[100px] mb-[60px] justify-center flex-row-reverse " >
                {posts.map(post=>(
                    <div className="post flex gap-4 " key={post.id} >
                        <div className=" flex-1 relative after:w-[400px] after:h-[400px] after:absolute after:top-[12px] after:left-[-12px] after:bg-gray-500 after:z-[-1] after:fixed  " >
                            <img className=" w-[400px] h-[400px] object-cover " src={post.img}  />
                        </div>
                        <div className="content flex-[1.5] flex flex-col justify-between"> 
                            <Link to={`/post/${post.id}`} >
                            <h1 className=" text-5xl" >{post.title}</h1>
                            </Link>
                            <p className=" text-xl	">{post.desc}</p>
                            <div className=" flex" >
                            <div> <CommentIcon className=" cursor-pointer hover:text-gray-700" /></div>
                            <div> <FavoriteBorderIcon className=" cursor-pointer hover:text-red-500"/> </div>
                            </div>
                            <button className=" w-max border-none bottom-1-solid bg-red-400 hover:bg-red-500 hover:text-white">Read More</button>
                            {/* className=" float-right ml-[220px]" */}
                        </div>
                    </div>
                ) ) }
            </div>
            

        </div>
    )
}
export default Home;