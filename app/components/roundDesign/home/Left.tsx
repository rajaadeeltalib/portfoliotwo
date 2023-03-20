"use client";
import Image from 'next/image'
import Profilepic from "/public/assets/images/bannerImg.png"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {BsCloudLightningFill, BsFacebook} from "react-icons/bs"
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai"
import {SiYoutubemusic} from "react-icons/si"
import {FiInstagram, FiMail, FiSend} from "react-icons/fi"

const Left = () => {
    const [text] = useTypewriter ({
        words: ["Professional Coder.", "Web 3.0 Developer.", "Metaverse Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className='w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow z-10'>
        <div className='w-full h-3/5'>
            <Image src={Profilepic} alt="Profile Picture" loading='eager' className='w-full h-full object-cover rounded-2xl'/>
        </div>
        <div className='w-full h-2/5'>
            {/* Contain the intro */}
            <div className='flex flex-col items-center gap-2 py-10'>
            <h1 className='text-textColor text-4xl font-semibold'>Adeel Talib</h1>
            <p className='text-base text-designColor tracking-wide'><span>{text}</span>
          <Cursor
            cursorBlinking={true}
            cursorStyle="|"
            cursorColor="#edff20"
          /></p>
            <div className='flex justify-center gap-2 mt-2'>
                <span className='hover:text-designColor duration-300 cursor-pointer text-xl'><FaGithub /></span>
                <span className='hover:text-designColor duration-300 cursor-pointer text-xl'><FaLinkedin /></span>
                <span className='hover:text-designColor duration-300 cursor-pointer text-xl'><SiYoutubemusic /></span>
                <span className='hover:text-designColor duration-300 cursor-pointer text-xl'><BsFacebook /></span>
                <span className='hover:text-designColor duration-300 cursor-pointer text-xl'><FiInstagram /></span>
                <span className='hover:text-designColor duration-300 cursor-pointer text-xl'><AiFillTwitterCircle /></span>
                <span className='hover:text-designColor duration-300 cursor-pointer text-xl'><FiMail /></span>
 
                
            </div>
        </div>
        {/* Button */}
        <div className='flex h-14'>
          <button className='w-1/2 h-9 flex justify-center borderRight items-center gap-2 border-t-[1px] border-t-zinc-800 tex-sm tracking-wide uppercase hover:text-designColor duration-300s'>Download CV <BsCloudLightningFill /></button>
          <button className='w-1/2 h-9 flex justify-center items-center gap-2 border-t-[1px] border-t-zinc-800 tex-sm tracking-wide uppercase hover:text-designColor duration-300s'>Contact Me <FiSend /></button>
        </div>
        </div>
    </div>
  )
}

export default Left