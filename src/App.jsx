import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Coding from "./pages/Coding"
import Robotics from "./pages/Robotics"
import Cybersecurity from "./pages/Cybersecurity"
import Finance from "./pages/Finance"
import SoftSkills from "./pages/SoftSkills"
import Navbar from "./components/Navbar"
import CAD from "./pages/CAD"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import Hire from "./pages/Hire"

function App() {

  let bg = "white"
  const path = useLocation().pathname;

  switch (path) {
    case '/cybersecurity':
      bg = "black"
      break;
    case '/coding':
      bg = "[#0a192f]"
      break;
  
    default:
      break;
  }

  return (
    <div className={`bg-${bg}`}>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/coding" Component={Coding} />
        <Route path="/cybersecurity" Component={Cybersecurity} />
        <Route path="robotics" Component={Robotics} />
        <Route path="/cad" Component={CAD} />
        <Route path="/finance" Component={Finance} />
        <Route path="/softskills" Component={SoftSkills} />
        <Route path="/contact" Component={Contact}/>
        <Route path="/hireme" Component={Hire}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
