import { MdWork } from "react-icons/md"
import ResumeCard from "./ResumeCard"
import ResumeTitle from "./ResumeTitle"

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
        <div className="col-span-4">
            <ResumeTitle title="Experience" icons={[MdWork]}/>
            <ResumeCard 
            badge="2013-Present"
            title="Web Developer"
            subTitle="Facebook Inc."
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus ipsum ea beatae illum a!"
            />
            <ResumeCard 
            badge="2011-2012"
            title="Senior Developer"
            subTitle="Google Inc."
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus ipsum ea beatae illum a!"
            />
            <ResumeCard 
            badge="2009-2010"
            title="Front-end Developer"
            subTitle="ReactBD.com."
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus ipsum ea beatae illum a!"
            />         
        </div>
        <div className="w-full h-full flex justify-center items-center">
            <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
        </div>
        <div className="col-span-4">
        <ResumeTitle title="Experience" icons={[MdWork]}/>
            <ResumeCard 
            badge="2012-2014"
            title="North South University"
            subTitle="Dhaka"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus ipsum ea beatae illum a!"
            />
            <ResumeCard 
            badge="2010-2012"
            title="North South University"
            subTitle="Dhaka"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus ipsum ea beatae illum a!"
            />
            <ResumeCard 
            badge="2008-2010"
            title="North South University"
            subTitle="Dhaka"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae natus ipsum ea beatae illum a!"
            />  
        </div>
    </div>
  )
}

export default Education