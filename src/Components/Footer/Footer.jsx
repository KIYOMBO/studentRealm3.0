import React from 'react'

const Footer = () => {
  return(
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto item-center justify-center]'>
        <div>
        <div className="logoDiv">
            <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                <strong>Student</strong>Realm
            </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7 '>
            We always make sure that seekers find the best realms and managers work efficiently.
        </p>
        </div>
        <div className='grid'>
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white pl-[4rem]'>
            </span>
            <div className='grid gap-3'>
                <li className='text-white opacity-[.7] hover:opacity-[1]'></li>
                <li className='text-white opacity-[.7] hover:opacity-[1]'></li>
                <li className='text-white opacity-[.7] hover:opacity-[1]'></li>
                <li className='text-white opacity-[.7] hover:opacity-[1]'></li>
            </div>
        </div>
        <div className='grid'>
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white pl-[4rem]'>
                Company
            </span>
            <div className='grid gap-3'>
                <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
                <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
                <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
                <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
            </div>
        </div>
        
        <div className='grid'>
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white pl-[4rem]'>
                Resources
            </span>
            <div className='grid gap-3'>
                <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
                <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
                <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
                <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>
            </div>
        </div>
    </div>
  )
}

export default Footer
