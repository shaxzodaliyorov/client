import {
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  const share = [
    {
      link: "https://t.me/shaxzod_0206",
      icon: <FaTelegram size={"1.5rem"} />,
    },
    {
      link: "https://t.me/shaxzod_0206",
      icon: <FaInstagram size={"1.5rem"} />,
    },
    {
      link: "https://t.me/shaxzod_0206",
      icon: <FaYoutube size={"1.5rem"} />,
    },
    {
      link: "https://t.me/shaxzod_0206",
      icon: <FaLinkedin size={"1.5rem"} />,
    },
    {
      link: "https://t.me/shaxzod_0206",
      icon: <FaGithub size={"1.5rem"} />,
    },
  ];

  return (
    <footer className="w-[100%] bg-[#4b4b4b]">
      <section>
        <div className="w-[100%] flex justify-center my-4">
          <ul className="w-[20%] flex justify-between share_List">
            {share.map(({ link, icon },index) => {
              return (
                <li key={index} >
                  <a target="_blank" href={link}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <div className="w-[100%] py-2 flex justify-center items-center">
          <p className="text-[#fff] text-center">
            © Copyright @ 2022{" "}
            <span className="text-[#00d073]">By Mr. Full-stack Developer</span>{" "}
            | All Rights Reserved!
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
