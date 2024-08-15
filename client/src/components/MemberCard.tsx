import { Member } from "../interfaces.tsx";

function MemberCard({
  firstName,
  lastName,
  profilePic,
}: {
  firstName: string;
  lastName: string;
  profilePic: string;
}) {
  return (
    <div className="member-card">
      <div className="member-profile-pic">
        <img src={profilePic} />
      </div>
      <p className="member-name">{firstName + " " + lastName}</p>
    </div>
  );
}

export default MemberCard;
