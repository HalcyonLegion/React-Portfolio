import React from "react";

function HomePage() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4">Lee Webb</h1>
          <p className="lead">Full-Stack Web Developer</p>
          <p>Welcome to my Portfolio</p>
          <h2>About Me</h2>
          <p>
            I am an experienced Web Developer with a background in creating and maintaining dynamic
            websites and web applications. Skilled in various programming languages and frameworks,
            including HTML, CSS, JavaScript, Python, Flask, React and Node. A problem-solver with a
            passion for creating visually appealing, user-friendly and accessible websites. I possess a
            strong attention to detail, and I am deeply fascinated with the potential for new and emerging
            technologies, particularly AI. I am looking to bring my professional skills to a larger tech
            company with global reach.
          </p>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS / Bootstrap</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>SQL</li>
            <li>Python</li>
            <li>Flask</li>
            <li>Web Accessibility</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/Halcyonic-Clean.png`} alt="My headshot or avatar" />
        </div>
      </div>
    </section>
  );
}

export default HomePage;