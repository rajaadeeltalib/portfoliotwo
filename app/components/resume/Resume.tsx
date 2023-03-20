import MyTitle from "../roundDesign/home/Title"
import Education from "./Education"
import Skills from "./Skills"


const Resume = () => {
  return (
    <section id="resume">
        <MyTitle title="My" subTitle="Resume"/>
        <Education />
        <MyTitle title="My" subTitle="Skills"/>
        <Skills />
    </section>
  )
}

export default Resume