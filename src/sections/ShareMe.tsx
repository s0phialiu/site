import { SiGmail, SiLinkedin, SiGithub, SiVsco } from "react-icons/si";
import sophiapic from "../assets/sophiapic.png";

function ShareMe() {
  return (
    <div className="">
    <div className="flex items-center justify-center mt-25">
      <img
        src={sophiapic}
        alt="A picture of me wearing a blue rugby style shirt against a sunset."
        className="w-80 h-80 rounded-full object-cover shadow-xl"
      />
    </div>
      <div className="mt-5 w-full flex justify-center gap-2">
        {[
          { href: "mailto:sophialiu548@gmail.com", icon: SiGmail },
          { href: "https://www.linkedin.com/in/s0phialiu/", icon: SiLinkedin },
          { href: "https://github.com/s0phialiu", icon: SiGithub },
          { href: "https://vsco.co/s0phialiu/gallery", icon: SiVsco },
        ].map(({ href, icon: Icon }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={30} className="inline mr-2 mb-5 fill-slate-800" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ShareMe;
