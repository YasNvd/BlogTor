import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';


function TopBlogs() {

    const [topBlogs, setTopBlogs] = useState([]);


    useEffect(() => {
        fetch("http://localhost:4000/blog/top-blogs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            //    auth: `ut ${token}`
          },
        })
          .then((res) => res.json())
          .then((data) => {
             console.log(data)
            setTopBlogs(data);
    
          });
      }, [topBlogs]);

  return (
    <div class="h-screen w-screen bg-stone-200 ">
    <div class="  bg-stone-200 justify-center flex items-center mt-[60px]  ">
    <h1 className=" justify-center flex items-center  ">Top Blogs</h1>
    </div>
     <div className=" flex  mb-4 mt-[40px]">
    {topBlogs.map((item)=> {
      return( <>
      
  <div class="flex items-center justify-center gap-1 px-[40px] py[40px]  w-full hover:scale-105 duration-300  ">
    <div class="w-full rounded-xl shadow-xl ">
      <img
        class="w-full rounded-t-xl h-36  object-cover"
        src={item.imgurl}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "../Image/1.jpg";
        }}
      />
      <div className="p-6">
        <div className="  flex font-black">
          <div className="uppercase text-xs px-2 py-1 flex-[2] ">
            {item.title}
          </div>
          <div className="uppercase text-xs px-2 py-1  ">
            <StarIcon className=" text-yellow-400 mb-[5px]" />
            {item.averageScore}
          </div> 
        </div>
      </div>
    </div>
  </div> 
  </>
      )
    }) }
    </div> 
  </div>
  )
}

export default TopBlogs
