import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import {  menu, close } from "../assets";
import logo from '../assets/logo.png'
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      
          <img src={logo} alt='logo' className='w-9 h-9 object-contain rounded-full' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Samuel.Z &nbsp;
            <span className='sm:block hidden'> | Architect | Project-Manager</span>
          </p>
        

       <ul className='list-none hidden xl:flex flex-row gap-10 border border-slate-600 px-4 py-2 rounded-3xl shadow-2xl shadow-slate-700'>
  {navLinks.map((nav) => {
    const Icon = nav.icon;
    const title = nav.title ;// ← assign the icon component
    return (

      
      
      <NavLink
             key={nav.id}
              style={{ textDecoration: "none" }}
              to={`/${title}`}
            >
                <li
        
        className={`${
          active === nav.title ? "text-white" : "text-secondary"
        } hover:text-white text-[18px] font-medium cursor-pointer flex items-center gap-2`}
        onClick={() => setActive(nav.title)}
      >
          <Icon size={22} />   {/* ✅ Correct way */}
          <span>{nav.title}</span>
        
      </li>
            </NavLink>


    
    );
  })}
</ul>


        <div className='xl:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
           {navLinks.map((nav) => {
    const Icon = nav.icon;
    const title = nav.title ;// ← assign the icon component
    return (

      
      
      <NavLink
             key={nav.id}
              style={{ textDecoration: "none" }}
              to={`/${title}`}
            >
                <li
        
        className={`${
          active === nav.title ? "text-white" : "text-secondary"
        } hover:text-white text-[18px] font-medium cursor-pointer flex items-center gap-2`}
        onClick={() => setActive(nav.title)}
      >
          <Icon size={22} />   {/* ✅ Correct way */}
          <span className="px-2">{nav.title}</span>
        
      </li>
            </NavLink>


    
    );
  })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
