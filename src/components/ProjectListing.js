import React, { Component } from 'react';

class ProjectListing extends Component {

  render() {
    const projects = this.props.projects

    return (
      <div className="listing">
      <section className="project-container">
        <h1>Projects</h1>
          {projects.map(project => (
            <div className="project" key={project.title}>
            <h1 className="project-icon" > {project.icon} </h1>
              <h2>
                <a href={project.source} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h2>
              <p>{project.description}</p>
              <div className="buttons">
              {/* add back in after deployment */}
                {/* {project.site ? (
                  <a className="button" href={project.site} target="_blank" rel="noopener noreferrer">
                    site
                  </a>
                ) :
                <a className="button" href={project.demo} target="_blank" rel="noopener noreferrer">
                  demo
                </a>
                } */}
                
                <a className="button"  target="_blank" rel="noopener noreferrer" href={project.source}>
                  code
                </a>
              </div>
            </div>
          ))}
        </section>
        </div>
    );
  }
}

export default ProjectListing;

// <img src={project.icon} alt="icon-" className="project-icon" />
