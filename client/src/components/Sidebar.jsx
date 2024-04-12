import React from 'react'
import Logout from './Logout';

import { Link } from 'react-router-dom'; 
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";



const Sidebar = () => {
  const authUser = true;
  return (
    <aside className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border-gray-800 text-white transition duration-150 ease-out'>

      <nav className='h-full flex flex-col gap-3'>
        <Link to="/" className="flex justify-center">
          <img src="/github.svg" alt="" className='h-8'/>
        </Link>

        <Link to='/' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-zinc-700'>
          <TiHome size={22} />
        </Link>

        {authUser && (
					<Link to='/likes' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-zinc-700'>
						<FaHeart size={20} />
					</Link>
				)}

        {authUser && (
          <Link to='/explore' className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-zinc-700'>
            <MdOutlineTravelExplore size={22} />

          </Link>
        )}

        {!authUser && (
					<Link
						to='/login'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-zinc-700'
					>
						<PiSignInBold size={25} />
					</Link>
				)}

				{!authUser && (
					<Link
						to='/signup'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-zinc-700'
					>
						<MdEditDocument size={25} />
					</Link>
				)}
				{authUser && (
					<div className='flex flex-col gap-2 mt-auto'>
						<Logout />
					</div>
				)}

      </nav>
    </aside>
  )
}

export default Sidebar