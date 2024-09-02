import React from 'react';
import './Projects.css'; // Ensure this path is correct

const projects = [
  {
    title: 'QGEN',
    description: 'An automated system generating question papers in seconds with minimal effort. Enabled faculty to customize content, modules, and difficulty, reducing prep time by 70%. Developed using Java, Servlet, and SQL.',
  },
  {
    title: 'BookShelfKeeper',
    description: 'A web app enabling users to add, store, and display book details in a table format. Implemented functionality to delete items for easy customization. Developed using JavaScript, React, HTML, CSS, and SQL.',
  },
  // Add more projects as needed
];

const ProjectCard = ({ title, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="card-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
