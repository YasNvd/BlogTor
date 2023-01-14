import React, { useState } from "react";
// import { useMutation, useQuery } from '@apollo/client';
// import { useCookies } from 'react-cookie';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';






 

const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const cookies = new Cookies();
    // const [cookies, setCookies] = useCookies(['user']);


    const RegisterNewUser = () => {
        fetch('http://localhost:4000/user/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({ username:userName ,name: name})

        }).then(res=>res.json()).then(data=>{
            if(data.token !== undefined)
            {
                cookies.set('token', data.token,{path:'/' })
            }
            console.log(data)
        })

    }

    return(
        // <div className="w-full h-screen" >
        <div className=' w-full h-screen relative' >
            <video className=" w-full h-full object-cover " src="../video/NYC.mp4" autoPlay loop muted />
            <div className=" absolute w-full h-full top-0 left-0 bg-gray-900/90"></div>
            <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4" >

            <div className="flex flex-col justify-center mb-11" >
                <form className=" max-w-[400px] w-full mx-auto p-4 " >
                    <h2 className="text-4xl font-bold m-5" > Registration </h2>
                    <div  className="flex flex-col py-3 ">
                        {/* <label>User Name</label> */}
                        <input className="border p-2 text-gray-900 " type="text" placeholder="UserName" onChange={(e)=>setUserName(e.target.value)}  />
                    </div>
                    <div  className="flex flex-col py-3 ">
                        {/* <label>PassWord</label> */}
                        <input className="border p-2  text-gray-900  " type="password" placeholder="Name" onChange={(e)=>setName(e.target.value)}  />
                    </div>
                    <button className=" border w-full my-5 p-2 bg-red-500 text-white hover:bg-red-400" onClick={RegisterNewUser}> Register </button>
                    <div className=" flex justify-center">
                        <p className=" hover:text-gray-400 mt-5 " ><Link to="/LogIn" >Already have an account?</Link></p>
                    </div>
                </form>
            </div>
            </div>

        </div>  

)
}
export default SignUp;