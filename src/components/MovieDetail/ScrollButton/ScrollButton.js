import React, {useState, useEffect} from 'react'
import {IoIosArrowForward} from 'react-icons/io';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      if (window.scrollY > 300){
        setVisible(true)
      } 
      else if (window.scrollY  <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <button onClick={scrollToTop} className={`${visible ? `opacity-100` : `opacity-0 invisible`} fixed z-20 bottom-7 right-7 rounded-full p-[7px] flex items-center justify-center bg-[#343333] dark:bg-[#323F4B] active:bg-[#343333]/80  focus:ring focus:ring-violet-300 dark:text-white text-white shadow-lg transition-opacity`}>
          <IoIosArrowForward size={33} className='-rotate-90 m-auto'/>
      </button>
    );
  }

export default ScrollButton