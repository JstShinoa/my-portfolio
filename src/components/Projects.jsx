import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((proj, index) => (
        <div key={index} className="project">
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
        </div>
      ))}
    </section>
  );
}