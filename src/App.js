import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import { CookiesProvider } from 'react-cookie';
import Home from "./components/Home";
import LayOut from "./components/LayOut";
import Single from "./components/Single";
import Write from "./components/Write";
import Dashboard from "./Panel/Dashboard";
import Writing from "./Panel/Writing";
import MainPage from "./Panel/MainPage";
import EditPro from "./Panel/EditPro";
import Posts from "./Panel/Posts";
import EditBlog from "./Panel/EditBlog";
import AllBlogs from "./components/AllBlogs";
import COmment from "./components/Comment";
import Contactus from "./components/Contactus";
import CM from "./components/CM";
import TopUsers from "./components/TopUsers";
import TopBlogs from "./components/TopBlogs";
// import LogOut from "./Panel/LogOut";
// import CookieConsent from "react-cookie-consent";



export default function App() {
  return (

    <CookiesProvider >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayOut />} >
        <Route path="" element={<Home />} />
        <Route path="allblogs" element={<AllBlogs />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={<Write />} />
        <Route path="/comment" element={<COmment />} />
        <Route path="/cm/:id" element={<CM />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="topusers" element={<TopUsers />} />
        <Route path="topblogs" element={<TopBlogs />} />

      </Route>
      <Route path="/panel/" element={<Dashboard />} >
       <Route path="" element={<MainPage />} /> 
       <Route path="writing" element={<Writing />} />
       <Route path="editpro" element={<EditPro />} />
       <Route path="posts" element={<Posts />} />
       {/* <Route path="editblog" element={<EditBlog />} /> */}
       <Route path="editblog/:id" element={<EditBlog />} />
       
      </Route>
    </Routes>
    </BrowserRouter>
    </CookiesProvider>
  )
}