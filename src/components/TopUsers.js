import React, { useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import TopBlogs from "./TopBlogs";
// import Cookies from "universal-cookie";

function TopUsers() {
  const [topUsers, setTopUsers] = useState([]);
  // const token = cookies.get("token");

  useEffect(() => {
    fetch("http://localhost:4000/user/top-users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //    auth: `ut ${token}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
         console.log(data)
        setTopUsers(data);

      });
  }, [topUsers]);

  return (
    <div class="h-screen w-screen bg-stone-200  ">
      <div class="  bg-stone-200 justify-center flex items-center mt-[10px] ">
      <h1 className=" justify-center flex items-center mt-[10px] ">Top Users</h1>
      </div>
      <div className=" flex mt-[40px] ">
      {topUsers.map((item)=> {
        return( <>
        
    <div class="flex items-center justify-center gap-1 px-[40px] py[40px]  w-full hover:scale-105 duration-300  ">
      <div class="w-full rounded-xl shadow-xl ">
        <img
          class="w-full rounded-t-xl h-36  object-cover"
          src={item.avatar}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "../Image/1.jpg";
          }}
        />
        <div className="p-6">
          <div className="  flex font-black">
            <div className="uppercase text-xs px-2 py-1 flex-[2] ">
              {item.name}
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
      <TopBlogs />
    </div>
  );
}

export default TopUsers;
