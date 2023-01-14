import React from 'react'

function Menu() {
    const posts = [
        {
            id: 2,
            title: "Different views in the town",
            desc: "Bluehost. Powering over 2 million websites, Bluehost offers the ultimate WordPress platform. Tuned for WordPress, we offer WordPress-centric dashboards and tools along with 1-click installation, a FREE domain name",
            img: "../Image/third.jpg",
        },
        {
            id: 3,
            title: "Once upone a time",
            desc: "Bluehost. Powering over 2 million websites, Bluehost offers the ultimate WordPress platform. Tuned for WordPress, we offer WordPress-centric dashboards and tools along with 1-click installation, a FREE domain name",
            img: "../Image/fourth.jpg",
        },
    ]
  return (
    <div className=' flex flex-col gap-[60px]' >
        <h1 className=' text-[25px] text-gray-900 text-bold' >Other posts you may like: </h1>
        {posts.map((post)=> (
            <div className=' flex flex-col gap-[10px]' key={post.id} >
                <img src={post.img} alt="" className=' w-full h-[200px] object-cover ' />
                <h2 className=' text-[17px] ' >{post.title} </h2>
                <button className=' bg-red-400 text-black' >Read More </button>
            </div>
        )) }
      
    </div>
  )
}

export default Menu
