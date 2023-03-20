
import { IconType } from "react-icons";

type ServicesCardProps = {
  icons: IconType[];
  title: string;
  subTitle: string;
};

const ServicesCard = ({ icons, title, subTitle }: ServicesCardProps) => {
  return (
    <div className="py-8 px-6 flex flex-col items-center gap-2 borderRight borderBottom">
      {icons.map((Icon, index) => (
        <span className="text-4xl text-designColor mb-2" key={index}>
          <Icon />
        </span>
      ))}
      <h2 className="font-titleFont text-lg font-semibold">{title}</h2>
      <p className="text-base text-center text-zinc-400 px-6">{subTitle}</p>
    </div>
  );
};

export default ServicesCard;
