import React from "react";
import Image from "next/image";
import Link from "next/link";
import Main from "./Main";
import Skills from "./Skills";
import { FaLinkedinIn, FaGithub, FaRegMoon } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiSun } from "react-icons/fi";

const Navbar = (props) => {
  return (
<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    <div className="w-full navbar bg-base-100 shadow-md"> 
      <div className="flex-1 px-2 mx-2">
      <Image 
          src="/assets/avataaars.png" 
          alt="/" 
          width="60" 
          height="60"
        />
      </div>
      <div className="flex gap-x-2">
        <button onClick={props.toggleDarkMode}>
          { props.darkModeState ? <FaRegMoon size={20}/> : <FiSun size={22}/>}
        </button>
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal mr-5">
          <Link href="/">
            <li className="btn btn-ghost">Home</li>
          </Link>
          <Link href="/">
            <li className="btn btn-ghost">About</li>
          </Link>
          <Link href="/">
            <li className="btn btn-ghost">Skills</li>
          </Link>
          <Link href="/">
            <li className="btn btn-ghost">Projects</li>
          </Link>
          <Link href="/">
            <li className="btn btn-ghost">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
    {/* Insert Main content here */}
    <Main />
    <Skills />
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100">
      <Link href="/">
        <li className="btn flex items-start btn-ghost w-5/6">Home</li>
      </Link>
      <Link href="/">
        <li className="btn flex items-start btn-ghost w-5/6">About</li>
      </Link>
      <Link href="/">
        <li className="btn flex items-start btn-ghost w-5/6">Skills</li>
      </Link>
      <Link href="/">
        <li className="btn flex items-start btn-ghost w-5/6">Projects</li>
      </Link>
      <Link href="/">
        <li className="btn flex items-start btn-ghost w-5/6">Contact</li>
      </Link>

      <div className="w-full h-auto mt-5 ml-5">
        <h3>Lets connect</h3>
        <ul className="flex justify-start gap-x-3 mt-3">
          <Link href="/" className="p-3 bg-primary rounded-full text-white hover:bg-black transition duration-150 ease-in-out">
            <FaLinkedinIn className="" size={25}/>
          </Link>
          <Link href="https://github.com/Ethansteip" className="p-3 bg-primary rounded-full text-white hover:bg-black transition duration-150 ease-in-out">
            <FaGithub size={25}/>
          </Link>
          <Link href="/" className="p-3 bg-primary rounded-full text-white hover:bg-black transition duration-150 ease-in-out">
            <HiOutlineMail size={25}/>
          </Link>
        </ul>
      </div>
    </ul>
    
  </div>
</div>
  );
}

export default Navbar;