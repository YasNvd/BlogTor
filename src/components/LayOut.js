import React from "react";
import { Outlet } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayOut = () => {
    return(
        <div>
            <Navbar />
            <Outlet />
            <CookieConsent debug={true} expires={300} >This site uses cookies. See our Privacy Policy for more</CookieConsent>
            <div className=" mt-[100px]">
            <Footer />
            </div>
            
        </div>
    )
}
export default LayOut;