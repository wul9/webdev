export default function Navbar() {
    const headingStyle = {
        margin: '0 20px', 
        color: 'black', 
        textDecoration: 'none'
    }
  return (

      <nav
         style={{
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '60px',
        width: '100%',
        backgroundColor: 'white',
        fontFamily: 'Verdana',
        paddingRight: '20px'
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