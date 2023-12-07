import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Navigation = () => {
  return(
    <div className='navbar flex jusify-between items-center p-[3rem]'>
        <div className="logoDiv">
            <h1 className="logo text-[25px] text-blueColor">
                Student<strong>Realm</strong></h1>
        </div>
        <div className="menu flex gap-10 pl-[300px]">
            <li className="menuList text-[#6f6f6f] hover:text-blueColor"><a href="/my-profile">My Profile</a></li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor"><a href= '../../assets/rules.pdf'>Rules and Regulations</a></li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor"><a href="/terms and condition">Terms and Conditions</a></li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor"><a href="/contact-us">Contact Us</a></li>
        </div>        
    </div>
  )
}

export default Navigation
