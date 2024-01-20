import React from "react";

function HomePage() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-5">
          <h1 className="display-4">Lee Webb</h1>
          <p className="lead">Full-Stack Web Developer</p>
          <p>Welcome to my Portfolio</p>
          <h2 className="mt-4 mb-2">About Me</h2>
          <p>
          I am an experienced Web Developer with a background in creating and maintaining dynamic websites
          and web applications. I have had a rewarding multi-disciplinary career from Customer Service to Data
          and Business Analytics. I am now looking for my next challenge and to tackle something I am truly
          passionate about. I am skilled in various programming languages and frameworks, including HTML,
          CSS, JavaScript, Python, Flask and React. I enjoy problem solving and creating accessible websites
          that are visually appealing and user-friendly. I possess strong attention to detail, and I am deeply
          fascinated with the potential for new and emerging technologies, particularly AI. I am looking for more freelancing/agency
          work or open to bringing my professional skills to a larger organisation.
          </p>
          <h2 className="mt-4 mb-2">Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS (Bootstrap & Tailwind)</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Flask</li>
            <li>API's</li>
            <li>Amazon Web Services</li>
            <li>JEST Testing</li>
            <li>SQL</li>
            <li>Power BI</li>
            <li>Artificial Intelligence</li>
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