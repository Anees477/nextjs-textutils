import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <>
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <a className="text-white text-xl font-semibold" href="/home">TextUtils - App</a>
          <button className="text-white md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div className="hidden md:flex md:items-center md:w-auto">
          <div className=''>
            <ul className="flex space-x-4 relative right-[15rem]  text-white">
              <li className="nav-item">
                <Link className="hover:text-gray-300" href="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="hover:text-gray-300" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="hover:text-gray-300" href="/contact">Contact us</Link>
              </li>
            </ul>
            </div>
            <div>
            <form className="flex space-x-2" role="search">
              <input className="px-2 py-1 rounded-md bg-gray-700 text-white placeholder-gray-400" type="search" placeholder="Search" aria-label="Search" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md" type="submit">Search</button>
            </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Page;
