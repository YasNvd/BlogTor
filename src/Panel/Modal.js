import React, { useState } from 'react';
import Cookies from 'universal-cookie';
// import { useCookies } from 'react-cookie';

function Modal({open, onClose}) {
    const [currentUser, setCurrentUser] = useState(null);
    const cookies = new Cookies();
    const token = cookies.token
    if(!open) return null

     const logOut = () => {

      console.log("dgdgdg")
      cookies.remove('token', {path:"/" , domain: "localhost" });
      window.location.assign("/login");
      return 
       fetch("http://localhost:4000/user/me", {
         method: "POST",
        //  headers: {
        //    "Content-type": "application/json",
        //    auth: `ut ${token} `,
        //  },
       })
       .then((res) => res.json())
       .then((data) => {
         if (data._id) {
          // cookies.remove('token',{path: "/" })
          console.log()
         }
         else 
         {
           setCurrentUser(data)
         }
       })
      }

    //     fetch('http://localhost:4000/user/me',{
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json',
    //         'auth': `ut ${token} `
    //         },
    //         // body: JSON.stringify({})
    
    //     }).then(res=>res.json()).then(data=>{
    //         console.log(data)
    //         if(data._id) {
    //             window.location.assign("")
    //         }
    //     })

    // }


  return (
    <div className=' fixed inset-0 bg-gray-800 text-white bg-opacity-30 backdrop-blur-sm flex justify-center items-center' >
      <div className=' bg-gray-800 text-white p-2 rounded '> 
      <h1 className=' m-3 text-[16px]'> Are You Sure You Wanna Leave? </h1> 
      <div className=' mt-5 text-center mb-2'>
        <button className=' bg-red-500 mr-1' onClick={logOut}> YES </button>
        <button className=' bg-[#00df9a]' onClick={onClose}> NO </button>
      </div>
      </div>
      
    </div>
  )
}

export default Modal





{/* <div className=' w-[100vw] h-[100vh] fixed flex justify-center items-center relative '>
<div className=' w-[500px] h-[500px] rounded-sm bg-gray-800 flex flex-col p-[25px]'>
  <div  className=' inline-block text-center mt-3	'> */}

