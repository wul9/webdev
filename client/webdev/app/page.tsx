import Navbar from "./navbar";
export default function Home() {
    const textStyle = {
    fontSize: '2rem', 
    fontWeight: '800', 
    color: 'black', 
    backgroundColor: 'white',
    fontFamily: 'Verdana'
  };

  return (
    <>

    <Navbar />


    <div style= {{
    height: 'calc(100vh - 60px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    color: 'white'
    }}>
      <h1 style={textStyle}>
        An inclusive technology club for self-driven
      </h1>
      <h1 style={textStyle}>
        web designers, developers, and enthusiasts
      </h1>


    <button
    style={{
        padding: '10px 20px',
        fontSize: '1rem',
        fontWeight: '600',
        backgroundColor: 'gray',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        marginTop: '20px',
        cursor: 'pointer',
      }}
    >
      View our projects
      </button>
          </div>
      </>
  );
}
