import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Cookies from 'universal-cookie';
import ChatIcon from '@mui/icons-material/Chat';
import HistoryIcon from '@mui/icons-material/History';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import EditIcon from '@mui/icons-material/Edit';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Modal from './Modal';

function Dashboard() {
  const cookies = new Cookies();
  const [openModal, setOpenModal] = useState(false);
  // const [name, setName] = useState();
  
  

  useEffect(() => {

    fetch('http://localhost:4000/user/me',{
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({})
        
      }).then(res=>res.json()).then(data=>{
        if(data.token !== undefined)
        {
          cookies.set('token', data.token,{path:'/'})
          // window.location.assign('/panel')
        }
        console.log(data)
  
    })
  }, []);
  
 


  return (
    <div >

    <div className=' flex m-[40px] gap-3' >
      <div className=' flex-[4]' >
      <Modal  open={openModal} onClose={()=> setOpenModal(false) } />
      <Outlet /> </div>
      <div className=' flex-[1] bg-gray-900 text-white flex flex-col gap-5'>
        <ul>
          <li className=' cursor-pointer  hover:bg-[#30363F]' onClick={() => {
            setOpenModal(true)
          }} ><MeetingRoomIcon /> Log Out
          </li>
          <li className=' hover:bg-[#30363F] text-white'>
            <Link to='writing' className=' text-white' ><LibraryAddIcon /> Share a new post </Link>
          </li>
          <li className=' hover:bg-[#30363F]'   >
          <Link to='posts ' className=' text-white'  ><AppShortcutIcon /> Your posts </Link>
          </li>
          <li className=' hover:bg-[#30363F]'>
          <HistoryIcon /> Recent Activities 
          </li>
          <li className=' hover:bg-[#30363F]'>
          <ChatIcon /> Read your comments 
          </li>
          <li className=' hover:bg-[#30363F]'>
          <Link to='editpro' className=' text-white'  ><EditIcon /> Edit your profile </Link>
          </li>
          <li className=' hover:bg-[#30363F]'>
            <Link to="/allblogs" className=' text-white'  ><AccountBoxIcon /> See your blog </Link>
          </li>
        </ul>
      </div>
    </div>
        <div className=' mt-[280px]'>
          <Footer className=' mt-[10px]' />
        </div>
    </div>
  )
}

export default Dashboard
