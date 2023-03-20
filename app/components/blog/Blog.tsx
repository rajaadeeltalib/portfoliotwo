import MyTitle from "../roundDesign/home/Title"
import blogImageOne from "/public/assets/images/blogImgOne.jpg"
import blogImageTwo from "/public/assets/images/blogImgTwo.jpg"
import blogImageThree from "/public/assets/images/blogImgThree.jpg"
import BlogCard from "./BlogCard"

const Blog = () => {
  return (
    <div>
      <MyTitle title="Latest" subTitle="Posts" />
      <div className="grid grid-cols-2 gap-10">
      <div className="px-6 ">
      <BlogCard image={blogImageOne} title="September 16, 2020" subTitle="Ui & UX Conference at Lviv 2022" category="Travel"/>
      <BlogCard image={blogImageTwo} title="July 15, 2020" subTitle="How to become a creative designer" category="Documentation"/>
      <BlogCard image={blogImageThree} title="June 16, 2020" subTitle="Designers thoughts about mobile Ui templates" category="Travel"/>
      <BlogCard image={blogImageOne} title="April 11, 2020" subTitle="DesignerConference at Florida, USA 2020" category="Documentation"/>
      </div>
      <div className="px-6">
      <BlogCard image={blogImageOne} title="September 16, 2020" subTitle="Ui & UX Conference at Lviv 2022" category="Travel"/>
      <BlogCard image={blogImageTwo} title="July 15, 2020" subTitle="How to become a creative designer" category="Documentation"/>
      <BlogCard image={blogImageThree} title="June 16, 2020" subTitle="Designers thoughts about mobile Ui templates" category="Travel"/>
      <BlogCard image={blogImageOne} title="April 11, 2020" subTitle="DesignerConference at Florida, USA 2020" category="Documentation"/>
      </div>
      </div>
    </div>
  )
}

export default Blog