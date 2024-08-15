function AddButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="add-button">
      <span className="material-symbols-outlined">add</span>
    </button>
  );
}

export default AddButton;
