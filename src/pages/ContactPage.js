import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

function ContactPage() {
  const cv = `${process.env.PUBLIC_URL}/assets/Lee Webb - CV.pdf`;

  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Information</h2>
          <p className="lead">Email: halcyonicdesign.ai@gmail.com</p>
          <p>
            <a
              className="btn btn-outline-danger"
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFilePdf} className="me-2" />
              CV (PDF)
            </a>
          </p>
          <p>
            <a
              className="btn btn-outline-dark"
              href="https://github.com/HalcyonLegion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="me-2" />
              GitHub Profile
            </a>
          </p>
          <p>
            <a
              className="btn btn-outline-primary"
              href="https://www.linkedin.com/in/lee-webb-5415a05a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="me-2" />
              LinkedIn Page
            </a>
          </p>
        </div>
        <div className="col-md-6">
          {/* Contact form component will eventually go here */}
        </div>
      </div>
    </section>
  );
}

export default ContactPage;