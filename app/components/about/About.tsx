import MyTitle from "../roundDesign/home/Title"
import AboutMe from "./AboutMe"
import FunFact from "./FunFact"
import MyServices from "./MyServices"


const About = () => {
  return (
    <section id="about" className="w-full">
        <MyTitle title="About" subTitle="Me"/>
        <AboutMe />
        <MyTitle title="My" subTitle="Services"/>
        <MyServices />
        <MyTitle title="Fun" subTitle="Fact"/>
        <FunFact />
    </section>
  )
}

export default About