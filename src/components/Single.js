import React, { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import parse from "html-react-parser"
import Cookies from "universal-cookie";
// const parse = require("html-react-parser");
import Menu from "./Menu";

function Single() {
  const [blogInfo, setBlogInfo] = useState({});
  const parse = require("html-react-parser");
  const [isLoading, setisLoading] = useState(true);
  const cookies = new Cookies();
  const token = cookies.get("token");
  const [allCMs, setAllCMs] = useState([]);
  const [text, setText] = useState("");
  let params = useParams();
  let id = params.id;

  useEffect(()=>{

    const abc = async () => {
      // prmosise ? async await vs .then, promise.all ,
      // che function hae promise barmigardonan
      const [res1, res2] = await Promise.all([
        fetch(`http://localhost:4000/comment/by-blog/${id}`, {
          method: 'GET',
          headers: { "Content-Type": "application/json" },
        }),
        fetch(`http://localhost:4000/blog/single-blog/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
      ])
      const [thesecomments, thisblog] = await Promise.all([res1.json(), res2.json()])
      // const res1 = await fetch(`http://localhost:4000/comment/by-blog/${id}`, {
      //   method: 'GET',
      //   headers: { "Content-Type": "application/json" },
      // });
      // const thesecomments = await res1.json()
      // const res2 = await fetch(`http://localhost:4000/blog/single-blog/${id}`, {
      //   // ${blogId}
      //   method: "GET",
      //   headers: { "Content-Type": "application/json" },
      //   // body: JSON.stringify({}),
      // });
      // const thisblog = await res2.json()
      setAllCMs(thesecomments)
      setBlogInfo(thisblog)
      setisLoading(false)
    }
    abc()
    // fetch(`http://localhost:4000/comment/by-blog/${id}`, {
    //     // ${blogId}
    //   method: 'GET',
    //   headers: { "Content-Type": "application/json" },
    //   // body: JSON.stringify({}),
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    //   setAllCMs(data);

    //   // console.log()
    // });
    // fetch(`http://localhost:4000/blog/single-blog/${id}`, {
    //   // ${blogId}
    //   method: "GET",
    //   headers: { "Content-Type": "application/json" },
    //   // body: JSON.stringify({}),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBlogInfo(data);
        
    //     console.log(data);
    //   }
    //   )
    //   .finally(() => setisLoading(false));
}, [])

// console.log(Math.random())

  // useEffect(() => {

      
    // }, []);

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

  if (isLoading) return <h1>please wait...</h1>;

  return (
    <div className=" flex gap-[50px]  m-[40px] ">
      <div className=" flex-[5] ml-[40px] ">
              <img
                className=" w-[800px] h-[350px] object-cover"
                src={blogInfo.imgurl}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "../Image/second.webp";
                }}
              />
              <div className=" flex items-center gap-3 mt-10">
                <img
                //  src="../Image/User.jpg"
                 className=" w-[55px] h-[55px] rounded-3xl object-cover"
                 src={`http://localhost4000/${blogInfo.creator.avatar}`}
                 onError={(e) => {
                   e.target.onerror = null;
                   e.target.src = "../Image/User.jpg"
                  }}
                />
                <div>
                  <span className=" text-base	font-bold ">{blogInfo.creator.name}</span>
                  <p className=" text-sm	"> Posted 2 days ago </p>
                </div>
              </div>
              <div className=" mt-6">
                <h1>{blogInfo.title}</h1>
              </div>
              <div>
                {parse(blogInfo.content)}
              </div>

              <div className="flex flex-col justify-center mb-11 ">
          <div className=" max-w-[310px] w-full mx-auto p-4 mt-[40px] ">
            <h2 className="text-4xl font-bold ">Comment</h2>
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
          <div className=" flex justify-center text-center items-center">
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
            <div className=" flex justify-center text-center items-center">
            <button
              class="ui icon primary left labeled button"
              type="submit"
              onClick={comment}
              >
              <i aria-hidden="true" class="edit icon"></i>Add Reply
            </button>
              </div>
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
      <div className=" flex-[2]">
        <Menu />
      </div>
    </div>
  );
}

export default Single;
