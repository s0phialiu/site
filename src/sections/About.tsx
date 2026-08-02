function About() {
    return (
    <div className="!mt-10 px-3 lg:col-span-2">
        <h1 className="font-semibold text-slate-700">
          Hi, I'm Sophia! 👋
        </h1>
        <p className="mt-3 text-md">
          I graduated with a B.S. in Computer Science from the University of Illinois Urbana-Champaign (2026). Currently, I'm a SWE at <strong>Databricks</strong> working on UI infra.
        </p>
        <p className="mt-3 text-md">
          In my free time, I love painting landscapes and exploring new hikes. Check out my photography {" "}   
          <a
            href="https://vsco.co/s0phialiu/gallery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>here!</strong>
          </a>
        </p>
    </div>
  )
}

export default About