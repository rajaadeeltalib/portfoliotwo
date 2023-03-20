
import { AiTwotoneAppstore } from "react-icons/ai"
import { BiCodeAlt } from "react-icons/bi"
import { FaAppStoreIos } from "react-icons/fa"
import { SiAntdesign } from "react-icons/si"
import ServicesCard from "./ServicesCard"



const MyServices = () => {
  return (
    <div className="grid grid-cols-2">
        <ServicesCard icons={[BiCodeAlt]}
        title="Web Development"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum vero ad quaerat totom soluta?"
        />
        <ServicesCard icons={[SiAntdesign]}
        title="Web Design"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum vero ad quaerat totom soluta?"/>
        <ServicesCard icons={[AiTwotoneAppstore]}
        title="Mobile Application"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum vero ad quaerat totom soluta?"/>
        <ServicesCard icons={[FaAppStoreIos]}
        title="SEO"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum vero ad quaerat totom soluta?"/>
       
    </div>
  )
}

export default MyServices