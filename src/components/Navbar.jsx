import "../styles/glitch.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const menuItems = ["Home", "Skills", "Academia", "Projects", "Socials"];

  let bg = "[#0a192f]"
  const path = useLocation().pathname;

  switch (path) {
    case '/cybersecurity':
      bg = "transparent"
      break;
  
    default:
      break;
  }


  return (
    <nav className={`w-full px-8 py-4 flex justify-between items-center sticky top-0 z-40 bg-${bg} backdrop-blur-md`}>
      <a href="/" className="text-3xl glitch-text" data-text="CyberDev">
        CyberDev
      </a>
      <div className="space-x-6">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`/#${item.toLowerCase()}`}
            className="text-lg glitch-text underline-offset-2 hover:underline"
            data-text={item}
          >
            {item}
          </a>
        ))}
        <Link to="/hireme" className="text-lg glitch-text underline-offset-2 hover:underline">Hire me</Link>
        <Link to="/contact" className="text-lg glitch-text underline-offset-2 hover:underline">Ping me</Link>
      </div>
    </nav>
  );
}
