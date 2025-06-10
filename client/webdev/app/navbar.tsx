export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", 
        height: "100px",
        backgroundColor: "white",
        padding: "0 20px",
      }}
    >
      {/* Logo on the left */}
      <img
        src="/logo.png"  
        alt="Logo"
        style={{ height: "80px", cursor: "pointer" }}
      />

      {/* Nav links on the right */}
      <div>
        <a href="/" style={{ fontFamily: 'Verdana', margin: "0 20px", color: "black", textDecoration: "none" }}>
          Home
        </a>
        <a href="/projects" style={{ fontFamily: 'Verdana', margin: "0 20px", color: "black", textDecoration: "none" }}>
          Projects
        </a>
        <a href="/team" style={{ fontFamily: 'Verdana', margin: "0 20px", color: "black", textDecoration: "none" }}>
          Team
        </a>
        <a href="/apply" style={{ fontFamily: 'Verdana', margin: "0 20px", color: "black", textDecoration: "none" }}>
          Apply
        </a>
        <a href="/login" style={{ fontFamily: 'Verdana', margin: "0 20px", color: "black", textDecoration: "none" }}>
          Login
        </a>
      </div>
    </nav>
  );
}