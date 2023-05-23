import React from "react";

function HomePage() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-4">Lee Webb</h1>
          <p className="lead">Bringing Your Vision to Life</p>
          <p>Welcome to my Portfolio</p>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/leebary.png`} alt="Your headshot or avatar" />
        </div>
      </div>
    </section>
  );
}

export default HomePage;