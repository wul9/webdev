export default function Navbar() {
    const headingStyle = {
        margin: '0 20px', 
        color: 'black', 
        textDecoration: 'none'
    }
  return (

      <nav
         style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px',
        backgroundColor: 'white',
        color: 'white',
        fontFamily: 'Verdana',
      }}
    >
      <a href="/" style={headingStyle}>Home</a>
      <a href="/projects" style={headingStyle}>Projects</a>
      <a href="/team" style={headingStyle}>Team</a>
      <a href="/apply" style={headingStyle}>Apply</a>
      <a href="/login" style={headingStyle}>Login</a>
      </nav>
    
  );
}