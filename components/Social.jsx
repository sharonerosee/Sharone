import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sharonerosee" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/sharoneangelica " },
  { icon: <FaInstagram />, path: "https://www.instagram.com//sharangelica" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} 
        href={item.path} 
        className={iconStyles}
        target="_blank"
        rel="noopener noreferrer">
            {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
