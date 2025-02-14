import React from 'react'
import Logo from '../assets/footerLogo.png'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import Img1 from '../assets/footerImg1.png'
import Img2 from '../assets/footerImg2.png'
import Img3 from '../assets/footerImg3.png'
import Img4 from '../assets/footerImg4.png'
import Img5 from '../assets/footerImg5.png'
import Img6 from '../assets/footerImg6.png'


function Footer() {
  return (
    <footer className='w-full h-auto bg-[#0553B0] flex flex-col py-10 px-5 gap-7 md:gap-14 xl:gap-16 lg:px-10'>
      <div className='w-full h-auto flex flex-col gap-8 sm:flex-row'>
        <div className='w-full h-auto flex justify-center sm:w-[30%] lg:w-[20%]'>
          <img src={Logo} alt="logo" className='w-40 sm:h-20' />
        </div>
        <div className='w-full h-auto sm:w-[60%] lg:w-[70%] lg:pb-8'>
          <p className='text-white font-semibold text-xl sm:text-2xl lg:text-4xl xl:text-5xl xl:leading-16'>Your partner in enterprise software development, delivering scalable AI and data solutions that drive lasting business impact.</p>
        </div>
      </div>
      <div className='w-full h-auto flex flex-col gap-8 sm:flex-row'>
        <div className='w-full h-auto flex flex-col text-white font-semibold justify-center items-center sm:w-[30%] lg:w-[20%] sm:justify-start md:items-start md:text-xl'>
          <span>Offices:</span>
          <span>Aliso Viejo, CA</span>
          <span>Warsaw, PL</span>
          <span>Kyiv, UA</span>
        </div>
        <div className='w-full h-auto flex flex-col gap-2 text-white font-semibold sm:w-[60%] lg:w-[70%] lg:text-xl'>
          <p className='text-center sm:text-start'>hello@kaumodaki.ai.com</p>
          <p className='text-center sm:text-start'>+1 123 456 7895</p>
          <div className='w-full h-auto flex justify-center gap-2 sm:justify-start lg:mt-2 md:gap-5'>
            <RiInstagramFill size={20} className='lg:size-8' />
            <FaFacebook size={20} className='lg:size-8' />
            <FaLinkedinIn size={20} className='lg:size-8' />
            <RiTwitterXLine size={20} className='lg:size-8' />
            <FaYoutube size={20} className='lg:size-8' />
          </div>
        </div>
      </div>
      <div className='w-full h-auto flex flex-col gap-8 sm:flex-row'>
        <div className='w-full h-auto flex flex-col text-white font-semibold justify-center items-center sm:w-[30%] lg:w-[20%] sm:justify-start sm:items-start md:text-xl'>
          <span>Privacy Policy</span>
          <span>©2025 kaumodaki</span>
        </div>
        <div className='w-full h-auto flex flex-wrap justify-center gap-6 items-center sm:w-[60%] lg:justify-start lg:gap-10 xl:gap-16 2xl:gap-20 lg:w-[70%] lg:text-xl'>
          <img src={Img1} alt="img" className='w-24' />
          <img src={Img2} alt="img" className='w-24' />
          <img src={Img3} alt="img" className='w-24' />
          <img src={Img4} alt="img" className='w-24' />
          <img src={Img5} alt="img" className='w-24' />
          <img src={Img6} alt="img" className='w-24' />
        </div>
      </div>
    </footer>
  )
}

export default Footer