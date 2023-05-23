import React from "react";
import yourImage from "../assets/images/leebrary.jpg";

function HomePage() {
  return (
    <div>
      <h1>Lee Webb</h1>
      <img src={yourImage} alt="Your headshot or avatar" />
      <p>Bringing your Vision to Life</p>
      <p>Welcome to my Portfolio</p>
    </div>
  );
}

export default HomePage;