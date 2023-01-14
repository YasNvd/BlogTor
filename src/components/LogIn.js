import React, { useState } from "react";
// import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';



 

const LogIn = () => {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const cookies = new Cookies();
    // const [cookies, setCookies] = useCookies(['user']);

    const login = () => {
        fetch('http://localhost:4000/user/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({ username:userName , password: passWord})
            
        }).then(res=>res.json()).then(data=>{
            if(data.token !== undefined)
            {
                cookies.set('token', data.token,{path:'/'})
                window.location.assign('/panel')
            }
            console.log(data)

        })
    }

    return(
        <div className=' w-full h-screen relative' >
            <video className=" w-full h-full object-cover " src="../video/videoplayback.webm" autoPlay loop muted />
            <div className=" absolute w-full h-full top-0 left-0 bg-gray-900/90"></div>
            <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4" >

            <div className="flex flex-col justify-center mb-11 " >
                <div className=" max-w-[400px] w-full mx-auto p-4" >
                    <h2 className="text-4xl font-bold m-2" >Log In</h2>
                    <div  className="flex flex-col py-3 ">
                        <input className="border p-2 text-gray-900 " type="text" placeholder="UserName" onChange={(e)=>setUserName(e.target.value)}  />
                    </div>
                    <div  className="flex flex-col py-3 ">
                        <input className="border p-2  text-gray-900  " type="password" placeholder="PassWord" onChange={(e)=>setPassWord(e.target.value)}  />
                    </div>
                    <button className=" border w-full my-5 p-2 bg-red-500 text-white hover:bg-red-400" onClick={login} > Sign In </button>
                    <div className=" flex justify-between">
                        <p className=" flex items-center "><input className=" mr-2" type="checkbox" /> Remember Me </p>
                        <p className=" hover:text-gray-400" ><Link to="/signup" >Create An Account</Link></p>
                    </div>
                </div>
            </div>
            </div>

        </div>  

)
}
export default LogIn;


// import React, { useState } from "react";
// // import { useCookies } from "react-cookie";
// import { Link } from "react-router-dom";
// import Cookies from 'universal-cookie';




 

// const LogIn = () => {
//     const [userName, setUserName] = useState("");
//     const [passWord, setPassWord] = useState("");
//     const cookies = new Cookies();

//     // const [cookies, setCookies] = useCookies(['user']);

//     const login = () => {
//         fetch('http://localhost:4000/user/login',{
//             method: 'POST',
//             headers: {'Content-Type': 'application/json' },
//             body: JSON.stringify({ username:userName , password: passWord})
            
//         }).then(res=>res.json()).then(data=>{
//             if(data.token !== undefined)
//             {
//                 cookies.set('token', data.token,{path:'/'})
//                 window.location.assign("/panel")
//             }
//             console.log(data)
//             // if(data.msg)
//             // {
//             //     alert(data.msg)
//             // }
//         })
//     }

//     return(
//         // <div className="w-full h-screen" >
//         <div className=' w-full h-screen relative' >
//             <video className=" w-full h-full object-cover " src="../video/videoplayback.webm" autoPlay loop muted />
//             <div className=" absolute w-full h-full top-0 left-0 bg-gray-900/90"></div>
//             <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4" >

//             <div className="flex flex-col justify-center mb-11 " >
//                 <form className=" max-w-[400px] w-full mx-auto p-4" >
//                     <h2 className="text-4xl font-bold m-2" >Log In</h2>
//                     <div  className="flex flex-col py-3 ">
//                         {/* <label>User Name</label> */}
//                         <input className="border p-2 text-gray-900 " type="text" placeholder="UserName" onChange={(e)=>setUserName(e.target.value)}  />
//                     </div>
//                     <div  className="flex flex-col py-3 ">
//                         {/* <label>PassWord</label> */}
//                         <input className="border p-2  text-gray-900  " type="password" placeholder="PassWord" onChange={(e)=>setPassWord(e.target.value)}  />
//                     </div>
//                     <button className=" border w-full my-5 p-2 bg-red-500 text-white hover:bg-red-400" onClick={login} > Sign In </button>
//                     <div className=" flex justify-between">
//                         <p className=" flex items-center "><input className=" mr-2" type="checkbox" /> Remember Me </p>
//                         <p className=" hover:text-gray-400" ><Link to="/signup" >Create An Account</Link></p>
//                     </div>
//                 </form>
//             </div>
//             </div>

//         </div>  

// )
// }
// export default LogIn;
