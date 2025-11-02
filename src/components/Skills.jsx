import {React, useTransition, useState} from "react";
import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion";




import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { TAB_DATA } from '../components'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-full h-full rounded-2xl object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
   const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()
    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id)
        })

    }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Skilles.</h2>
      </motion.div>

    
      <div className="flex flex-col md:flex-row gap-20">

        <div>
            <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        An accomplished Architect and Project Manager with a strong passion for innovative and sustainable design. Skilled in leading projects from concept to completion, combining creativity with technical precision and strategic planning. Experienced in architectural design, construction supervision, and multidisciplinary team coordination.
      </motion.p>

        </div>
        <div>
                 <div className='flex flex-row justify-start mt-8 '>
                {TAB_DATA.map(({id, title})=>(
                    <button key={id} onClick={()=>handleTabChange(id)}>
                        <p className={`mr-3 font-semibold cursor-pointer hover:text-white ${tab === id ? "text-white" : "text-[#5cc389]"}`}>{title}</p>
                    </button>
                ))}
             </div>
             <div className='mt-6 '>
                <ul className='list-disc pl-2 text-base'>
                    {TAB_DATA.find((t)=> t.id === tab)?.content.map(
                        (item,index) =>(
                            <li key={index}>{item}</li>
                        )
                    )}
                </ul>
             </div>
        </div>



      </div>

   

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>


  



  );
};

export default SectionWrapper(About, "about");
