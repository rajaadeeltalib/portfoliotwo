import { BiCodeAlt } from "react-icons/bi"
import { BsTrophyFill } from "react-icons/bs"
import { IoLogoYoutube } from "react-icons/io"
import { SiAntdesign } from "react-icons/si"
import FunCard from "./FunCard"


const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-4 pb-10">
        <FunCard icons={[BsTrophyFill]} des="10 Awards Won"/>
        <FunCard icons={[SiAntdesign]} des="20 Finished Projects"/>
        <FunCard icons={[BiCodeAlt]} des="100 hours of coding"/>
        <FunCard icons={[IoLogoYoutube]} des="1.5k Subscription"/>
    </div>
  )
}

export default FunFact