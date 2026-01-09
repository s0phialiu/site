import { SiGmail, SiLinkedin, SiGithub, SiVsco } from "react-icons/si";

function Footer() {
  return (
    <footer className="mt-20 pb-10 text-sm text-slate-500 px-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex gap-4">
            <a href="mailto:sophialiu548@gmail.com"><SiGmail size={20} /></a>
            <a href="https://www.linkedin.com/in/s0phialiu/"><SiLinkedin size={20} /></a>
            <a href="https://github.com/s0phialiu"><SiGithub size={20} /></a>
            <a href="https://vsco.co/s0phialiu/gallery"><SiVsco size={20} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
