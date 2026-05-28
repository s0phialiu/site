import databricks from "../assets/databricks.png";
import microsoft from "../assets/microsoft.png";
import jd from "../assets/jd.png";
import uiuc from "../assets/uiuc.png";

type TimelineItem = {
  company: string;
  title: string;
  year: number;
  href?: string;         
  logoSrc: string;       
  logoAlt?: string;
};

const items: TimelineItem[] = [
  {
    company: "Incoming SWE @ Databricks",
    title: "Product infra",
    year: 2026,
    href: "https://databricks.com",
    logoSrc: databricks,
    logoAlt: "Databricks",
  },
  {
    company: "SWE Intern @ Microsoft",
    title: "AI agents for static analysis",
    year: 2025,
    href: "https://microsoft.com",
    logoSrc: microsoft,
    logoAlt: "MSFT",
  },
  {
    company: "SWE Intern @ Microsoft",
    title: "LLM fuzzer benchmarking",
    year: 2024,
    href: "https://microsoft.com",
    logoSrc: microsoft,
    logoAlt: "MSFT",
  },
  {
    company: "Security Intern @ John Deere",
    title: "Security automation",
    year: 2023,
    href: "https://johndeere.com",
    logoSrc: jd,
    logoAlt: "JD",
  },
  {
    company: "UIUC",
    title: "B.S. in Computer Science",
    year: 2022,
    href: "https://illinois.edu/",
    logoSrc: uiuc,
    logoAlt: "UIUC",
  },
];

export function NewResume() {
  return (
    <div className="relative rounded-2xl bg-white">
        <h4 className="font-bold text-slate-700 px-3 mb-3">Work Experience</h4>
      <ul className="relative divide-y divide-slate-300 list-none p-0 m-0">
        {items.map((item) => {
          const Row = (
            <div className="flex items-center justify-between gap-5 py-5 px-2">
              <div className="flex min-w-0 items-center gap-4">
                <img
                  src={item.logoSrc}
                  alt={item.logoAlt ?? item.company}
                  className="h-6 w-6 object-cover"
                />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-md text-slate-900">
                    <span className="font-medium underline underline-offset-4 decoration-slate-300">
                      {item.company}
                    </span>
                    <span className="text-slate-500">{item.title}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 text-md text-slate-500">{item.year}</div>
            </div>
          );

          return (
            <li className="list-none marker:content-none" key={`${item.company}-${item.year}`}>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition hover:bg-slate-50"
                >
                  {Row}
                </a>
              ) : (
                <div className="transition hover:bg-slate-50">{Row}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>

  );
}

export default NewResume
