import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu , AiFillBell, AiFillHome} from 'react-icons/ai';
import { RiFunctionLine, RiArrowDropDownLine} from 'react-icons/ri';
import {BsFillChatRightTextFill} from 'react-icons/bs';
import Shakir from '../Shakir.jpg';

function CustomerHeader() {

    const [nav, setNav] = useState(false);

        const handleNav = () => {
        setNav(!nav);
        };
  return (
    <div className='flex items-center h-18 text-black bg-[#d89444] justify-between'>

    {/* After login styles */}
    {/* header logo */}

    <h1 className='text-3xl font-bold text-[#00df9a] px-4'>Logo</h1>

    {/*header links */}
    <ul className='hidden md:flex'>
      <li className='px-10 hover:text-white'><Link to="/">Home</Link></li>
      <li className='px-10 hover:text-white'><Link to="/aboutus">About us</Link></li>
      <li className='px-10 hover:text-white'><Link to="/contactus">Contact Us</Link></li>
    </ul>
    
    {/*After login components*/}
            <div className="md:hidden">
                <Link to="/">
                <AiFillHome size={40} className="text-black hover:text-white"/>
                </Link>
                
            </div>
            <div className="p-3">
                <AiFillBell size={40} className="text-black hover:text-white"/>
            </div>
            <div className="p-3">
                <img src={Shakir} className="w-10 h-10 rounded-full"/>
            </div>
        

    {/* Responsive component */}
    <div onClick={handleNav} className='flex md:hidden'>
        {nav ? <AiOutlineClose size={40}/> :       
         <AiOutlineMenu size={40} />
         }
    </div>
    

    <div className={nav ? 'fixed left-0 top-16 w-[85%] p-12 min-h-screen overflow-y-auto bg-gray-800 text-white  md:hidden' : ' fixed left-[-100%]'}>
        <ul className=' text-lg'>
            <li className='py-2 border-b border-gray-500'>
            <Link to="/" className="flex text-white p-3 rounded-full hover:bg-gray-700 ">
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Dashboard</span>
            </Link>
            </li>
            
            <li className='py-2 border-b border-gray-500'>
            <Link to="/" className="flex text-white p-3 rounded-full hover:bg-gray-700 ">
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
                <span className="ml-3">Dashboard</span>
                <RiArrowDropDownLine className="w-8 h-8 ml-16 text-gray-500"/>
            </Link>
        </li>


        <li className='py-2 border-b border-gray-500'>
            <Link to="/" className="flex text-white p-3 rounded-full hover:bg-gray-700 ">
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Dashboard</span>
            </Link>
        </li>
        <li className='py-2 border-b border-gray-500'>
            <Link to="/" className="flex text-white p-3 rounded-full hover:bg-gray-700 ">
                <BsFillChatRightTextFill className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Chat</span>
               <span class="inline-flex justify-center items-center p-3 ml-24 w-3 h-3 text-white bg-blue-600 rounded-full">15</span>
            

            </Link>
        </li>
        
        
        <li className='py-2 border-b border-gray-500'>
            <Link to="/" className="flex text-white p-3 rounded-full hover:bg-gray-700 ">
                <RiFunctionLine className="w-6 h-6 text-gray-500"/>
               <span className="ml-3">Dashboard</span>
            </Link>
        </li>

        </ul>
    </div>
    
  </div>

  )
}

export default CustomerHeader