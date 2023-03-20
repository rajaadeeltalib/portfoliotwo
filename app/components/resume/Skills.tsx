import { FaFlag } from "react-icons/fa"
import { SiArtstation } from "react-icons/si"
import ResumeTitle from "./ResumeTitle"


const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
        <div className="col-span-4">
            <ResumeTitle title="Design" icons={[SiArtstation]}/>
            <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Web Development</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Web Design</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Mobile Application</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">UI Design</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
            </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
         <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>   
        </div>
        <div className="col-span-4">
        <ResumeTitle title="Languages" icons={[FaFlag]}/>
            <div className="py-4">
            <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">English</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Urdu</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Punjabi</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Arabic</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[70%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills