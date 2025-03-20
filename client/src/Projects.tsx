import Header from "./components/Header";
import ProjectDetail from "./components/ProjectDetail";
import { useState, useEffect } from "react";

import "./styles/Header.css";
import "./styles/ProjectDisplay.css";
import "./styles/ProjectDetail.css";
import React from "react";
import ReactDOM from "react-dom/client";
import ProjectDisplay from "./components/ProjectDisplay";
import { Member, Project } from "./interfaces";
// import "bootstrap/dist/css/bootstrap.min.css";

function getAuthCode() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  return code;
}

function ProjectPage() {
  const [memberData, setMemberData] = useState<Member>();
  let [selectedProject = 0, setSelectedProject] = useState<number>();

  const fetchMember = async (requestType: string) => {
    const res = await fetch("http://localhost:3000/projects", {
      method: requestType,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ authCode: getAuthCode() }),
    });
    const memberJson = await res.json();
    setMemberData({
      firstName: memberJson.firstName,
      lastName: memberJson.lastName,
      profilePic: memberJson.profilePic,
      projects: memberJson.projects,
      email: memberJson.email,
      id: memberJson._id,
    } as Member);
  };

  useEffect(() => {
    const performanceEntries = performance.getEntriesByType("navigation");
    (performanceEntries[0] as PerformanceNavigationTiming).type === "reload"
      ? fetchMember("GET")
      : fetchMember("POST");
    // window.addEventListener("load", () => {
    //   fetchMember("GET");
    //   return;
    // });
  }, []);

  return (
    memberData && (
      <>
        <Header profilePic={memberData.profilePic} />
        <div className="project-container">
          <ProjectDisplay projects={memberData.projects} />
          <ProjectDetail id={memberData.projects[selectedProject]} />
        </div>
      </>
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProjectPage />
  </React.StrictMode>
);

export default ProjectPage;
