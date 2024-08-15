import { Member, Project } from "../interfaces";
import ProjectCard from "./ProjectCard";
import AddButton from "./AddButton";

function ProjectDisplay({ projects }: { projects: string[] }) {
  return (
    <div className="project-display">
      <div className="project-search">
        {/* fix the lexbos on the search display */}
        <div className="card-header">
          <p className="title">Projects</p>
          <AddButton onClick={() => {}} />
        </div>
        <form
          onSubmit={() => {
            console.log("hi hi hi");
          }}
        >
          <input
            type="search"
            placeholder="search"
            className="project-searchbar"
          />
        </form>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project} id={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectDisplay;
