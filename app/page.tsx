import RoundFive from "./components/roundDesign/RoundFive";
import RoundFour from "./components/roundDesign/RoundFour";
import RoundOne from "./components/roundDesign/RoundOne";
import RoundThree from "./components/roundDesign/RoundThree";
import { RoundTwo } from "./components/roundDesign/RoundTwo";
import Hometwo from "./Hometwo";

export default function Home() {
  return (
    <div className="w-full h-screen font-bodyfont text-textColor bg-black relative overflow-hidden">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Hometwo />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10 ">
       <RoundOne />
       <RoundTwo />
       <RoundThree />
       <RoundFour />
       <RoundFive />
      </div>
    </div>
  );
}
