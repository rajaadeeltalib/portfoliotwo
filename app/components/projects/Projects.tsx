
import workImageOne from "/public/assets/images/workImgOne.jpg"
import workImageTwo from "/public/assets/images/workImgTwo.jpg"
import workImageThree from "/public/assets/images/workImgThree.jpg" 
import workImageFour from "/public/assets/images/workImgFour.jpg"
import workImageFive from "/public/assets/images/workImgFive.jpg"
import workImageSix from "/public/assets/images/workImgSix.jpg"
import workImageSeven from "/public/assets/images/workImgSeven.jpg"
import workImageEight from "/public/assets/images/workImgEight.jpg"
import MyTitle from "../roundDesign/home/Title"
import ProjectCard from "./ProjectCard"

const Projects: React.FC = () => {
    
  return (
    <div>
        <MyTitle title="Recent" subTitle="Projects" />
    <div className="w-full grid grid-cols-2 gap-10">
        <div className="px-6">
        <ProjectCard title="Blog Website" category="Website" image={workImageEight}/>
        <ProjectCard title="Business Card Design" category="Design" image={workImageOne}/>
        <ProjectCard title="Infinity Logo" category="Logo" image={workImageTwo}/>
        <ProjectCard title="Mobile Application" category="Shopping" image={workImageFive}/>
        </div>
        <div className="px-6">
        <ProjectCard title="Shopping Website" category="E-Commerce" image={workImageFour}/>
        <ProjectCard title="Graphic Design" category="Design" image={workImageSix}/>
        <ProjectCard title="Ideas & Blog" category="Website" image={workImageEight}/>
        <ProjectCard title="ZOSS Logo" category="Logo" image={workImageSeven}/>
        </div>
    </div>
    </div>
  )
}

export default Projects