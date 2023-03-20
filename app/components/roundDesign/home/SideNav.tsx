import SidenavTitle from "./SidenavTitle"



const SideNav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <li className="sidenavLi">Portfolio Page</li>
        <SidenavTitle title="P" subTitle="rojects" />
      </ul>
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Chatting Applications</li>
        <li className="sidenavLi">Porfolio Websites</li>
        <li className="sidenavLi">Backend Setup</li>
        <li className="sidenavLi">Amazon Clone</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">UI & UX Conference at Lviv 2022</li>
        <li className="sidenavLi">How to become a creative designer</li>
        <li className="sidenavLi">Designers thoughts about mobile UI templates</li>
        <li className="sidenavLi">Designer Conference at Florida, USA 2020</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+920 12345678</li>
        <li className="sidenavLi">abc@testing.com</li>
      </ul>
    </div>
  )
}

export default SideNav