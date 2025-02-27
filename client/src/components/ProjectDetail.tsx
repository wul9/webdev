import { useState, useEffect, Key } from "react";
import { Member, Project } from "../interfaces";
import MemberCard from "./MemberCard";
import AddButton from "./AddButton";

function ProjectDetail({ id }: { id: Key }) {
  const [projectMembers, setProjectMembers] = useState<Member[]>();

  const fetchMembers = async () => {
    const res = await fetch(`http://localhost:3000/projects/${id}/members`);
    const membersJson = await res.json();
    setProjectMembers(
      membersJson.map(
        (member: any) =>
          ({
            firstName: member.firstName,
            lastName: member.lastName,
            profilePic: member.profilePic,
            projects: member.projects,
            email: member.email,
            id: member._id,
          } as Member)
      )
    );
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    projectMembers && (
      <div className="project-details">
        <div className="member-search">
          <div className="card-header">
            <p>Members</p>
            <AddButton onClick={() => {}} />
          </div>
          <input
            className="member-searchbar"
            type="text"
            placeholder="search"
          />
        </div>
        <div className="members-display">
          {projectMembers.map((member) => (
            <MemberCard
              key={member.id}
              firstName={member.firstName}
              lastName={member.lastName}
              profilePic={member.profilePic}
            />
          ))}
        </div>
      </div>
    )
  );
}

export default ProjectDetail;
