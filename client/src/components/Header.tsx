import LogoutButton from "./LogoutButton";

function Header({ profilePic }: { profilePic: any }) {
  return (
    <div className="header">
      <div className="left-end">
        <img
          className="webdev-logo"
          src="https://framerusercontent.com/images/rC5SjqIE7DH9o7n78Ul7E9Wsoc.svg"
        />
      </div>
      <div className="right-end">
        <img className="profile-pic" src={profilePic} />
        <LogoutButton
          onClick={() => (window.location.href = "http://localhost:5173")}
        />
      </div>
    </div>
  );
}

export default Header;
