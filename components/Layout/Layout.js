import dynamic from "next/dynamic"
const DynamicNavbar = dynamic(() => import("../Navbar/Navbar"))
const DynamicFooter = dynamic(() => import("../Footer/Footer"))
const DynamicGoTop = dynamic(() => import("../GoTop/GoTop.js"))

const Layout = ({ children }) => {
  return (
    <>
      <DynamicNavbar />
      {children}
      <DynamicFooter />
      <DynamicGoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  )
}

export default Layout
