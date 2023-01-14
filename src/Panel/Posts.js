import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
// const parse = require("html-react-parser");

function Posts() {
  const cookies = new Cookies();
  const [myPosts, setMyPosts] = useState([]);
  const token = cookies.get("token");
  const parse = require("html-react-parser");

  useEffect(() => {
    fetch("http://localhost:4000/blog/my-blogs", {
      method: "GET",
      headers: { "Content-Type": "application/json", auth: `ut ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyPosts(data);

        // console.log(data)
      });
  }, [myPosts]);


  const DelBlog = (blogId) => {
    // console.log(id)

    fetch("http://localhost:4000/blog/delete", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
          "auth": `ut ${token}` },
      body: JSON.stringify({blogId}),
    })
      .then((res) => res.json())
      .then((data) => {
        setMyPosts(data);
        window.location.assign('http://localhost:3000/panel/posts')
      });
  };

  return (
    <div className=" flex flex-col items-center justify-center text-center  max-w-[200px]">
          {myPosts.length != 0 ?
            myPosts.map((item) => {
            return (
    <div className="w-full py-[2rem] px-4 bg-white ">
      <div className="max-w-[300px] h-[400px] mx-auto grid  mt-[-3rem] bg-white ">
        <div className=" w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  ">
              <div className=" py-1">
                <img
                  className="w-20 mx-auto mt-[-3rem] bg-white"
                  src="../Image/AMAN.jpg"
                />

                <h1 className=" flex justify-center text-2xl font-bold tex-center py-8 text-black text-center ">
                  {" "}
                  {item.title}{" "}
                </h1>
                {/* <img className=' justify-center items-start text-center' src={item.imgurl} /> */}
                <p className="justify-center items-center flex max-w-[200px]">
                  {parse(item.content)}
                </p>
                <div className=" justify-center items-center text-center flex ">
                    <Link to={`/panel/editblog/${item._id}`} >
                    <button className=" justify-center items-center bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto px-6 py-3 border-none font-semibold	 hover:bg-[#24C090] ">
                    {" "}
                    <EditIcon /> Edit
                  </button>    
                    </Link>
                  <button
                    className=" justify-center items-center bg-red-500 w-[200px] rounded-md my-6 mx-auto px-6 py-3 border-none font-semibold hover:bg-[#D33232] "
                    onClick={() => DelBlog(item._id)}
                  >
                    {" "}
                    <DeleteOutlineIcon /> Delete
                  </button>
                </div>
                {/* {item.content} */}
              </div>
        </div>
      </div>
    </div>
            );
          })
          :
          <p>Empty</p>
        }
    </div>
  );
}

export default Posts;

{
  /* <img className='w-20 mx-auto mt-[-3rem] bg-white rounded' />
<h1 className='text-2xl font-bold tex-center py-8 '>Title</h1>
<div>Users name</div>
<div>Content</div>
<button>Read more</button> */
}

// {myPosts.map((item) => {
//     return(
//         <img src={item.imgurl} />,
//         <h1 className='text-2xl font-bold tex-center py-8 text-black'> {item.title} </h1>,
//         <div>
//             <p>{item.content}</p>
//         </div>

//     )
