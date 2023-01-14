import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";


function CM() {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const [allCMs, setAllCMs] = useState([]);
  const [text, setText] = useState("");
  let params = useParams();
  let id = params.id;


  console.log(token);
  console.log(text);
  
    useEffect(()=>{
      fetch(`http://localhost:4000/comment/by-blog/${id}`, {
          // ${blogId}
        method: 'GET',
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({}),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCMs(data);
  
        // console.log()
      });
  }, [allCMs] )

  const comment = (blogId) => {
    fetch("http://localhost:4000/comment/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", auth: `ut ${token}` },
      body: JSON.stringify({text: text ,blogId:id}),
    })
      
    .then(res=>res.json()).then(data=>{
        if(data.token !== undefined)
        {
            cookies.set('token', data.token,{path:'/'})
            alert('Your not allowed')
        }
        console.log(data)

    })
  };

  console.log(token)


  const ME = () => {
    fetch('http://localhost:4000/user/me', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token !== undefined) {
          cookies.set("token", data.token, { path: "/" });
          alert("You're not allowed")
          // window.location.assign('/panel')
        }
        console.log(ME);
        console.log(data);
      });
  };
  return (
    <div className=" w-full h-screen relative">
      <video
        className=" w-full h-full object-cover "
        src="../video/frf.mp4"
        autoPlay
        loop
        muted
      />
      <div className=" absolute w-full h-full top-0 left-0 bg-gray-900/70"></div>
      <div className=" absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <div className="flex flex-col justify-center mb-11 ">
          <div className=" max-w-[310px] w-full mx-auto p-4  ">
            <h2 className="text-4xl font-bold m-2 ">Comment</h2>
            {/* <div className="flex flex-col py-2 ">
              <input
                className="border p-2 text-gray-900 "
                type="text"
                placeholder="UserName"
              />
            </div> */}
            <div className="flex flex-col py-2 ">
            </div>
          </div>
          <div>
            <textarea
              className="border-[#A8A29E] border-solid border-2  w-[280px] mb-3 text-black	"
              name="comment"
              id=""
              cols="30"
              rows="10"
              placeholder="Type your comment..."
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div className=" mt-2">
            <button
              class="ui icon primary left labeled button"
              type="submit"
              onClick={comment}
            >
              <i aria-hidden="true" class="edit icon"></i>Add Reply
            </button>
            <div className=" flex justify-center mt-4 text-white ">
            <div class="ui comments" >
              <h3 class="ui dividing header">Comments</h3>
              <div class="comment">
                  {allCMs.map((item)=> {
                    return( <>
                <div class="avatar">
                  <img 
                src={item.user.avatar}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://react.semantic-ui.com/images/avatar/small/matt.jpg";
                  }}
                  />
                </div>
                <div class="content">

                    

                    <a class="author">{item.user.name}</a>
                  <div class="metadata">
                    <div>Today at 5:42PM</div>
                  </div>
                  <div class="text">{item.text}</div>
                  <div class="actions">
                    <a class="">Reply</a>
                  </div>
                </div>
                  </>
                  )
                  })}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CM;











// <img
// className=" rounded-full w-[50px] h-[50px]"
// src="../Image/2266.jpg"
// onError={(e) => {
//   e.target.onerror = null;
//   e.target.src = "../Image/second.webp";
// }}
// />
// <div className="flex flex-col">
// <form action="#">
//   <div className=" mt-[20px] flex flex-col">
//   <input className="border-[#A8A29E] border-solid border-2 max-w-xs h-[28px]" type="text" name="full_name" placeholder="Full Name..." />
//   <input  className="border-[#A8A29E] border-solid border-2 max-w-xs mt-4 h-[28px] " type="email" name="email" placeholder="Email Adress..." />
//   </div>
//   <textarea
//   className="border-[#A8A29E] border-solid border-2 mt-[20px] w-[280px]	"
//     name="comment"
//     id=""
//     cols="30"
//     rows="10"
//     placeholder="Type your comment..."
//   ></textarea>
//   <div>
//   <button className=" bg-blue-400 text-stone-700 hover:bg-blue-300 mt-3 mb-[160px]" type="submit">Submit Comment</button>
//   </div>
// </form>
// </div>
