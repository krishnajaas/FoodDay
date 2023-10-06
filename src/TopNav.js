import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import {BsFillCartFill, BsPerson} from 'react-icons/bs'
import { TbTruckReturn } from 'react-icons/tb'
import { MdOutlineFavorite,MdHelp } from 'react-icons/md'
import { FaGoogleWallet } from 'react-icons/fa'

const TopNav = ({search,setSearch}) => {
      
    const [sideNav,setSideNav]=useState(false)
  
  return (
       
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4 sticky top-0 z-10 bg-black '>
      <div className="flex items-center">
        <div onClick={()=>setSideNav(!sideNav)} className="cursor-pointer text-white hover:bg-black p-3 rounded-full">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl text-red-700 lg:text-4xl px-2">
          Food
          <span className="text-green-600 font-bold">Day</span>
        </h1>
        
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search Dishes"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
      <button className="bg-green-700 text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} /> Cart
      </button>
     {
      sideNav ? (
         <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0' onClick={()=>setSideNav(!sideNav)}></div>
      ):("")
     }
     <div className={sideNav ?"fixed top-0 left-0 w-[300px]  h-screen bg-white z-10 duration-300":
                        "fixed top-0 left-[-100%] w-[300px]  h-screen bg-white z-10 duration-300"
                      }
     >
      <AiOutlineClose onClick={()=>setSideNav(!sideNav)} size={25}
        className='absolute right-4 top-4 cursor-pointer'
      />
      <h2 className='text-2xl p-4'>Food <span className='text-green-600 font-bold'>Day</span></h2>
      <nav>
        <ul className='flex flex-col gap-5 p-4 text-gray-600'>
          <li className='text-xl py-4 flex'>
            <BsPerson className='mr-4 text-white bg-black rounded-full'
              size={25}/>
              My Account
          </li>
          <hr />
          <li className='text-xl py-4 flex'>
            <TbTruckReturn className='mr-4 text-white bg-black rounded-full'
              size={25}/>
              Delivery
          </li>
          <hr />
          <li className='text-xl py-4 flex'>
            <MdOutlineFavorite className='mr-4 text-white bg-black rounded-full'
              size={25}/>
              My Favourite
          </li>
          <hr />
          <li className='text-xl py-4 flex'>
            <FaGoogleWallet className='mr-4 text-white bg-black rounded-full'
              size={25}/>
              My Wallet
          </li>
          <hr />
          <li className='text-xl py-4 flex'>
            <MdHelp className='mr-4 text-white bg-black rounded-full'
              size={25}/>
              Help
          </li>
        </ul>
      </nav>
     </div>
    </div>
  )
}

export default TopNav