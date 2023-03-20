

const AboutMe = () => {
  return (
    <div className="flex pb-6">
        <div className="w-1/2 text-zinc-400 p-6 borderRight flex flex-col">
            <div className="py-6">
            <h2 className="font-semibold mb-1 text-lg">Hello! I&apos;m Adeel Talib</h2>
            <p className="text-base leading-6">Web 3.0 & Metaverse Developer from Rawalpindi, Pakistan. I have rich experience in Web Development and Designing, also I am good at Wordpress, ReactJs, Next.Js, Figma etc. I love to talk with you about our unique.</p>
            </div>
        </div>
        <div className="w-1/2 p-6">
            <ul>
                <li className="aboutRightLi"><span className="aboutRightLiSpan">Age:</span>24</li>
                <li className="aboutRightLi"><span className="aboutRightLiSpan">Residence:</span>Pakistan</li>
                <li className="aboutRightLi"><span className="aboutRightLiSpan">Freelance:</span>Avilable</li>
                <li className="aboutRightLi"><span className="aboutRightLiSpan">Adress:</span>Rawalpindi, Pakistan</li>
            </ul>
        </div>
    </div>
  )
}

export default AboutMe