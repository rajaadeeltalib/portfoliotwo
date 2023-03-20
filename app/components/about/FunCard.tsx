import { IconType } from "react-icons";

type FunCardProps = {
  icons: IconType[];
  des: string;
  
};

const FunCard = ({ icons, des }: FunCardProps) => {
  return (
    <div className="full ">
      <div className="w-full flex flex-col items-center gap-2 py-8 border-r-[1px] border-r-zinc-800 border-b-[1px] border-b-zinc-800">
      {icons.map((Icon, index) => (
        <span className="text-2xl text-designColor" key={index}>
          <Icon />
        </span>
      ))}
      <p className="text-base w-32 h-10 text-center text-gray-300 hover:text-white duration-200">{des}</p>
      </div>
    </div>
  )
}

export default FunCard