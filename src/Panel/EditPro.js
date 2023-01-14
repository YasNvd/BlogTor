import React, { useEffect, useState } from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import { useCookies } from "react-cookie";
import Cookies from 'universal-cookie';





const imageMimeType = /image\/(png|jpg|jpeg)/i;

function EditPro() {
    const [file, setFile] = useState(null);
    const [name,setName] = useState('');
    const [type,setType] = useState('');
    const [img, setImg] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    // const [cookies, setCookies] = useCookies(['user']);
    const cookies = new Cookies();
    const [fileDataURL, setFileDataURL] = useState(null);

    const changeHandler = (e) => {
        const file = e.target.files[0];
        if (!file.type.match(imageMimeType)) {
          alert("Image mime type is not valid");
          return;
        }
        setFile(file);
    }
      useEffect(() => {
        let fileReader, isCancel = false;
        if (file) {
          fileReader = new FileReader();
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result && !isCancel) {
              setFileDataURL(result)
            }
          }
          fileReader.readAsDataURL(file);
        }
        return () => {
          isCancel = true;
          if (fileReader && fileReader.readyState === 1) {
            fileReader.abort();
          }
        }
    
      }, [file]);


    const token=cookies.get('token')
    const submitAvatar = async () => {

        try {
          
          if (!file) return
    
          console.log(file)
          console.log(token)
    
          const formData = new FormData()
          formData.append('avatar', file)
    
          fetch('http://localhost:4000/user/update-avatar', {
            method: 'POST',
            headers: {
                'auth': `ut ${token}` 
            },
            body: formData
          }).then(res => console.log(res)
          )
    
        } catch (error) {
          console.log('lol')
        }
      }

      fetch("http://localhost:4000/user/me", {
        method: "Post",
        headers: {
          "Content-type": "application/json",
          auth: `ut ${token} `,
        },
      })
      .then((res) => res.json())
      .then((data) => {
        if (!data._id) {
          window.location.assign("/login");
        }
        else 
        {
          setCurrentUser(data)
        }
      });

      const login = () => {
        fetch('http://localhost:4000/user/edit',{
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({ name:name, bio:{ type:type ,maxLength:200} })
            
        }).then(res=>res.json()).then(data=>{
            if(data.token !== undefined)
            {
                cookies.set('token', data.token,{path:'/'})
                window.location.assign('/panel')
            }
            console.log(data)

        })
    }


  return (
    <div className='h-full ' >
            <>
      <div className='border-b-2 block md:flex' >
        <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
        <div class="flex justify-between">
        <span class="text-xl font-semibold block">Admin Profile</span>
        <a href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
      </div>
      {fileDataURL ?
        <p className="img-preview-wrapper mt-7">
          {
            
            <div >
               <div className=' flex items-center justify-center bg-gray-800 relative'>
                <img className=' rounded-full w-[150px] h-[150px] m-2 relative ' src={fileDataURL} alt="preview" onError={(e)=>{e.target.onerror = null; e.target.src="https://bigthink.com/wp-content/uploads/2013/03/origin-33.jpg?w=300"}}  />
               </div>
            </div>
          }
        </p> : null}
        <p>
          <input
          className=' hidden '
            // id='file'
             name=''
            type="file"
            id='image'
            accept='.png, .jpg, .jpeg'
            onChange={changeHandler}
          />
          <label className=' cursor-pointer font-medium ' htmlFor='image'><AddAPhotoIcon className=' ml-[120px] mb-[40px] absolute' /> </label>
        </p>
        <p>
          <input className=' hidden' type="submit" label="Upload"  />
          <button onClick={submitAvatar} >SS</button>
        </p>
        </div>

        <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
      <div class="rounded  shadow p-6">
        <div class="pb-6">
          <label for="name" class="font-semibold text-gray-700 block pb-1">Name</label>
          <div class="flex">
            <input id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" value="Jane Name" />
          </div>
        </div>
        <div class="pb-4">
          <label for="about" class="font-semibold text-gray-700 block pb-1">Bio</label>
          <input id="email" class="border-1  rounded-r px-4 py-2 w-full" type="text"  value='Heyy Im Alex a Fuck stack developer...'  />
          <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
        </div>
      </div>
    </div>
      </div>

    </>
      
    </div>
  )
}

export default EditPro

{/* <div className='flex items-center justify-center  ' >
<>
<div >
{fileDataURL ?
<p className="img-preview-wrapper">
{
<div >
   <div className=' flex items-center justify-center bg-gray-800 relative'>
    <img className=' rounded-full w-[150px] h-[150px] m-2 relative ' src={fileDataURL} alt="preview" onError={(e)=>{e.target.onerror = null; e.target.src="https://bigthink.com/wp-content/uploads/2013/03/origin-33.jpg?w=300"}}  />
   </div>
</div>
}
</p> : null}
<p>
<input
className=' hidden '
// id='file'
 name=''
type="file"
id='image'
accept='.png, .jpg, .jpeg'
onChange={changeHandler}
/>
<label className=' cursor-pointer font-medium ' htmlFor='image'><AddAPhotoIcon className=' ml-[120px] mb-[40px] absolute' /> </label>
</p>
<p>
<input className=' hidden' type="submit" label="Upload"  />
<button onClick={submitAvatar} >SS</button>
</p>
</div>

</>

</div> */}
