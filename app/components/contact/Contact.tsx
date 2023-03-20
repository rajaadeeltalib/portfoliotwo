"use Client"
import React, { useState } from 'react';
import { FiSend } from "react-icons/fi";
import MyTitle from "../roundDesign/home/Title";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
        // Eror Messages Start here
        const [errClientName, seterrClientName] = useState(false);
        const [errEmail, seterrerrEmail] = useState(false);
        const [errMessages, seterrerrMessages] = useState(false);
        // Error Messages End here
  const [successMsg, setSuccessMsg] = useState("");
        // Email validation start here
        

  const handleName=(e:any)=>{
    setClientName(e.target.value)
    seterrClientName(false)
  }
  const handleEmail=(e:any)=>{
    setEmail(e.target.value)
    seterrerrEmail(false)
  }
  const handleMessages=(e:any)=>{
    setMessages(e.target.value)
    seterrerrMessages(false)
  }

  const handleSend=(e: any)=>{    
    e.preventDefault();
    if(!clientName){
      seterrClientName(true)
    }
    if(!email){
      seterrerrEmail(true)
    }
    if(!messages){
      seterrerrMessages(true)
    }
    if(clientName && email && messages){
      
      setClientName("")
      setEmail("")
      setMessages("")
    }
  }
  return (
    <div>
      <MyTitle title="Get" subTitle="in Touch" />
      <div className="p-6 flex justify-between gap-20">
        <div className="w-1/2">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Address:
            </span>
            Muscat, Oman
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Phone:
            </span>
            +968 97859628
          </p>
        </div>
        <div className="w-1/2">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Email:
            </span>
            test@test.com
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Freelance:
            </span>
            Available
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <MyTitle title="Send" subTitle="Messages" />
        <form className="p-6 flex flex-col gap-6">
          <div className="w-full flex gap-10 justify-between">
            <input
            onChange={handleName}
            value={clientName}
              className={`${errClientName?"border-red-600 focus-visible:border-red-600":"border-zinc-600 focus-visible:border-designColor"}w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300`}
              type="text"
              placeholder="Full Name"
            />            
            <input
            onChange={handleEmail}
            value={email}
            className={`${errEmail?"border-red-600 focus-visible:border-red-600":"border-zinc-600 focus-visible:border-designColor"}w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300`}
              type="email"
              placeholder="Email Address"
            />
          </div>
          <textarea
          onChange={handleMessages}
          value={messages}
          className={`${errMessages?"border-red-600 focus-visible:border-red-600":"border-zinc-600 focus-visible:border-designColor"}w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300 resize-none`}
            placeholder="Your Message"
            cols={30}
            rows={4}
          ></textarea>
          <button onClick={handleSend} className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200">Send Message <span className="mt-1 text-designColor">{<FiSend />}</span></button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
