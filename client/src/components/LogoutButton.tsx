function LogoutButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="logout-button">
      Log out
    </button>
  );
}

export default LogoutButton;
