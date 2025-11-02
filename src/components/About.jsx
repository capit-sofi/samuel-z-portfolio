import React, { useState, useTransition }  from "react";
import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import portfolio from '../assets/portfolio.jpg'
import {XMarkIcon, Bars3Icon} from '@heroicons/react/24/solid'




const About = () => {
  const [read, setRead] = useState(false)
    
    
  return (
    <div className="h-screen flex flex-col align-middle mt-[70px] gap-x-20 lg:flex-row gap-y-20">
      <div>
      <motion.img src={portfolio} alt="portfolio.img"  variants={fadeIn("", "", 0.5, 1)} width={500} height={500} className="rounded-full" />

    </div>
    <div className=" ">
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <div className="relative">
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]  max-w-3xl leading-[30px]'
      >
       I am a professional architect with a Bachelor’s Degree in Architecture from Adama Science and Technology University,
       driven by a passion for innovative, sustainable, and contextually grounded design. My professional journey has been shaped
       by hands-on experience in architectural design, project management, and construction supervision across a diverse range
       of projects in Ethiopia—from residential and commercial...
         
      </motion.p>
         {read && <div className='  lg:w-full min-h-full top-0 left-0  rounded-3xl absolute justify-center mt-0  bg-blue-50'>
                <div onClick={()=> setRead(!read)} className='right-0 p-4 '><XMarkIcon className=' hover:w-8 hover:h-8 transition-all delay-200 duration-300 ease-in-out h-6 w-6 text-black border border-black rounded' /></div>
                <div className='text-black text-sm justify-center p-10'>
                    <p className=''><span>My name is Samuel Zenebe. </span><br/>
                       I am a professional architect with a Bachelor’s Degree in Architecture from Adama Science and Technology University,
                       driven by a passion for innovative, sustainable, and contextually grounded design. My professional journey has been shaped
                       by hands-on experience in architectural design, project management, and construction supervision across a diverse range
                       of projects in Ethiopia—from residential and commercial developments to national-level institutional and landscape works.<br/>
                       As the Founder and Principal Architect of Abyssinia Building Design and Consulting Office, based in Bishoftu, I lead a
                       multidisciplinary team dedicated to creating functional, aesthetic, and environmentally responsive designs. Our office has
                       established a reputation for quality and innovation in residential, commercial, institutional, and mixed-use developments,
                       as well as landscape and interior design projects that reflect modern standards while respecting Ethiopian cultural identity.<br/>
                       I had also Additional Certification and professional training<br/>
                       -	surveying and spatial information service from Bishoftu polytechnic college <br/>
                       -Information technology and engineering (SITE) from CISCO computer training, Addis Ababa university<br/>
                       •	Introduction to networking <br/>
                       •	Switch routing and wireless essential course<br/>
                       •	Enterprise networking, security and automation   <br/> 
                       -	Interior design course from Hanic interior design school <br/>

                    </p>
                </div>
             
             </div>}
      </div>

   
      
           
      
      
      <button onClick={()=> setRead(!read)} className=' hover:text-[#5cc389] mt-5 px-4 py-2 justify-center max-w-25 text-center cursor-pointer rounded-full border-2 text-sm border-white bg-transparent text-white flex items-center gap-2 '>Read-More</button>
    
     
      </div>
    
    </div>


  



  );
};

export default SectionWrapper(About, "about");
