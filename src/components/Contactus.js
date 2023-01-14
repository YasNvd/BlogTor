import React, { useState } from 'react';
import Cookies from 'universal-cookie';


function Contactus() {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const cookies = new Cookies();

    const login = () => {
        fetch('http://localhost:4000/user/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({ username:userName , password: passWord})
            
        }).then(res=>res.json()).then(data=>{
            if(data.token !== undefined)
            {
                cookies.set('token', data.token,{path:'/'})
                alert('ok')
            }
            console.log(data)

        })
    }
  return (
    <div className=' m-[50px] justify-center flex'>
        <div>
            <div>
            <input type="text" placeholder='USERNAME' onChange={(e)=>setUserName(e.target.value)}  />
            </div>
            <div>
            <input type="password" placeholder='PASSWORD' onChange={(e)=>setPassWord(e.target.value)}  />
            </div>
            <div>
                <button className=' mt-10 justify-center flex text-center items-center border-none' onClick={login}>LOGIN</button>
            </div>
        </div>
    </div>
  )
}

export default Contactus
