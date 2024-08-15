import { Key, useEffect, useState } from "react";
import { Project } from "../interfaces.tsx";

// async function fetchProject(id: string) {
//   const res = await fetch(`http://localhost:3000/projects/${id}`);
//   const project = await res.json();
//   return project;
// }

function ProjectCard({ id }: { id?: Key }) {
  const [project, setProject] = useState<Project>();
  const fetchProject = async () => {
    const res = await fetch(`http://localhost:3000/projects/${id}`);
    const projectJson = await res.json();
    setProject({
      name: projectJson.name,
      progress: projectJson.progress,
      tasks: projectJson.tasks,
      id: projectJson._id,
      members: projectJson.members,
    } as Project);
  };

  useEffect(() => {
    id ? fetchProject() : null; //change the route to create a new blank project card
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/projects/${id}`).then( (res) => res.json()).then( (data) => setProject(data));
  //   });

  return (
    project && (
      <div className="project-card">
        <div className="project-card-right">
          <form onSubmit={(value) => console.log(value)}>
            <p className="project-name">{project.name}</p>
          </form>
          <p className="project-progress">{project.progress}</p>
        </div>
      </div>
    )
  );
}

export default ProjectCard;
