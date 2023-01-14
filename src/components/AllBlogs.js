import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import LazyLoad from "react-lazy-load";
import { RateNow } from "./RateNow";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import CommentIcon from "@mui/icons-material/Comment";
import Cookies from "universal-cookie";
// import { Rating } from 'react-simple-star-rating'
import Heart from "react-heart";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import AddIcon from "@mui/icons-material/Add";

const AllBlogs = () => {
  const cookies = new Cookies();
  const [allPosts, setAllPosts] = useState([]);
  const token = cookies.get("token");
  const parse = require("html-react-parser");
  const [active, setActive] = useState(false);
  const [openCM, setOpenCM] = useState(true);
  const [score, setScore] = useState(null);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  //   const [open, onClose] = useState(false);
  //   if(!open) return null

  useEffect(() => {
    fetch("http://localhost:4000/blog", {
      method: "GET",
      headers: { "Content-Type": "application/json", auth: `ut ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllPosts(data);
      });
  }, [allPosts]);

  const Rate = (blogId) => {
    // console.log(id)

    fetch("http://localhost:4000/blog/submit-rate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: `ut ${token}`,
      },
      body: JSON.stringify({ blogId, score: score }),
    })
      // .then((res) => res.json())
      // .then((data) => {
      //   setScore(data);
      //   // window.location.assign('http://localhost:3000/panel/posts')
      // });

      .then((res) => res.json())
      .then((data) => {
        if (data.token !== undefined) {
          cookies.set("token", data.token, { path: "/" });
          // window.location.assign('/panel')
        }
        if (data.msg) {
          alert(data.msg);
        }
        // console.log(subNewBlog);
        console.log(data);
      });
  };

  return (
    <div>
      <div className=" mt-[60px] flex flex-col gap-[80px] ml-[100px] mb-[60px] justify-center flex-row-reverse ">
        {allPosts.map((post) => (
          <div className="post flex gap-4 md:max-w-full md:h-auto  ">
            <div className=" flex-1 relative after:w-[400px] after:h-[400px] after:absolute after:top-[12px] after:left-[-12px] after:bg-gray-500 after:z-[-1]   ">
              <img
                className=" w-[400px] h-[400px] object-cover  md:w-[400px] md:h-[400px] "
                src={post.imgurl}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "../Image/second.webp";
                }}
              />
            </div>
            <div className="content flex-[1.5] flex flex-col justify-between">
              <Link to={`/post/${post._id}`}>
                <h1 className=" text-5xl text-black">{post.title}</h1>
              </Link>
              <p className=" text-xl	">{parse(post.content)}</p>
              <div className=" flex">
                {/* <Link to="/Cm"> */}
                <Link to={`/Cm/${post._id}`}>
                  <div>
                    <CommentIcon className=" cursor-pointer hover:text-gray-700 text-black" />
                  </div>
                </Link>
                <div className=" w-[20px] ml-2 mt-[1px]">
                  <Heart isActive={active} onClick={() => setActive(!active)} />
                </div>
              </div>
              <div>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                  onClick={(e) => setScore(e.target.value)}
                />
                {/* <RateNow /> */}
              </div>
              <Link to="/Comment">
                <button className=" w-max border-none bottom-1-solid bg-red-400 hover:bg-red-500 hover:text-white">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
    <LazyLoad height={762} width={400} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
      <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
    </LazyLoad>
  </div>
    </div>
  );
};
export default AllBlogs;

{
  /* <div> <FavoriteBorderIcon className=" cursor-pointer hover:text-red-500"/> </div> */
}
