import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";


function EditBlog() {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const [getInfo, setGetInfo] = useState([]);
  const [title, setTitle] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [value, setvalue] = useState("");
  let params = useParams();
  let id = params.id;
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/blog/single-blog/${id} `, {
      method: "GET",
      headers: { "Content-Type": "application/json", auth: `ut ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setvalue(data.content);
        setImgurl(data.imgurl);
        // setMyPosts(data);
        // data._id

        console.log(data);
      });
  }, []);

  const editBlog = (blogId) => {
    // console.log(id)

    fetch("http://localhost:4000/blog/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: `ut ${token}`,
      },
      body: JSON.stringify({
        blogId: blogId,
        data: { title: title, content: value, imgurl: imgurl },
      }),
      // ({title, imgurl, value(data)})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.token !== undefined) {
          cookies.set("token", data.token, { path: "/" });
          // window.location.assign('/panel')
        }
        if (data.msg) {
          alert(data.msg);
        }

        // setGetInfo(data);
        window.location.assign("http://localhost:3000/panel/posts");
      })
      .finally(() => setisLoading(false));
  };
  if (!isLoading) return <h1>please wait...</h1>;

  return (
    <div className=" gap-5">
      <div className="content">
        <input
          type="text"
          placeholder="Add Your Title"
          className=" border-black m-1 border-solid	"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Add An Images URL"
          className=" border-black m-1 border-solid ml-[130px]	"
          onChange={(e) => setImgurl(e.target.value)}
          value={imgurl}
        />
        <div>
          <ReactQuill theme="snow" value={value} onChange={setvalue} />
        </div>
        <div className=" flex flex-[5]">
          <div className=" flex gap-3 m-5">
            {/* <h1 className=' text-[25px]' >Publish</h1> */}
            <span>
              <b>Status: </b>Draft
            </span>
            <span>
              <b>Visibility: </b>Public
            </span>
            <input className=" hidden " type="file" id="file" name="" />
            <label
              className=" cursor-pointer font-medium underline	  "
              htmlFor="file"
            >
              Upload Image
            </label>
            <div className=" gap-2">
              <button className=" mr-1">Save as a draft </button>
              <button onClick={editBlog}> Publish </button>
            </div>
          </div>
          <div className=" flex-[1] m-4 ">
            <h1 className=" text-[20px]">Category</h1>
            <div className=" flex flex-col justify-between text-[12px] text-gray-700 ">
              <div className=" flex items-center gap-[2px] ">
                <input type="radio" name="cat" value="art" id="art" />
                <label htmlFor="art">Art</label>
              </div>

              <div className=" flex items-center gap-[2px] ">
                <input type="radio" name="cat" value="science" id="science" />
                <label htmlFor="science">Science</label>
              </div>

              <div className=" flex items-center gap-[2px] ">
                <input
                  type="radio"
                  name="cat"
                  value="technology"
                  id="technology"
                />
                <label htmlFor="technology">Technology</label>
              </div>

              <div className=" flex items-center gap-[2px] ">
                <input type="radio" name="cat" value="Food" id="Food" />
                <label htmlFor="Food">Food</label>
              </div>

              <div className=" flex items-center gap-[2px] ">
                <input type="radio" name="cat" value="etc" id="etc" />
                <label htmlFor="etc">etc</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditBlog;
