import React from "react";

function ContactPage() {
  const cv = `${process.env.PUBLIC_URL}/assets/Lee Webb - Updated CV May 23 (Full Stack Web Developer).pdf`;

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Information</h2>
          <p>Email: leewebb55@hotmail.com</p>
          <a href={cv} target="_blank" rel="noopener noreferrer">CV (PDF)</a>
          <a href="https://github.com/HalcyonLegion" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <a href="https://www.linkedin.com/in/lee-webb-5415a05a/" target="_blank" rel="noopener noreferrer">LinkedIn Page</a>
        </div>
        <div className="col-md-6">
          {/* Contact form component will eventually go here */}
        </div>
      </div>
    </section>
  );
}

export default ContactPage;