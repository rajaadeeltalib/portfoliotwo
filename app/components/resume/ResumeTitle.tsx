import { IconType } from "react-icons";

type ResumeTitleProps = {
    icons: IconType[];
    title: string;
    
  };


const ResumeTitle = ({title, icons}: ResumeTitleProps) => {
  return (
    <div className="flex items-center gap-2 py-3 border-b-[1px] border-b-zinc-800">
        {icons.map((Icon, index) => (
        <span className="text-4xl text-designColor mb-2" key={index}>
          <Icon />
        </span>        
      ))}
      <h1 className="text-lg text-gray-300 uppercase font-medium ">{title}</h1>
    
    </div>
  )
}

export default ResumeTitle