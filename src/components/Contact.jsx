import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//template_plxupxm
//service_883ikg3
//_Nbo7va9Beur1VPSc

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_883ikg3',
        'template_plxupxm',
        {
          from_name: form.name,
          to_name: "samuel",
          from_email: form.email,
          to_email: "samuel24port@gmail.com",
          message: form.message,
        },
        '6Gl1qE79qd604RWEH'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. your message sent successfuly.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div>
       

       <motion.div 
      variants={slideIn("left", "tween", 0.2, 1)}
      className='mt-12 flex  flex-row gap-x-8'>
        <a href="" target="_blank"> <FaLinkedin className="w-10 h-10 text-sky-500 hover:text-sky-700 " /></a>
        <a href="https://t.me/Wahe_1" target="_blank">  <FaTelegram className="w-10 h-10 text-sky-500 hover:text-sky-700" /></a>
        <div className="flex flex-row hover:text-sky-700 space-x-2 border bg-transparent px-4 py-2 rounded-2xl">
          <a href="https://drive.google.com/file/d/16RheOy7Aopi63ag3M_MRV06q80sqXnJG/view?usp=drive_link" target="_blank" className=""> <FaFileAlt className="w-6 h-6 text-sky-500 hover:text-sky-700" />  </a>
          <a href="https://drive.google.com/file/d/16RheOy7Aopi63ag3M_MRV06q80sqXnJG/view?usp=drive_link" target="_blank" className="text-bold align-middle text-xl">RESUME  </a>
        </div>
      </motion.div>



     <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse `}
    >
      
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 mr-20  rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <p className={styles.sectionSubText}>Phone: +251 91 074 9868</p>
        <p className={styles.sectionSubText}>Email: samizene24@gmail.com</p>
        <p className={styles.sectionSubText}>Location: Bishoftu, Ethiopia</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 flex justify-center items-center md:h-[550px] h-[500px] xl:h-[800px] w-full overflow-visible'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    </div>
    

  );
};

export default SectionWrapper(Contact, "contact");





