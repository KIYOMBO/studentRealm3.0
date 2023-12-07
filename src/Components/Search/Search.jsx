import React from 'react'
import {LiaUniversitySolid} from 'react-icons/lia'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'




const Search = () => {
  return(
    <div className='Search grid gp-10 bg-blue-100 rounded-[10px] p-[3rem] '>


        <form action="">
            <div className='firstDiv flex justify-between items-centre rounded-[8px] gap-[12px] bg-white p-5 shadow-lg shadow-greyIsh-700'>

                <div className='flex gap-2 items-centre'>
                    <BsHouseDoor className='text-[30px] icon'/>
                    <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Realm Here...'/>
                    <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor'/>
                </div>
                <div className='flex gap-2 items-centre'>
                    <CiLocationOn className='text-[30px] icon'/>
                    <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search By Location'/>
                    <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor'/>
                </div>
                <div className='flex gap-2 items-centre'>
                    <LiaUniversitySolid className='text-[30px] icon'/>
                    <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search By Campus'/>
                    <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor'/>
                </div>
                <button className='bg-blueColor h-full p-2 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>
            </div>
        </form>

        <div className='section flex items-center gap-10 justify-center mt-10'>
            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by:</label>
                <select name= "" id="relevance" className='bg-white rounded-[8px] px-4 py-1'>
                    <option value="">Relevance</option>
                    <option value="">Lowest to Highest</option>
                    <option value="">Highest to Lowest</option>
                </select>
            </div>

            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor="by" className='text-[#808080] font-semibold'>Accredited:</label>
                <select name= "" id="by" className='bg-white rounded-[8px] px-4 py-1'>
                    <option value="">CPUT</option>
                    <option value="">PRIVATE</option>
                    <option value="">NSFAS</option>
                </select>
            </div>

            <div className='singleSearch flex items-center gap-2'>
                <label htmlFor="type" className='text-[#808080] font-semibold'>Type:</label>
                <select name= "type" id="relevance" className='bg-white rounded-[8px] px-4 py-1'>
                    <option value="">Gender Neutral</option>
                    <option value="">Females Only</option>
                    <option value="">Males Only</option>
                </select>
            </div>
            <span className='text-[ #a1a1a1  cursor-pointer]'>Clear All</span>
        </div>
    </div>
  )
}

export default Search
