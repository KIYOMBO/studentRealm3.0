import React from 'react'
import simple from '../../assets/simple.png'
import simple1 from '../../assets/simple1.png'
import simple2 from '../../assets/simple2.png'

const Value = () => {
  return(
    <div className='mb-[4rem] mt-[6rem]'>
        <h1 className='textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'> The key values that we stand for </h1>
        <div className='grid gap-[10rem] grid-cols-3 items-center'>
            <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                <div className='flex items-center gap-3'>
                    <div className='image p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                        <img src={simple} alt="" className=' w-[70%]'></img>
                    </div>
                    <span className='font-semibold text-textColor text-[18px]'>Simplicity</span>
                </div>
                <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                Simplicity is at the heart of our platform, ensuring that every student can effortlessly navigate and access the information they need. With a clean and intuitive interface, finding accommodation is as easy as a few clicks. Our user-friendly search options and filtering tools make the process straightforward, even for first-time users.
                </p>
            </div>
            <div className='singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]'>
                <div className='flex items-center gap-3'>
                    <div className='image p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center'>
                        <img src={simple1} alt="" className=' w-[70%]'></img>
                    </div>
                    <span className='font-semibold text-textColor text-[18px]'>Well Designed and Functional</span>
                </div>
                <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                The well-thought-out design of our web application provides a seamless experience from start to finish. We've meticulously organized accommodation listings, complete with high-quality images and detailed descriptions, so students can quickly evaluate their options. Our responsive design ensures a consistent and pleasing experience.
                </p>
            </div>
            <div className='singleGrid rounded-[10px] hover:bg-[#acd8a7] p-[1.5rem]'>
                <div className='flex items-center gap-3'>
                    <div className='image p-[4px] rounded-[.8rem] bg-[#72bf6a] h-[40px] w-[40px] flex items-center justify-center'>
                        <img src={simple2} alt="" className=' w-[70%]'></img>
                    </div>
                    <span className='font-semibold text-textColor text-[18px]'>Security</span>
                </div>
                <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                Security is a paramount concern for us. We understand the importance of protecting your personal information and ensuring secure transactions. Our web application is equipped with robust security measures to safeguard your data, and our payment gateway offers a secure environment for any financial transactions, giving you peace of mind as you secure your ideal realm.
                </p>
            </div>
        </div>
        <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
            <div>
                <h1 className='text-blueColor text-[30px] font-bold'>Ready to choose your dream realm?</h1>
                <h2 className='text-textColor text-[25px] font-bold'>Let's get started</h2>
            </div>
                <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>Get Started</button>
        </div>
    </div>
  )
}

export default Value
