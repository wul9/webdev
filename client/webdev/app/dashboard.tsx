import ToDo from "./todo";
export default function Dashboard() {

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
    
      <style>
      {`
      .custom-table {
      border-collapse: collapse; 
      table-layout: auto;          
      width: auto;              
      }

      .custom-table th, 
      .custom-table td {
      border: 1px solid black;
      padding: 8px 12px;
      white-space: nowrap;        
      text-align: left;
      }
      `}
      </style>


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
      <img
        src="/logo.png"  
        alt="Logo"
        style={{ height: "80px", cursor: "pointer" }}
      />
      </nav>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '60px',
          backgroundColor: 'white',
          color: 'black',
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}
      >
        {/* Main Content (left) */}
        <div style={{ flex: 1 }}>
          <h1 style={titleStyle}>Welcome Back Sharon</h1>

          <div>
            <h2 style={subStyle} className="table-heading">Current Projects</h2>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Status</th>
                  <th>Project Manager</th>
                  <th>Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Website Redesign</td>
                  <td>In Progress</td>
                  <td>Alice</td>
                  <td>July 15, 2025</td>
                </tr>
                <tr>
                  <td>Mobile App</td>
                  <td>Planning</td>
                  <td>Bob</td>
                  <td>Aug 1, 2025</td>
                </tr>
                <tr>
                  <td>API Integration</td>
                  <td>Testing</td>
                  <td>Carol</td>
                  <td>June 30, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
    
    </div>
    <ToDo />
    </div>
    </>
  );
}
