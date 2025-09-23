import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import "./Accomplishment.css";
import type { IconType } from "react-icons";

interface IAccomplishmentProps {
  title: string;
  description: string[];
  date: string;
  icon?: IconType;
  link?: string;
}

function Accomplishment(props: IAccomplishmentProps) {
  const [toggle, setToggle] = useState(false);

  const descriptionPortion = () => {
    return (
      <div className="ml-6">
        {props.description.length > 1 ? (
          <ul>
            {props.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        ) : (
          <p>{props.description[0]}</p>
        )}
        {props.link && (
          <a
            href={props.link}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-2">
        <div className="flex flex-row justify-items-center clickable" onClick={() => setToggle(!toggle)}>
          <FaAngleRight
            className={`inline mr-2 mt-1.75 fill-slate-800 rotate-animation ${
              toggle && "rotate-90"
            } `}
          />
          <h3 className="!mb-0">{props.title}</h3>
          {props.icon && <props.icon className="inline ml-2 mt-1.75 fill-slate-600" />}
        </div>
        <p className="italic text-slate-800 !mb-0 ml-6 lg:ml">{props.date}</p>
      </div>
      <div className={`slide-animation ${toggle && "show"}`}>
        {descriptionPortion()}
      </div>
    </div>
  );
}

export default Accomplishment;
