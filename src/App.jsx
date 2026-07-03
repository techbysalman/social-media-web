import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaGlobe,
  FaGoogle,
  FaChevronRight,
} from "react-icons/fa";

import logo from "./assets/logo.png";
import "./index.css";

function App() {
  const links = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/919947120999",
      color: "#00b31e",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/raaz_holidays?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "#e4405f",
    },
    {
      name: "Google Review",
      icon: <FaGoogle />,
      url: "https://share.google/bzEqGq0iZKyhFdwn8",
      color: "#4285f4",
    },
    {
      name: "Website",
      icon: <FaGlobe />,
      url: "https://www.raazholidays.com/home",
      color: "#0984ff",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/share/1ADu4CHD8R/",
      color: "#0866ff",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/raaz-holidays?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      color: "#0a66c2",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@RAAZHOLIDAYSOFFICIAL",
      color: "#ff0000",
    },
   
  ];

  return (
    <div className="page">
      <div className="container">
        <img src={logo} alt="Company Logo" className="logo" />

        <div className="buttons">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              style={{
                borderColor: link.color,
                color: link.color,
              }}
            >
              <span className="icon">{link.icon}</span>
              <span className="title">{link.name}</span>
              <FaChevronRight className="arrow" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;