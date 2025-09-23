function About() {
    return (
    <div className="!mt-10">
        <p className="!mb-2">Hello!</p>
        <h1 className="">
          I'm Sophia Liu 👋
        </h1>
        <p className="text-xl italic text-slate-800">
            I am a senior at the University of Illinois at Urbana-Champaign, pursuing a Bachelor of Science in Computer Science.
        </p>
        <p>
        I have a passion for systems programming and cybersecurity, and I enjoy working on projects that challenge me to learn and grow in these fields. In my free time, I enjoy painting and taking landscape/wildlife photography. Check out some of my photos from hikes{" "}   
        <a
          href="https://vsco.co/s0phialiu/gallery"
          target="_blank"
          rel="noopener noreferrer"
        >
           <strong>here!</strong>
        </a>
        </p>
        <p>I'm currently looking for full-time Software Engineer or Security Engineer roles. Feel free to reach out through email or LinkedIn!</p>
    </div>
  )
}

export default About