import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
      <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
        <div className="max-w-8xl mx-auto px-6 flex justify-between items-center h-16">
         
          <div className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="w-20 h-12" />
          </div>

    
          <div className="hidden md:flex flex-1 justify-center space-x-10">
            <a href="#" className="text-gray-800 pt-3 hover:text-red-500 font-medium border-t-2 border-transparent hover:border-red-500 transition duration-300">
              Business Directory
            </a>
            <a href="#" className="text-gray-800 pt-3 hover:text-red-500 font-medium border-t-2 border-transparent hover:border-red-500 transition duration-300">
              Market Place
            </a>
            <a href="#" className="text-gray-800 pt-3 hover:text-red-500 font-medium border-t-2 border-transparent hover:border-red-500 transition duration-300">
              Education
            </a>
            <a href="#" className="text-gray-800 pt-3 hover:text-red-500 font-medium border-t-2 border-transparent hover:border-red-500 transition duration-300">
              Real Estate
            </a>
          </div>

   
          <div className="hidden md:block">
            <a href="#" className="font-medium hover:text-red-500">Sign in</a>
          </div>

     
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

     
        {isOpen && (
          <div className="px-6 pb-3 md:hidden space-y-3 bg-white shadow-md">
            <a href="#" className="block text-gray-800 hover:text-red-500 font-medium">Business Directory</a>
            <a href="#" className="block text-gray-800 hover:text-red-500 font-medium">Market Place</a>
            <a href="#" className="block text-gray-800 hover:text-red-500 font-medium">Education</a>
            <a href="#" className="block text-gray-800 hover:text-red-500 font-medium">Real Estate</a>
            <a href="#" className="block text-gray-800 hover:text-red-500 font-medium">Sign in</a>
          </div>
        )}
      </nav>

    
      <div className="fixed top-16 left-0 w-full flex justify-center z-50">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 shadow-md transition"
        />
      </div>

   
      <div className="h-20"></div>
    </>
  );
}
