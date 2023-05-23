import React from "react";

function Project(props) {
  const { title, deployedUrl, repoUrl, imgSrc } = props.data;
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img className="card-img-top" src={imgSrc} alt="Screenshot or GIF of the application" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <a className="btn btn-primary btn-sm" href={deployedUrl}>Deployed Version</a>
          <a className="btn btn-secondary btn-sm" href={repoUrl}>GitHub Repository</a>
        </div>
      </div>
    </div>
  );
}

export default Project;