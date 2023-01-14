import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useCookies } from 'react-cookie';


const Navbar = () => {
    const [cookies, setCookies] = useCookies(['user']);
    const token = cookies.token

    useEffect(()=> {

        fetch('http://localhost:4000/user/me',{
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            'auth': `ut ${token} `
            },
            // body: JSON.stringify({})
    
        }).then(res=>res.json()).then(data=>{
            if(data._id) {
                window.location.assign("/panel")
            }
        })

    }, [])


    return (
 <div className=" flex" >
<div className="flex w-full bg-zinc-600 justify-center text-center drop-shadow-lg  z-10 text-white">
    <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
        <h1>Blog</h1>
        <ul className=" md:flex flex text-center justify-center  text-[16px]  ">
        {/* <li>
        <Link to="" >Home</Link>   
        </li> */}
        <li>
        <Link to="/allblogs" className=" text-white ml-[40px] p-[16px] hover:bg-[#626267] hover:text-[#d6d3d1] " >All Blogs</Link>   
        </li>
        <li>
        <Link to="/topusers" className=" text-white ml-[40px] p-[16px] hover:bg-[#626267] hover:text-[#d6d3d1] " >Top Users</Link>   
        </li>
        <li>
        <Link to="/login"  className=" text-white  ml-[40px] p-[16px] hover:bg-[#626267] hover:text-[#d6d3d1]"  >Login</Link>   
        </li>
        <li>
        <Link to="/signup"  className=" text-white  ml-[40px] p-[16px] hover:bg-[#626267] hover:text-[#d6d3d1]"  >Create An Account</Link>   
        </li>
        <li className="  ml-[40px] ">
        <Link to="/contactus"  className=" text-white  ml-[40px] p-[16px] hover:bg-[#626267] hover:text-[#d6d3d1]"  > Contact us</Link>   
        </li>
        <li>
        <Link to="/post/:id"  className=" text-white  ml-[40px] p-[16px] hover:bg-[#626267] hover:text-[#d6d3d1]"  >Single Post</Link>   
        </li>
        </ul>

        </div>
    </div>
    </div>
    {/* <Outlet /> */}
</div> 
    )
}
export default Navbar;



// <ul className=" md:flex flex text-center justify-center  text-[16px]  ">
// {/* <li>
// <Link to="" >Home</Link>   
// </li> */}
// <li>
// <Link to="/allblogs" className=" text-white ml-[40px] p-[16px] hover:bg-[#626267] hover:text-[#d6d3d1] " >All Blogs</Link>   
// </li>
// <li>
// <Link to="/topusers" className=" text-white ml-[40px] p-[16px] hover:bg-[#626267] hover:text-[#d6d3d1] " >Top Users</Link>   
// </li>
// <li>
// <Link to="/login"  className=" text-white  ml-[40px] p-[16px] hover:bg-[#626267] hover:text-[#d6d3d1]"  >Login</Link>   
// </li>
// <li>
// <Link to="/signup"  className=" text-white  ml-[40px] p-[16px] hover:bg-[#626267] hover:text-[#d6d3d1]"  >Create An Account</Link>   
// </li>
// <li className="  ml-[40px] ">
// <Link to="/contactus"  className=" text-white  ml-[40px] p-[16px] hover:bg-[#626267] hover:text-[#d6d3d1]"  > Contact us</Link>   
// </li>
// <li>
// <Link to="/post/:id"  className=" text-white  ml-[40px] p-[16px] hover:bg-[#626267] hover:text-[#d6d3d1]"  >Single Post</Link>   
// </li>
// </ul>