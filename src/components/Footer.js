import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
                <div className=" bg-gray-800 text-white flex flex-col">
        {/* <div className=" text-center justify-center mb-2" >
            <span > Get the IMDb App<OpenInNewIcon className="" /> </span>
            <span > Help<OpenInNewIcon className="" /> </span>
            <span > Privacy Policy<OpenInNewIcon className="" /> </span>
            <span > Advertising<OpenInNewIcon className="" /> </span>
        </div> */}
            <div className=" h-9 text-center justify-center mt-1 ">
            <FacebookIcon className=" m-2 cursor-pointer hover:text-gray-400"/>
            <InstagramIcon className=" m-2  cursor-pointer hover:text-gray-400" />
            <TwitterIcon className=" m-2  cursor-pointer hover:text-gray-400" />
            <PinterestIcon className=" m-2  cursor-pointer hover:text-gray-400" />
            <LinkedInIcon className=" m-2  cursor-pointer hover:text-gray-400" />
            </div>


    </div>
  )
}

export default Footer
