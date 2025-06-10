import { title } from "process";
import Navbar from "./navbar";
import { text } from "stream/consumers";
export default function Home() {

  const titleStyle = {
    fontSize: '2.5rem', 
    fontWeight: '900', 
    color: 'black', 
    fontFamily: 'Verdana',
    marginBottom: '1rem'
  };
    const subStyle = {
    fontSize: '1.8rem', 
    fontWeight: '600', 
    color: 'black', 
    fontFamily: 'Verdana'
  };

  const textStyle = {
    fontSize: '1rem', 
    fontWeight: '300', 
    color: 'black', 
    fontFamily: 'Verdana'
  };



  return (
    <>
    <Navbar />

    <div 
    style= {{
      height: 'calc(300vh - 60px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'white',
      color: 'white'
    }}>
      <h1 style={titleStyle}>
        Design and Develop.
      </h1>
      <h1 style={subStyle}>
        An inclusive technology club for self-driven
      </h1>
      <h1 style={subStyle}>
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
      <div/>

      <div
      style= {{
      marginTop: '50px',
      paddingTop: '60px',
      paddingBottom: '60px',
      paddingLeft: '60px',
      paddingRight: '60px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      color: 'white'
    }}>

      <h1 style = {subStyle}>
        WebDev's Mission
      </h1>
      <h2 style = {textStyle}>
        Since 2021, we have strived to include Cornellians of all backgrounds, skill levels, and interests in the web development space. 
      </h2>
      <h2 style = {textStyle}>
        Through semester-long projects and social events, members sharpen their technical and collabrative skills while bettering the community.
      </h2>
      </div>

      <h1 
        style = {{
        fontSize: '1.8rem', 
        fontWeight: '600', 
        color: 'black', 
        fontFamily: 'Verdana',
        marginTop: '30px',
        }}>
        Our Core Values
      </h1>

       <div
      style= {{
      marginTop: '50px',
      padding: '60px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      color: 'white',
      gap: '40px'
    }}>

  <div>
    <h2 style={{ 
      fontSize: '1.8rem', 
      fontWeight: '600', 
      color: 'black', 
      fontFamily: 'Verdana',
      marginBottom: '10px' 
      }}>
      Inclusive
        
        </h2>
    <img src="/inclusive.png" alt="Inclusive" style={{ width: '300px', height: 'auto' }} />
  </div>
    
     <div>
    <h2 style={{ 
      fontSize: '1.8rem', 
      fontWeight: '600', 
      color: 'black', 
      fontFamily: 'Verdana',
      marginBottom: '10px' 
      }}>
        Innovative
        </h2>
    <img src="/innovative.png" alt="Innovative" style={{ width: '300px', height: 'auto' }} />
  </div>

   <div>
    <h2 style={{ 
      fontSize: '1.8rem', 
      fontWeight: '600', 
      color: 'black', 
      fontFamily: 'Verdana',
      marginBottom: '10px' 
      }}>
        Iterative
      </h2>
    <img src="/iterative.png" alt="Iterative" style={{ width: '300px', height: 'auto' }} />
  </div>

      </div>

      <footer
      style= {{
      marginTop: '50px',
      paddingTop: '60px',
      paddingBottom: '100px',
      paddingLeft: '300px',
      paddingRight: '300px',
    
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'right',
      alignItems: 'right',
      textAlign: 'right',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      color: 'white'
    }}>

      <h1 style = {titleStyle}>
        Want to join the team?
      </h1>
      <h2 style = {textStyle}>
        Apply to be a part of the family. Experience is not required, just creative juice and the excitement to learn!
      </h2>

      <button
    style={{
        padding: '10px 20px',
        width: '150px',
        fontSize: '1rem',
        fontWeight: '600',
        backgroundColor: 'gray',
        color: 'white',
        borderRadius: '5px',
        marginTop: '20px',
        cursor: 'pointer',
      }}
    >
      Apply Now
      </button>

      </footer>
      </div>
      </>
      
  );
}
