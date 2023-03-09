import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from 'react-icons/fa';

const Navbar = (props) => {

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <Link href="/" className="p-2 hover:bg-base-200 transition duration-300 ease-in-out rounded-lg">Home</Link>
            <a target="_blank" href="https://resume.creddle.io/resume/39rfhusw3yx" className="p-2 hover:bg-base-200 transition duration-300 ease-in-out rounded-lg">Resume</a>
          </ul>
        </div>
      </div>
      <div className="navbar-center gap-x-3">
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        <Link href="/">
          <Image 
            src="/assets/Logo/Portfolio-Logo.svg" 
            alt="/" 
            width="37" 
            height="37"
          />
        </Link>

      </div>

      <div className="navbar-end flex gap-x-5">
      <a target="_blank" href="https://resume.creddle.io/resume/39rfhusw3yx" className="hidden md:flex uppercase text-sm text-center tracking-widest">Resume</a>
      <button onClick={props.toggleDarkMode} className="mr-5">
        { props.darkModeState ? <FaRegMoon size={20}/> : <FiSun size={22}/>}
      </button>
      </div>
    </div>
  );

}

export default Navbar;